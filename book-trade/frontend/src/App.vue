<script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'app',
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'isAuth',
        'currentUser',
        'users',
        'posts',
      ]),
      isAdmin() {
        return this.currentUser.login === 'admin';
      },
    },
    watch: {
      isAuth(newValue) {
        if (newValue) {
          this.getUsers();
          this.getPosts();
          this.$router.push({ path: this.$router.history._startLocation === '/auth' ? '/' : this.$router.history._startLocation });
        } else {
          this.$router.push({ name: 'auth' });
        }
      },
    },
    created() {
      if (!this.isAuth) {
        this.$router.push({ name: 'auth' });
      }
    },
    methods: {
      ...mapActions([
        'checkingAuth',
        'getUsers',
        'createUser',
        'editUser',
        'deleteUser',
        'getPosts',
        'createPost',
        'editPost',
        'deletePost',
      ]),
      handleLogin(form) {
        this.checkingAuth({
          login: form.login.toLowerCase(),
          password: form.password,
        });
      },
      handleButtonClick({ type, id }) {
        switch (type) {
          case 'admin-user-add':
            this.$router.push({ name: type });
            break;
          case 'admin-user-edit':
            this.$router.push({ name: type, params: { foundUser: this.users.find(({ id: userId }) => userId === id) } });
            break;
          case 'delete-user':
            this.deleteUser({ id });
            break;
          case 'admin-post-add':
            this.$router.push({ name: type });
            break;
          case 'admin-post-edit':
            this.$router.push({ name: type, params: { foundPost: this.posts.find(({ id: postId }) => postId === id) } });
            break;
          case 'post-add':
            this.$router.push({ name: type });
            break;
          case 'post-edit':
            this.$router.push({ name: type, params: { foundPost: this.posts.find(({ id: postId }) => postId === id) } });
            break;
          case 'delete-post':
            this.deletePost({ id });
            break;
          default:
            break;
        }
      },
      handleCreateUser(form) {
        this.createUser(form)
          .then(() => this.$router.push({ name: 'admin-users' }));
      },
      handleEditUser(form, foundUser) {
        this.editUser({ ...form, id: foundUser.id })
          .then(() => this.$router.push({ name: 'admin-users' }));
      },
      handleCreatePost(form, isAdminPanel = false) {
        this.createPost(form)
          .then(() => this.$router.push({ name: isAdminPanel ? 'admin-posts' : 'posts' }));
      },
      handleEditPost(form, foundPost, isAdminPanel = false) {
        this.editPost({ ...form, id: foundPost.id })
          .then(() => this.$router.push({ name: isAdminPanel ? 'admin-posts' : 'posts' }));
      },
    }
  }
</script>

<template>
  <div id="app">
    <router-view
      :isAdmin="isAdmin"
      :currentUser="currentUser"
      :users="users"
      :posts="posts"
      @login="handleLogin"
      @button-click="handleButtonClick"
      @create-user="handleCreateUser"
      @edit-user="handleEditUser"
      @create-post="handleCreatePost"
      @edit-post="handleEditPost"
    />
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
</style>

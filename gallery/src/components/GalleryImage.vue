<template>
  <div id="gallery">
    <div class="gallery__wrapper">
      <div class="item" v-for="(item, index) in gallery" :key="index">
        <div class="item__wrapper">
          <div class="author">
            <div class="author__wrapper">
              <a :href="item.linkProfile" target="_blank"><img :src="item.avatar" :alt="'@' + item.social"></a>
              <div class="aw__text">
                <span class="awt__name">{{ item.first_name }}<template v-if="item.last_name != ''"> {{ item.last_name }}</template></span>
                <span class="awt__social">@{{ item.social }}</span>
              </div>
            </div>
          </div>
          <div class="image">
            <img :src="item.image" :alt="'@' + item.social">
          </div>
          <div class="views">
            <div class="views__wrapper">
              <span>{{ item.views }}</span>
              <img src="../assets/img/eye.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paginator">
      <div class="paginator__wrapper">
        <template v-for="(item, index) in pagination">
          <a :class="[pickedPage === index ? 'active' : '','item']" href="#" @click.prevent="togglePagination(item.page, index)" :key="index" v-if="item.show != false">{{ item.page }}</a>
          <span class="item separator" :key="index" v-else>...</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'GalleryImage',
  data: function () {
    return {
      accesskey: '3e565562a4f6be06a1485f8d26a631fe90eb0bf83ac33a714e7768a7505ba697',
      gallery: [],
      pagination: [{
        page: 1,
        show: true
      }, {
        page: 2,
        show: true
      }, {
        page: 3,
        show: true
      }, {
        page: 4,
        show: true
      }, {
        page: 5,
        show: true
      }, {
        page: 6,
        show: true
      }, {
        page: 7,
        show: true
      }, {
        page: 8,
        show: true
      }, {
        page: 9,
        show: true
      }, {
        page: 10,
        show: true
      }],
      pickedPage: 0
    }
  },
  mounted() {
    axios
      .get(`https://api.unsplash.com/photos/?page=1&client_id=${this.accesskey}`)
        .then(res => {
          // console.log(res)
          this.fillGallery(res.data)
        })
        .catch(rej => (console.log(rej)))
    
    for (let i = 0; i <= this.pagination.length - 1; i++) {
      if (this.pickedPage === 0) {
        if (i < 5) {
          this.pagination[i].show = true
        } else {
          this.pagination[i].show = false
        }
        if (i === this.pagination.length - 1) {
          this.pagination[i].show = true
        }
      }
    }
  },
  methods: {
    fillGallery(data) { 
      console.log(data)
      for ( let i = 0; i <= data.length - 1; i++) {
        axios
          .get(`https://api.unsplash.com/users/${data[i].user.username}/statistics?client_id=${this.accesskey}`)
            .then(res => {
              this.gallery.push({
                'first_name': data[i].user.first_name,
                'last_name': data[i].user.last_name,
                'social': data[i].user.instagram_username || data[i].user.twitter_username || data[i].user.username,
                'avatar': data[i].user.profile_image.small,
                'linkProfile': data[i].user.links.html,
                'image': data[i].urls.regular,
                'views': res.data.views.total
              })
            })
            .catch(rej => (console.log(rej)))
      }
    },
    togglePagination(indexPage, index) {
      
      for (let i = 0; i <= this.pagination.length - 1; i++) {
        if (index === 0) {
          if (i < 5) {
            this.pagination[i].show = true
          } else {
            this.pagination[i].show = false
          }
          if (i === this.pagination.length - 1) {
            this.pagination[i].show = true
          }
        }

        if (index > 3) {
          if (i === index - 1 || i === index || i === index + 1) {
            this.pagination[i].show = true
          } else {
            this.pagination[i].show = false
          }

          if (i === 0) {
            this.pagination[i].show = true
          }

          if (i === this.pagination.length - 1) {
            this.pagination[i].show = true
          }
        } else {
          if (i === 0) {
            this.pagination[i].show = true
          }

          if (i < 5) {
            this.pagination[i].show = true
          } else {
            this.pagination[i].show = false
          }

          if (i === this.pagination.length - 1) {
            this.pagination[i].show = true
          }
        }
      }

      if (this.pickedPage != index) this.pickedPage = index

      this.gallery = []
      axios
      .get(`https://api.unsplash.com/photos/?page=${indexPage}&client_id=${this.accesskey}`)
        .then(res => {
          // console.log(res)
          this.fillGallery(res.data)
        })
        .catch(rej => (console.log(rej)))
    }
  }
}
</script>

<style scoped>
  #gallery {
    max-width: 100%;
    width: 100%;
  }
    .gallery__wrapper {
      max-width: 320px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto 60px;
    }
      .gallery__wrapper .item {
        width: 100%;
      }
        .item__wrapper {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 0 auto 16px;
        }
          .author {
            margin: 10px auto 10px 10px
          }
            .author__wrapper {
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }
              .author__wrapper a {
                display: block;
                max-width: 30px;
                width: 100%;
                margin-right: 10px;
                cursor: pointer;
              }
                .author__wrapper a img {
                  max-width: 100%;
                  width: 100%;
                  margin: 0 auto;
                  border-radius: 50%;
                }
              .aw__text {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
              }
                .awt__name {
                  display: block;
                  width: 100%;
                  font-family: Roboto-Condensed, sans-serif;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 12px;
                  line-height: 14px;
                  color: #333333;
                }
                .awt__social {
                  display: block;
                  width: 100%;
                  font-family: Roboto-Condensed, sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #8D8D8D;
                }
          .image {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 230px;
            max-height: 230px;
            overflow: hidden;
          }
            .image img {
              max-width: 100%;
              width: 100%;
              margin: 0 auto;
            }
          .views {
            width: 100%
          }
            .views__wrapper {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              margin: 10px 0 0;
            }
              .views__wrapper span {
                font-family: Roboto-Condensed, sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 14px;
                text-align: right;
                color: #8D8D8D;
              }
              .views__wrapper img {
                max-width: 18px;
                width: 100%;
                margin: 0 10px 0 5px;
              }
    .paginator {
      width: 100%;
      background: #000000;
      opacity: 0.9;
      position: fixed;
      bottom: 0;
    }
      .paginator__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
        .paginator__wrapper .item {
          font-family: Roboto-Condensed, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 60px;
          text-align: center;
          color: #FFFFFF;
          cursor: pointer;
          margin: 0 .5rem;
          transition: .7s;
          text-decoration: none;
        }
        .paginator__wrapper .item.active {
          font-weight: bold;
          font-size: 24px;
        }
        .separator:not(:nth-child(2)) {
          display: none;
        }
        .separator:nth-last-child(2) {
          display: block;
        }
  @media only screen and (min-width: 480px) {
    #gallery {}
      .gallery__wrapper {
        max-width: 440px;
      }
        .gallery__wrapper .item {}
          .item__wrapper {}
            .author {}
              .author__wrapper {}
                .author__wrapper a {}
                  .author__wrapper a img {}
                .aw__text {}
                  .awt__name {}
                  .awt__social {}
            .image {}
              .image img {}
            .views {}
              .views__wrapper {}
                .views__wrapper span {}
                .views__wrapper img {}
      .paginator {}
        .paginator__wrapper {}
          .paginator__wrapper .item {}
          .paginator__wrapper .item.active {}
          .separator:not(:nth-child(2)) {}
          .separator:nth-last-child(2) {}
  }
  @media only screen and (min-width: 768px) {
    #gallery {}
      .gallery__wrapper {
        max-width: 660px;
      }
        .gallery__wrapper .item {
          max-width: 320px;
        }
        .gallery__wrapper .item:nth-child(even) {
          margin-left: 20px;
        }
          .item__wrapper {}
            .author {}
              .author__wrapper {}
                .author__wrapper a {}
                  .author__wrapper a img {}
                .aw__text {}
                  .awt__name {}
                  .awt__social {}
            .image {}
              .image img {}
            .views {}
              .views__wrapper {}
                .views__wrapper span {}
                .views__wrapper img {}
      .paginator {}
        .paginator__wrapper {}
          .paginator__wrapper .item {}
          .paginator__wrapper .item.active {}
          .separator:not(:nth-child(2)) {}
          .separator:nth-last-child(2) {}
  }
  @media only screen and (min-width: 1000px) {
    /* #gallery {
      max-width: 100%;
    }
      .gallery__wrapper {
        max-width: 660px;
      }
        .gallery__wrapper .item {
          max-width: 320px;
        }
        .gallery__wrapper .item:nth-child(even) {
          margin-left: 20px;
        }
          .item__wrapper {}
            .author {}
              .author__wrapper {}
                .author__wrapper a {}
                  .author__wrapper a img {}
                .aw__text {}
                  .awt__name {}
                  .awt__social {}
            .image {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 230px;
              max-height: 230px;
              overflow: hidden;
            }
              .image img {
              }
            .views {}
              .views__wrapper {}
                .views__wrapper span {}
                .views__wrapper img {}
      .paginator {}
        .paginator__wrapper {}
          .paginator__wrapper .item {}
          .paginator__wrapper .item.active {}
          .separator:not(:nth-child(2)) {}
          .separator:nth-last-child(2) {} */
  }
</style>
<template>
  <div>
    <GalleryImage />
  </div>
</template>

<script>
import GalleryImage from './components/GalleryImage.vue'

export default {
  name: 'app',
  components: {
    GalleryImage
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin:  0;
  }

  font-family {
    font-family: Roboto-Condensed;
    src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url('/assets/fonts/Robotocondensed.woff2') format('woff2'), url('/assets/fonts/Robotocondensed.woff') format('woff'), url('/assets/fonts/Robotocondensed.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
</style>
<template>
    <div class="image-container">
        <img :src="image.link" alt="" v-for="image in allImages" :key="image.id" />
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name:     'Gallery',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['allImages']),
    },
    methods:  {
      ...mapActions(['fetchImages'])
    },
    created() {
      this.fetchImages()
    },
  };
</script>


<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    img {
        max-width: 100%;
        padding: 5px;
    }
</style>
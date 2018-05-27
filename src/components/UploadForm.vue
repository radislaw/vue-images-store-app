<template>
    <div class="dropper">
        <input
                type="file"
                @change="uploadImages($event.target.files)"
                multiple
                accept="image/*"
        />
        <span>Drag Files Here!</span>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name:     'UploadForm',
    data() {
      return {}
    },
    methods:  {
      ...mapActions(['uploadImages'])
    },
    computed: {},
  };
</script>

<style scoped>
    .dropper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30vh;
        border: 1px dashed black;
        border-radius: 10px;
        position: relative;
    }

    .dropper:hover {
        background-color: #eee;
    }

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
</style>

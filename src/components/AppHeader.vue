<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item ">
            Image Storage
        </router-link>
        <div class="right menu">
            <template v-if="isLoggedIn">
            <router-link to="/gallery" class="ui item">Gallery</router-link>
            <router-link to="/upload" class="ui item">Upload</router-link>
            <a href="#" class="ui item" @click.prevent="logout" >Logout</a>
            </template>
            <a href="#" class="ui item" @click.prevent="login" v-else>Login</a>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name:     "AppHeader",
    computed: {
      ...mapGetters(['isLoggedIn']),
    },
    methods:  {
      ...mapActions(['login', 'logout'])
    }
  };
</script>

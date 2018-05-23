<template>
  <div>
    Please wait...
  </div>
</template>


<script>
import { mapAcions } from "vuex";
export default {
  name: "AuthHandler",
  methods: mapAcions(["finalazeLogin"]),
  created() {
    this.finalizeLogin();
  }
};
</script>

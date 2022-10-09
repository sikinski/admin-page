<template>
  <!-- <AdminAuth /> -->
  <AdminNav />
  <AdminHeader />
  <div class="inner-block">
    <router-view />
  </div>
</template>

<script>
import AdminNav from "./components/AdminNav.vue";
import AdminHeader from "./components/AdminHeader.vue";
import AdminAuth from "./views/AdminAuth.vue";

export default {
  components: {
    AdminNav,
    AdminHeader,
    AdminAuth,
  },
};
</script>

<style lang="sass" src="./assets/styles/index.sass"></style>

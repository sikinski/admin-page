<template>
  <AdminNav />
  <AdminHeader />
  <div class="inner-block">
    <router-view />
  </div>
</template>

<script>
import AdminNav from "./components/AdminNav.vue";
import AdminHeader from "./components/AdminHeader.vue";

export default {
  components: {
    AdminNav,
    AdminHeader,
  },
};
</script>

<style lang="sass" src="./assets/styles/index.sass"></style>

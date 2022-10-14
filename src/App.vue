<template>
  <AdminAuth v-if="!this.$store.state.authorized" />
  <template v-if="this.$store.state.authorized">
    <AdminNav />
    <AdminHeader />
    <div class="inner-block">
      <router-view />
    </div>
  </template>
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

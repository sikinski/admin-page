<template>
  <div id="home" class="view flex-center">
    <WeatherWidget />
    <h1 class="welcome-text">
      Приветствую тебя, User Name. <br />Продуктивного дня! ✅
    </h1>
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget.vue";
export default { components: { WeatherWidget } };
</script>

<style lang="sass"></style>

<template>
  <div id="home" class="view flex-center">
    <WeatherWidget />
    <h1 class="welcome-text">
      Приветствую тебя, User Name. <br />Продуктивного дня! ✅
    </h1>

    <ToDo />
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget.vue";
import ToDo from "@/components/ToDo.vue";
export default { components: { WeatherWidget, ToDo } };
</script>

<style lang="sass">
#home
  display: grid
  grid-template-columns: auto 1fr
  grid-template-rows: auto 1fr
  .welcome-text
    text-align: center
    color: darken(gray, 20%)
</style>

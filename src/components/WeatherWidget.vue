<template>
  <div class="weather-widget">
    <img :src="weatherIcon" alt="" class="bg-image" />
    <p class="name-city">{{ cityName }}</p>
    <p class="degrees">{{ degrees }}</p>
    <p class="desc">{{ weatherDescription }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
      degrees: "",
      weatherDescription: "",
      weatherIcon: "",
    };
  },
  async mounted() {
    await this.getCurrectWeather();
  },
  methods: {
    async getCurrectWeather() {
      const API_KEY = "653bd19e8b3a2c43f39f3a01e299a968";
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=55.16&lon=61.43&lang=ru&appid=${API_KEY}`
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.cityName = data.name;
          this.degrees = Math.round(data.main.temp - 273) + "°";
          this.weatherDescription = data.weather[0]["description"];
          this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
        });
    },
  },
};
</script>

<style lang="sass">
.weather-widget
    display: flex
    flex-direction: column
    position: relative
    background-color: #7ea9d3
    border-radius: 16px
    padding: 22px

    .bg-image
        position: absolute
        height: 100%
        top: 0
        right: 0
    .name-city
        z-index: 1
        font-size: 1.8rem
    .degrees
        z-index: 1
        margin: 6% 0 12% 0
        font-size: 2.5rem
    .desc
        z-index: 1
        text-transform: capitalize
        margin-top: auto
</style>

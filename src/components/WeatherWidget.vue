<template>
  <div class="weather-widget">
    <!-- <img :src="weatherIcon" alt="" class="bg-image" /> -->
    <div
      class="bg-image"
      :style="{ backgroundImage: 'url(' + weatherIcon + ')' }"
    ></div>
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
    display: grid
    grid-template-areas: "name name" "deg icon" "desc desc"
    grid-template-columns: 20% auto
    flex-direction: column
    grid-gap: 10px 0
    position: relative
    background-color: #7ea9d3
    border-radius: 16px
    padding: 22px
    .bg-image
        grid-area: icon
        width: 100%
        height: 100%
        background-repeat: no-repeat
        background-position: right
        margin-left: auto
        object-fit: cover
    .name-city
        grid-area: name
        z-index: 1
        font-size: 1.8rem
    .degrees
        grid-area: deg
        z-index: 1
        margin: 6% 0 12% 0
        font-size: 2.5rem
    .desc
        grid-area: desc
        z-index: 1
        text-transform: capitalize
        margin-top: auto
</style>

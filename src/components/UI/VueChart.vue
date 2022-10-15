<template>
  <div><canvas id="piechart" width="250" height="250"></canvas></div>
</template>

<script>
let piechart = require("piechart");
export default {
  mounted() {
    piechart(document.getElementById("piechart"), [
      { value: 180, color: "#AFE1AF" },
      { value: 180, color: "#F08080" },
    ]);
  },
};
</script>

<style lang="sass">
#piechart
    margin: 0 -50%
</style>

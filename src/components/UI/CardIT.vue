<template>
  <div class="card">
    <div class="info-card">
      <p class="title name">Интернет-магазин обуви "ZENDEN"</p>
      <p class="title dates">
        <span class="date-from">2021</span>
        <span class="date-to">2021</span>
      </p>
      <p class="title">Реализовать Front-end часть интернет-магазина</p>
      <div class="done-tasks">
        <p class="title">Завершено:</p>
        <ul>
          <li class="done-item">1</li>
          <li class="done-item">2</li>
          <li class="done-item">3</li>
        </ul>
      </div>
      <div class="not-done-tasks">
        <p class="title">Не завершено:</p>
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales">Scales</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Horns</label>
        </div>
      </div>
    </div>

    <VueChart />
  </div>
</template>

<script>
import VueChart from "@/components/UI/VueChart";
export default {
  components: {
    VueChart,
  },
};
</script>

<style lang="sass">
.card
  width: 100%
  display: flex
  justify-content: space-between
  .title
    margin: 16px 0
  .dates
    display: flex
    justify-content: space-between
  .done-tasks
    .title
      padding: 5px
      border-radius: 5px
      background-color: #AFE1AF
  .not-done-tasks
    .title
      padding: 5px
      border-radius: 5px
      background-color: #F08080
</style>

<template>
  <div id="projects-IT" class="view">
    <h2>Проекты по IT</h2>

    <button @click="openForm" class="open-form">
      Создать новый проект
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path
          d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
        />
      </svg>
    </button>

    <form class="form" v-if="showForm">
      <label for="name"
        >Введите название проекта (например, "интернет-магазин Zenden")</label
      >
      <input
        type="text"
        class="input"
        v-model="taskData.name"
        name="name"
        placeholder="Название"
      />
      <label for="desc">Введите описание проекта</label>
      <input
        type="text"
        name="desc"
        class="input"
        v-model="taskData.desc"
        placeholder="Описание"
      />
      <div class="dates">
        <label for="date-start">Дата начала:</label>
        <input
          type="text"
          name="date-start"
          class="input"
          v-model="taskData.dateStart"
          placeholder="Дата начала"
        />
        <label for="date-end">Дата завершения:</label>
        <input
          type="text"
          name="date-end"
          class="input"
          v-model="taskData.dateEnd"
          placeholder="Дата завершения"
        />
      </div>

      <!-- <label for="points">Введите задачи через запятую</label>
      <textarea
        type="text"
        class="input textarea"
        name="points"
        placeholder="Сверстать главную, создать
        базу данных"
      ></textarea> -->

      <button
        @click.prevent="createProject"
        type="submit"
        class="create-project"
      >
        Создать
      </button>
    </form>

    <div class="cards-container">
      <CardIT />
    </div>
  </div>
</template>

<script>
import CardIT from "../components/UI/CardIT.vue";
import axios from "axios";
export default {
  data() {
    return {
      taskData: {
        name: "",
        desc: "",
        dateStart: "",
        dateEnd: "",
      },
      showForm: false,
    };
  },
  methods: {
    openForm() {
      this.showForm = !this.showForm;
    },
    async createProject() {
      const taskData = {
        name: this.taskData.name,
        description: this.taskData.desc,
        dateStart: this.taskData.dateStart,
        dateEnd: this.taskData.dateEnd,
      };

      const url = "http://localhost:8080/createTaskIT";
      await axios.post(url, taskData).then((res) => {
        console.log(res);
      });
    },
  },
  components: { CardIT },
};
</script>

<style lang="sass">
#projects-IT

  .open-form
    display: flex
    border: 1px solid gray
    width: 100%
    justify-content: center
    align-items: center
    padding: 10px 0
    margin: 20px 0 0  0
    transition: 0.2s ease
    border-radius: 5px
    svg
      max-width: 30px
      margin: 0 10px
      path
        transition: 0.2s ease

    &:hover
      background-color: var(--gray-color)
      color: #fff
      svg
        path
            fill: #fff
  .form
    margin: 4% 0
    .textarea::placeholder, .textarea:-moz-placeholder
        white-space: nowrap

    .input, .dates
      width: 100%
      margin: 5px 0 15px 0
    .input, .dates, label
      font-size: 1.2rem
      &::placeholder
        font-size: 1.2rem
    label
      margin-bottom: 15px
    .input
      padding: 15px 20px
    .create-project
      width: 100%
      padding: 20px 0
      margin-top: 2%
      color: #fff
      background-color: var(--gray-color)
</style>

<template>
  <div class="auth">
    <div class="auth-window">
      <h2 class="heading">Вход в админ-панель</h2>
      <form class="form flex-center">
        <input
          type="text"
          class="input username"
          placeholder="Ваш юзернейм"
          v-model="username"
        />
        <input
          type="password"
          class="input password"
          placeholder="Ваш пароль"
          v-model="pass"
        />
        <button @click.prevent="userEnter" class="sign-in">Войти</button>
      </form>
      <!-- <p class="error">Администратор с таким логином и паролем не найден</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      pass: "",
    };
  },
  methods: {
    async userEnter() {
      const userData = {
        username: this.username,
        password: this.pass,
      };

      const axiosConfig = {
        headers: {
          "content-type": "text/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      const url = "http://localhost:8080/auth";

      await axios.post(url, userData, axiosConfig.headers);
    },
  },
};
</script>

<style lang="sass">
.auth
    width: 100vw
    height: 100vh
    overflow: hidden
    background-color: var(--main-color)
    text-align: center
    color: var(--dark-gray-color)
    .auth-window
        display: flex
        flex-direction: column
        justify-content: space-evenly
        width: 30%
        padding: 30px
        height: 50%
        position: fixed
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        background-color: var(--main-bg-color)
        border-radius: 32px
        .heading
            font-size: 1.8rem
        .form
            flex-direction: column
            max-height: 100%
            .input
                width: 100%
                margin: 20px 0
                border-radius: 8px
                padding: 12px 18px
                font-size: 1.4rem
                border: 1px solid var(--dark-gray-color)
                &::placeholder
                    font-size: 1.2rem
            .sign-in
                width: 100%
                margin-top: 6%
                padding: 19px 0
                background-color: var(--gray-color)
                border-radius: 8px
                color: #fff
                font-size: 1.1rem
                transition: 0.2s ease-in
                &:hover
                    background-color: darken(gray, 5%)
        .error
            color: #B22222 // dark red
</style>

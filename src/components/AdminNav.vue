<template>
  <div id="panel">
    <div class="logo flex-center">
      <img
        src="https://www.adminlabs.com/media/adminlabs-logo.png"
        alt="logo"
      />
    </div>
    <nav id="nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/projects" class="nav-link">Проекты</router-link>
      <router-link to="/stat" class="nav-link">Статистика</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
#panel
    display: flex
    flex-direction: column
    align-items: center
    position: fixed
    width: 17%
    height: 100vh
    background-color: var(--light-color)
    color: var(--light-color)
    .logo
        width: 100%
        height: 7vh
        background-color: var(--main-color)
        img
            width: 150px
    #nav
        display: flex
        padding: 0 35px
        color: var(--gray-color)
        align-self: flex-start
        flex: 1
        flex-direction: column
        align-items: flex-start
        .nav-link
            font-size: 1.4rem
            padding: 10px 0
</style>

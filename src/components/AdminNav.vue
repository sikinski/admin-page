<template>
  <div id="panel">
    <div class="logo flex-center">
      <img
        src="https://www.adminlabs.com/media/adminlabs-logo.png"
        alt="logo"
      />
    </div>

    <nav id="nav">
      <router-link to="/" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              alt="" /></span
          >Главная
        </p>
      </router-link>

      <router-link to="/projects/IT" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/3474/3474360.png"
              alt="" /></span
          >IT
        </p></router-link
      >
      <router-link to="/projects/arbitraz" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/925/925748.png"
              alt="" /></span
          >Арбитраж
        </p></router-link
      >

      <router-link to="/projects/tg" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/739/739260.png"
              alt="" /></span
          >Телеграм
        </p></router-link
      >
      <router-link to="/stats" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/717/717172.png"
              alt="" /></span
          >Статистика
        </p></router-link
      >
      <router-link to="/workers" class="nav-link"
        ><p>
          <span class="icon"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/2914/2914275.png"
              alt="" /></span
          >Менеджеры
        </p></router-link
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
@keyframes fadeIn
    0%
        opacity: 0
    100%
        opacity: 1

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
        min-height: 65px
        background-color: var(--main-color)
        img
            width: 150px
    #nav
        display: flex
        padding: 35px
        color: var(--gray-color)
        align-self: flex-start
        flex: 1
        flex-direction: column
        align-items: flex-start
        .nav-link
            padding: 16px 0
            p
                display: flex
                font-size: 1.4rem
                align-items: center
            .icon
                display: block
                width: 30px
                height: 30px
                margin-right: 20px
                img
                    max-width: 100%
</style>

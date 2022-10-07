<template>
  <header id="header">
    <div class="inner-block flex-center">
      <div class="user flex-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="user-image"
          class="user-image"
        />
        <p class="name">User Name</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass">
#header
    height: 65px
    background-color: var(--main-color)
    color: var(--light-color)
    padding: 0 45px
    .inner-block
        display: flex
        justify-content: space-between
        align-items: center
        .user
            margin-left: auto
            .user-image
                width: 30px
                margin: 0 8px
</style>

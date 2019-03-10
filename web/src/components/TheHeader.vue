<template>
  <header class="header">
    <h1 class="header__logo"><router-link :to="'/'"><Logo /></router-link></h1>
    <TheNavigation class="header__nav" />
  </header>
</template>

<script>
import TheNavigation from './TheNavigation'
import Logo from './Logo'

export default {
  components: { TheNavigation, Logo }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;

  &__logo {
    padding-left: 20px;

    a {
      line-height: 1;
      text-decoration: none;
      transition: opacity .3s ease;

      &:hover {
        opacity: .7;
      }
    }
  }
  &__nav {

  }
}
</style>
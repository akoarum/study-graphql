<template>
  <nav class="nav">
    <ul class="nav__list">
      <li>
        <router-link :to="{ path: '/blog' }">Blogs</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    font-size: 1.6rem;

    a {
      display: inline-block;
      padding: 28px 16px;
      background: #242424;
      line-height: 1;
      text-decoration: none;
      color: #fff;
      transition: opacity .3s ease;

      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
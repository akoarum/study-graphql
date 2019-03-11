<template>
  <div class="postItem">
    <router-link :to="{ name: 'blogDetail', params: { id } }">
      <strong class="postItem__title">{{ title }}</strong>
      <time :datetime="date" class="postItem__date">{{ date }}</time>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: [String, Number], required: true },
    title: { type: String, required: true },
    date: { type: [String, Date], required: true }
  }
}
</script>

<style lang="scss" scoped>
.postItem {
  &__title {
    display: block;
    margin-bottom: 4px;
    font-size: 2.2rem;
    line-height: 1.4;
  }
  &__date {
    font-size: 1.5rem;
  }
  a {
    display: block;
    padding: 18px 14px 18px;
    color: #242424;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background: #f4f4f4;
    }
  }
}
</style>

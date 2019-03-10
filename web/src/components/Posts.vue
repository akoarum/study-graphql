<template>
  <div class="posts">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :date="post.date"
      class="posts__item"
    />
  </div>
</template>

<script>
import PostItem from './PostItem'
export default {
  components: { PostItem },
  props: {
    posts: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  &__item {
    border-top: 1px solid #d8d8d8;

    &:last-child {
      border-bottom: 1px solid #d8d8d8;
    }
  }
}
</style>
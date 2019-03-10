<template>
  <article class="post">
    <div v-if="$apollo.loading">Now Loading...</div>
    <header v-if="post.title" class="post__header">
      <h1 class="post__title">{{ post.title }}</h1>
      <time :datetime="post.date" class="post__date">{{ post.date }}</time>
    </header>
    <div v-html="post.content" class="post__content" />
  </article>
</template>

<script>
import gql from 'graphql-tag'

const getPost = gql`
  query GET_POST($id: ID!) {
    post(id: $id) {
      id
      postId
      title
      date
      uri
      content
    }
  }
`

export default {
  name: 'BlogDetail',
  data() {
    return {
      post: []
    }
  },
  apollo: {
    post: {
      query: getPost,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &__header {
    position: relative;
    margin-bottom: 22px;
    padding-bottom: 10px;

    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 44px;
      height: 2px;
      background: #242424;
    }
  }
  &__title {
    margin-bottom: 6px;
    font-size: 2.6rem;
    line-height: 1.3;
  }
  &__date {
    font-size: 1.4rem;
  }
}
</style>
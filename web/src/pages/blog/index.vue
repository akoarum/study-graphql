<template>
  <div>
    <Posts :posts="modifierPosts" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Posts from '../../components/Posts.vue'

const getPosts = gql`
  query GET_POSTS($counts: Int) {
    posts(first: $counts) {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`

export default {
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    modifierPosts() {
      const posts = this.posts.edges
      if (!posts) return []
      return posts.map(post => post.node)
    }
  },
  apollo: {
    posts: {
      query: getPosts,
      variables() {
        return {
          counts: 10
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

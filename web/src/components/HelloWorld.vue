<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="data in datas" :key="data.id">
        <strong>{{ data.title }}</strong>
        <time>{{ data.date }}</time>
      </li>
    </ul>
    <input v-model="getCount" type="number" />
  </div>
</template>

<script>
import gql from 'graphql-tag'

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
  props: {
    msg: String
  },
  data() {
    return {
      posts: [],
      getCount: 1
    }
  },
  computed: {
    datas() {
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
          counts: this.getCount
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

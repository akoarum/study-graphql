<template>
  <div id="app">
    <TheHeader />
    <div class="appContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TheHeader from './components/TheHeader'
import Posts from './components/Posts'

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
  name: 'App',
  components: { TheHeader, Posts },
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

<style lang="scss">
section,
article,
aside,
header,
footer,
nav,
main,
figure,
figcaption {
  display: block;
}

audio,
video,
canvas {
  display: inline-block;
}

html {
  font-family: "Lato", "Yu Gothic", YuGothic, "Hiragino Sans", "Hiragino Kaku Gothic Std", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  color: #242424;
}

body {
  margin: 0;
  font-feature-settings: 'pkna';
  letter-spacing: .04em;
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
  font-size: 1.5rem;
}

ul, ol {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}

li {
  list-style-type: none;
}

dl {
  font-size: 1.5rem;
  dt {
    font-weight: normal;
  }
  dd {
    margin-left: 0;
  }
}

table {
  border-collapse: collapse;
  font-size: 1.5rem;
}

iframe {
  border: none;
}

a {
  background-color: transparent;
  color: #194db5;
  text-decoration: underline;
  &:hover,
  &:active {
    outline-width: 0;
  }
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
}

em {
  font-style: normal;
  font-weight: bold;
}

b,
strong {
  font-weight: bold;
}

i,
dfn {
  font-style: normal;
}

sup,
sub {
  position: relative;
  line-height: 0;
  font-size: 75%;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}


img,
svg {
  border: none;
  vertical-align: top;
  max-width: 100%;
  height: auto;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
  padding: 0;
}


// ==============================
// Forms
// ==============================

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

button,
input,
select,
textarea {
  display: inline-block;
  margin: 0;
  border-radius: 0;
  font-family: inherit;
}

textarea {
  overflow: auto;
}

button,
input[type="submit"],
label {
  cursor: pointer;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  border: none;
  border-radius: 0;
  padding: 0;
  background: transparent;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  display: none;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.appContent {
  padding: 38px 20px 26px;
}
</style>

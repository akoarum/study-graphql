import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import App from './App.vue'
import store from './store'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'
import ApolloClient from 'apollo-boost'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(VueApollo)
Vue.use(VueRouter)

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

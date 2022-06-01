<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home和Search是显示的,在Login和Register隐藏 -->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch('home/categoryList')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

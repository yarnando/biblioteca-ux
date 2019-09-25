<template>
  <div id="app">
      <header>
          <Header/>
      </header>

      <main class="container">
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue'

export default {
  name: 'app',
  components: {
      Header
  }
}
</script>

<style>

</style>

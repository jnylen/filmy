<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>
<template>
  <div id="app">
    <router-view />
    <Navigation id="nav"></Navigation>
  </div>
</template>

<style lang="scss">

</style>

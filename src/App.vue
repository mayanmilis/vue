<template>
<div>
  <div>
    <header>SPECTRUM</header>
  </div>
  <br>
  <div>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/cart">CART</a></li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Home from './components/Home/index.vue'

export default {
    components: {
      'app-home': Home
    },

}
</script>

<style>

</style>

<template>
  <div>
    <AppProducts
      v-for="product in $store.state.products" :key="product.id" :product="product"
    />
  </div>
  <div>
    <pre>
      {{ $store.state.cart }}
    </pre>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppProducts from './components/products/AppProducts.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppProducts
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

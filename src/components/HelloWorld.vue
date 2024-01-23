<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $store.state.user.name }} - {{ $store.state.user.email }} - {{ $store.state.user.pass }} - {{ $store.state.user.lastName }}
    </p>
    <button @click="newUser()">Trocar user</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    newUser() {
      const newUser = {
      name: "Rayane",
      email: "rayana@teste.com",
      pass: "rayane123"
    };
      this.$store.dispatch('user', newUser).then(() => console.log("Atualizou!"));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

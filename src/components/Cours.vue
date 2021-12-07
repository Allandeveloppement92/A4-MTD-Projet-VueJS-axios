<template>
  <div>
    <h2 id="idh12">Voici les exercices de cours</h2>
    <img id="idh1" src="../assets/img.png">
    <button v-on:click="clicked">click</button>
    <button v-on:click="hide">hide</button>
    <button v-on:click="show">show</button>
    <button v-on:click="create">create</button>
    <div id="create"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Cours',
  data () {
    
    return {
      msg: 'Welcome to Your Vue.js App',
      info: null
    }
  },
  methods: {
    clicked: function () {
      console.log("click")
    },
    hide: function () {
      console.log("hide")
      document.getElementById("idh1").style.display = 'none';
    },
    show: function () {
      console.log("show")
      document.getElementById("idh1").style.display = 'block';
    },
    create: function () {
      var txt = "test"
        var h = document.createElement("p");
        var t = document.createTextNode(txt);
        h.appendChild(t);
        var currentDiv = document.getElementById('create');
        currentDiv.appendChild(h)
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom:10vh;
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
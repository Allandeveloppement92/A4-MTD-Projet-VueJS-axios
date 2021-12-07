<template>
  <div>
    <h1>Bienvenue sur le pokédex</h1>
    <p id="description">
      Voici une liste de 20 pokémons, récupérés à l'aide d'une API sur le site <a href="https://pokeapi.co/">Pokéapi</a>.
      <br/>
      Vous pouvez rechercher un pokémon et obtenir des infos sur lui <router-link to="/rechercher" id="link">ici</router-link> !
    </p>
    <div :key="index" v-for="(pokemon, index) in pokemon">
      <h2> {{ pokemon.name }} </h2>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      pokemon: null
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((reponse) => {
        this.pokemon = reponse.data.results
        console.log(this.pokemon)
      })
  }
}
</script>

<style scoped>
h1{
  font-weight:bold;
  margin-bottom:2vh;
}

h2 {
  font-weight: normal;
}

#descritpion{
  text-align:center;
}

#description a
{
  text-decoration:none;
}

#description a:hover{
  color:red;
  text-decoration:underline;
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
  font-weight:bold;

}

#description #link{
  color:#4e63cc;
  font-weight:bold;
}

#description #link:hover{
  color:red;
}

</style>

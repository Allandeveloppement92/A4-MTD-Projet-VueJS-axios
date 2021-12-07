<template>
  <div class="hello">
      <div class="bloc">
        <h2>Rechercher un pokemon</h2>
        <p>Sélectionnez un <b>id</b> parmis les 898 possibles : <input type="number" id="pokemonID" placeholder="Choix de l'ID" min="0" /><button v-on:click="dataPokemon">Rechercher</button></p>
        <div v-if="this.caracteristique">
            <div>
                <p><b>Nom : {{this.caracteristique.name}}</b></p>
            </div>
            <img id='src'>
            <div>Id : {{this.caracteristique.id}}</div>
            <div>Taille : {{this.caracteristique.height}} pouces</div>
            <div>Poids : {{this.caracteristique.weight}} lbs</div>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Rechercher',
    data () {
      return {
          caracteristique: null,
          pokemonID: 0
      }
    },
    methods: {
        dataPokemon: function() {
            axios
                .get('https://pokeapi.co/api/v2/pokemon/'+ document.getElementById('pokemonID').value)
                .then(response => {
                  this.caracteristique = response.data
                  var imgPoke = document.getElementById('src')
                  imgPoke.src = this.caracteristique.sprites.front_default
                  })
        },
    },
}
</script>

<style scoped>
h1{
  font-weight:bold;
  margin-bottom:2vh;
}

h2 {
  font-weight: bold;
  margin-bottom:10vh;
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
}
</style>

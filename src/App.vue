<template>
  <div id="app">
    <header>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#"><router-link to="/rechercher" id="link">Mon pokédex</router-link></b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><router-link to="/" id="link">Accueil</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/rechercher" id="link">Rechercher un Pokémon</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/cours" id="link">Le cours</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <div id="logo_position">
      <img style="width:200px;" src="./assets/logo_pokeball.png" alt="logo pokeball">
      <img style="width:500px;" src="./assets/logo_pokemon.png" alt="logo titre pokemon">
    </div>
    <router-view/>
    <footer>
      <p>©2021 Mon pokédex - Allan GERMÉ</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  width: 100%;
  margin-bottom: 5vh;
}

.sticky_header{
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  z-index:1;
  position:relative;
}

#logo_position{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom:10vh;
}

footer{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:15vh;
  font-weight:500;
  color:white;
  background-color:#8c8c8c;
  margin-top:5vh;
}

#link{
  text-decoration:none;
  color:white;
}

#link:hover{
  text-decoration:underline;
  color:#f2d541;
}
</style>

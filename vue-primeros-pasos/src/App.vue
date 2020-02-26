<template>
  <div id="app">
    <div class="menu">
      <ul class="menu-list">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/interpolaciones">Interpolaciones</router-link></li>
        <li><router-link to="/directivas">Directivas</router-link></li>
      </ul>
    </div>
    <div class="views">
      <router-view/>
      <hr>
      <div v-if="next" class="navbar is-pulled-right">
        <div class="navbar-item">Siguiente:</div>
        <div class="navbar-item">
          <button class="button" @click="$router.push(next)">
            {{ next }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    routeIndex() {
      return this.routes.findIndex(r => r.name === this.$route.name);
    },
    prev() {
      const route = this.routes[this.routeIndex - 1];
      return route && { name: route.name };
    },
    next() {
      const route = this.routes[this.routeIndex + 1];
      return route && route.name;
    },
  }
}
</script>
<style>
@import './style/main.css';

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}

.menu {
  grid-area: 1 / 1 / 2 / 2;
  padding: 40px;
}

.views {
  grid-area: 1 / 2 / 2 / 3;
  padding: 40px 100px 40px 200px
}


</style>

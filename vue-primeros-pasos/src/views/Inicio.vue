<template>
  <div class="view content">
    <h1>Inicializar un proyecto de vue desde cero</h1>

    <p>Inicializar un proyecto de vue es muy sencillo</p>

    <p>Abrí una consola colocate en la carpeta donde quieras inicializar tu proyecto</p>

    <pre><code>cd documents/mis_proyectos_de_vue</code></pre>

    <p>Luego corré los siguientes comandos:</p>

    <pre><code>npm install -g @vue/cli</code></pre>
    <p><small>(solo si es la primera vez que lo haces en la computadora)</small></p>

    <p>Y luego:</p>

    <pre><code>vue create hello-world</code></pre>
    <p><small>(cada vez que quieras inicializar un proyecto nuevo, donde hello-world es el nombre de tu proyecto)</small></p>

    <p>Luego, segui los pasos del cli segun necesites para tu proyecto</p>

    <hr>

    <div class="message is-warning">
      <p class="message-body">
        <b>Recorda que para hacer todo lo siguiente, tenes que tener instalado Node</b><br />
        Vue CLI requiere Node.js 8.9 o superior
        (8.11.0+ recomendado).
      </p>
    </div>

    <hr>

    <p>Una vez creado el proyecto ingresa a la carpeta</p>
    <pre><code>cd hello-world</code></pre>

    <p>E instala las dependencias</p>
    <pre><code>npm install</code></pre>

    <p>Luego levanta el servidor</p>
    <pre><code>npm run serve</code></pre>
    <hr>
    <h4>Listo, tu proyecto de vue ya esta corriendo</h4>
    <p>Chequea el mensaje de consola que indica cual es la url para acceder desde el navegador, generalmente es: http://localhost:8080/</p>

    <p>
      Podes leer mas al respecto de como instalar vue
      <a href="https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui" target="_blank">aca</a>
    </p>

    <hr>

    <h2>Estructura de la aplicacion</h2>

    <p>La estructura de una aplicacion puede variar segun cada de proyecto,
    <code>hello-world</code> es un proyecto basico de vue y la estructura es la siguiente:</p>

    <pre><code>.
├─+ node_modules
├─+ public
├── src
    ├─+ assets
    ├─+ components
    ├── App.vue
    ├── main.js
├── .browserlistrc
├── .eslintrc.js
├── .gitignore
├── .babel.config.js
├── package-lock.json
├── package.json
├── README.md</code></pre>

    <p><br /></p>

    <div class="message is-info">
      <p class="message-body">src / main.js</p>
    </div>

    <div class="columns">
      <div class="column">
        <p>Este es el archivo  principal de nuestra applicacion donde importamos la biblioteca Vue y el componente principal de la aplicación App.vue</p>
        <p>Configuramos ProductionTip en false, solo para evitar que Vue muestre una sugerencia de "estás en modo de desarrollo" en la consola.</p>
        <p>A continuación, creamos la instancia de Vue, asignándola al elemento del DOM con id <code>#app</code> (definido en App.vue) y le decimos que allí monte el componente app.vue</p>
      </div>
      <div class="column">
        <Code :code="`import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')`" />
      </div>
    </div>
    <div class="message is-info">
      <p class="message-body">src / App.vue</p>
    </div>

    <div class="columns">
      <div class="column is-half" style="flex-shrink: 0;">
        <p>App.vue es nuestro componente principal.</p>
        <p>hay varias formas de definir componentes en vue, nosotros vamos a trabajar con la que se conoce como <code>single file components</code> es decir, el HTML, CSS y JavaScript de nuestro componente unificados en un solo archivo.</p>
      </div>
      <div class="column is-half">
        <Code mode="text/x-vue" :code="appCode"/>
      </div>
    </div>
    <hr>
    <h2>Recomiendo!</h2>
    <h4><a href="https://flaviocopes.nyc3.digitaloceanspaces.com/vue-handbook/vue-handbook.pdf" target="_blank">Vue Handbook</a></h4>
    <p>Este es un excelente libro de vue donde podes ver en mayor detalle todo lo que veremos en esta guia</p>
    <h4><a href="https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf">Vue Essentials Cheat Sheet</a></h4>
    <p>Excelente para imprimir y tener a mano en el dia a dia</p>
    <hr>
    <h2>Introduccion terminada!</h2>
    <p>Ya podemos adentrarnos en el mundo de vue!</p>
    <div class="continue bounce animated infinite">Continuemos! <br/> V </div>
  </div>
</template>

<script>
import { AppCode } from '@/codes.js';

export default {
  name: 'Inicio',
  data() {
    return {
      appCode: AppCode,
    }
  },
}
</script>

<style lang="css" scoped>
  .continue {
    text-align: center;
    margin-left: auto;
    width:150px;
  }

  @keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>

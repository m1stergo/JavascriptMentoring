<template>
  <div class="view content">
    <h1>Directivas</h1>
    <p>Las directivas son un attributo especial de vue que nos permiten aplicar diferentes acciones en nuestro HTML</p>
    <p>Ya hemos visto el uso de directivas en el apartado de interpolaciones</p>
    <p>Si, <code>v-html</code>, <code>v-bind</code>, <code>v-text</code> son directivas</p>
    <Code :code="ejemplo1" mode="text/html" />
    <p>Todas las directivas comienzan con <code>v-</code> para indicar que son un attributo de vue</p>
    <h3>Veamos cada directiva en detalle</h3>
    <TwoColPlay name="v-text">
      <template slot="left">
        <p>Al igual que las interpolaciones <code v-pre>{{}}</code> renderea texto. Cualquier etiqueta html es escapada.  De esta manera, Vue se protege automáticamente de los ataques XSS.</p>
        <Code :code="vTextExample"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-html">
      <template slot="left">
        <p>Hay casos en los que desea generar HTML y hacer que el navegador lo interprete. Para ello, podemos usar v-html:</p>
        <Code :code="vHtmlExample"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-bind">
      <template slot="left">
        <p>Las interpolaciones solo funcionan en el contenido de la etiqueta. No pueden usarse en los atributos.</p>
        <Code :code="vBindExampleWrong"></Code>
        <p>Para tener atributos dinamicos debemos usar v-bind</p>
        <p>→ v-bind<code>:</code>nombreAtributo</p>
        <Code :code="vBindExampleOk"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-model">
      <template slot="left">
        <p>Nos permite vincular un input con un valor del data y mantenerlos sincronizados, es decir que el valor del data de vue se actualizara automaticamente cada vez que el usuario ingrese texto </p>
        <p>Esto es lo que se conoce como <code>Two-way binding</code></p>
        <Code :code="vModelExample"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-if">
      <template slot="left">
        <p>Permite renderear o no un elemento</p>
        <p>Junto con <code>v-if</code>, podemos utilizar <code>v-else-if</code> y <code>v-else</code></p>
        <Code :code="vIfExample"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-show">
      <template slot="left">
        <p>Permite mostrar u ocultar un elemento, la diferencia con <code>v-if</code> esta en que <code>v-show</code> utiliza la propiedad css display, mientras que <code>v-if</code> directamente
        agrega o elimina el elemento del DOM.</p>
        <Code :code="vShowExample1"></Code>
        <p>Con <code>v-show</code> renderea:</p>
        <Code :code="vShowExample2"></Code>
        <p>Con <code>v-if</code>:</p>
        <Code :code="vShowExample3"></Code>
        <h4><code>v-show</code> vs <code>v-if</code></h4>
        <p>A nivel visual, no hay diferencia, pero si la hay a nivel performance.</p>
        <p><code>v-if</code> es mas costoso que <code>v-show</code> porque esta agregando y quitando un elemento del DOM, si tenemos un elemento que se mostrara y ocultara muchas veces, es recomendable usar <code>v-show</code>, ahora si debemos mostrar un elemento u otro 1 vez, podemos usar <code>v-if</code>, y sobre todo si no queremos que el maquetado aparezca en el DOM</p>
        <span>&nbsp;</span>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-for">
      <template slot="left">
        <p>Permite aplicar el mismo maquetado a una lista de elementos</p>
        <Code :code="vForExample1" mode="text/x-vue"></Code>
        <p>renderea:</p>
        <Code :code="vForExample2" mode="text/x-vue"></Code>
        <p>Es obligatorio incluir un atributo key (esto le permite a vue sincronizar cada elemento), por lo que nuestro <code>v-for</code> quedara asi:</p>
        <Code :code="vForExample3" mode="text/x-vue"></Code>
        <p><code>v-for</code>tambien nos permite acceder al indice de cada iteraccion</p>
        <Code :code="vForExample4" mode="text/x-vue"></Code>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>

    <TwoColPlay name="v-on">
      <template slot="left">
        <p>Permite escuchar eventos del DOM y activar un metodo cuando el evento ocurre</p>
        <Code :code="vOnExample1" mode="text/x-vue"></Code>
        <p>Podemos pasarle parametros</p>
        <Code :code="vOnExample2" mode="text/x-vue"></Code>
        <p>Tambien ejecutar expresiones en linea</p>
        <Code :code="vOnExample3" mode="text/x-vue"></Code>
        <p>Click es tan solo uno de los tantos eventos que podemos escuchar, otros eventos pueden ser: <code>submit</code> <code>keydown</code> <code>keyup</code> <code>mouseover</code> etc</p>
      </template>
      <template slot="right">
      </template>
    </TwoColPlay>


    <h3>Shorthands</h3>
    <p>Escribir todo el tiempo <code>v-bind</code>, <code>v-on</code>, <code>v-algo</code> puede llegar a ser algo tedioso, es por eso que vue nos brinda <b>atajos</b></p>
    <p>Podemos remplazar <code>v-bind</code> con <code> : </code></p>
    <Code :code="shorthandsExample1" mode="text/x-vue"></Code>
    <p>Podemos remplazar <code>v-on</code> con <code> @ </code></p>
    <Code :code="shorthandsExample2" mode="text/x-vue"></Code>
  </div>
</template>

<script>
import TwoColPlay from '../components/TwoColPlay';

export default {
  name: 'Directivas',
  components: { TwoColPlay },
  data() {
    return {
      ejemplo1: `<div v-show="mostrarDiv">
  v-show es una directiva
</div>`,
      vTextExample: `// data
// h1Title: '<h1>Hello this is an h1</h1>',
<div v-text="h1Title"></div>`,
      vHtmlExample: `// data
// h1Title: '<h1>Hello this is an h1</h1>',
<div v-html="h1Title"></div>`,
      vBindExampleWrong: `// esto no funciona
<a href="{{url}}">Click aqui</a>`,
      vBindExampleOk: `// esto si
<a v-bind:href="url">Click aqui</a>`,
      vModelExample: `<input v-model="mensaje">
<p>Mensaje es: {{ mensaje }}</p>`,
      vIfExample: `<div v-if="formularioCompleto">Descarga aqui</div>
<div v-else-if="formularioEnProgreso">Continuar solicitud</div>
<div v-else>Iniciar Solicitud</div>`,
      vShowExample1: `<div v-show="estaActivo"> hola </div>`,
      vShowExample2: `<div style="display:none;"> hola </div>`,
      vShowExample3: `<!---->`,
      vForExample1: `// frutas = ['Manzana', 'Banana', 'Pera', 'Naranja']
<li v-for="fruta in frutas"> {{ fruta }}</li>`,
      vForExample2: `<li>Manzana</li>
<li>Banana</li>
<li>Pera</li>
<li>Naranja</li>`,
      vForExample3: `<li v-for="fruta in frutas" 
    v-bind:key="fruta">
    {{ fruta }}
</li>`,
      vForExample4: `<li v-for="(fruta, indice) in frutas" 
    v-bind:key="fruta">
    {{ indice + ' - ' + fruta }}
</li>`,
      vOnExample1: `<button v-on:click="ejecutarAlgo">click aqui</button>`,
      vOnExample2: `<a v-on:click="ejecutarAlgo('test')">click aqui</a>`,
    vOnExample3: `<button v-on:click="contador = contador + 1">click aqui</button>`,
    shorthandsExample1: `<!-- antes: <a v-bind:href="" -->
<a :href="url">click aqui</a>`,
    shorthandsExample2: `<!-- antes: <a v-on:click="handleClick" -->
<a @click="handleClick">click aqui</a>`,
    };
  }
}
</script>

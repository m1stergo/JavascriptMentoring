<template>
  <div>
    <p>{{ greetings }}</p>
    <p v-html="1 + 1"></p>
    <p v-text="'<h1>' + 'hola mundo' + '</h1>'"></p>
    <p v-bind:style="styles">{{ person.name.toUpperCase() }}</p>
    <p>{{ JSON.stringify(person) }}</p>
    <p><span class="tag" v-bind:class="isDanger ? 'is-danger': 'is-primary'">{{isDanger ? 'OFF' : 'ON'}}</span></p>
    <p><button class="button is-small" @click="isDanger = !isDanger">Toggle: {{ String(isDanger) }}</button></p>
  </div>
</template>

<script>
export default {
  name: 'Expresiones',
  data() {
    return {
      greetings: 'Hello how are you!',
      person: {
        name: 'eduardo',
      },
      isDanger: true,
    };
  },
};
</script>

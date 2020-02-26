<template>
  <div class="code">
    <codemirror :value="code" :options="options"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';

export default {
  name: 'Code',
  props: ['mode', 'code'],
  data() {
    return {
      options: {
        tabSize: 4,
        mode: this.mode || 'text/javascript',
        theme: 'material-darker',
      }
    };
  },
  components: {
    codemirror
  },
}
</script>

<style scoped>
  ::v-deep .CodeMirror {
    height: auto;
    margin-bottom: 1em;
  }
</style>

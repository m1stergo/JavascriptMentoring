<template>
  <div>
    <h4><span class="tag is-success">{{ name }}</span></h4>
    <div class="columns">
      <div class="column is-half">
        <slot name="left"/>
      </div>
      <div class="column is-half">
        <div class="message is-warning">
          <div class="message-header"><span class="tag">PLAY</span> {{ `Directivas-${name}.vue` }}</div>
          <div class="message-body">
            <slot name="right"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
}
</script>

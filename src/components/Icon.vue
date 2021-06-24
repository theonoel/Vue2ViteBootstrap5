<template>
  <svg v-bind:width="width" v-bind:height="height">
    <use v-bind:xlink:href="`/node_modules/bootstrap-icons/bootstrap-icons.svg#${ name }`"/>
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: String,
    width: Number,
    height: Number,
  },
  data() {
    return {}
  },
}
</script>

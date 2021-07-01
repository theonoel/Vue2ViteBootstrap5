<template>
  <div id="app">
    <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <div class="container-fluid d-flex align-items-center">
        <h1 class="d-flex align-items-center fs-4 text-white mb-0">
          <img
            src="./assets/img/logo-creads-white-rounded.svg"
            width="38"
            height="30"
            class="me-3"
            alt=""
          />
          Creads
        </h1>
      </div>
    </header>
    <sidebar />
    <div class="bd-cheatsheet container-fluid bg-body">
      <home />
      <section id="content">
        <typography />
      </section>
    </div>
    <!-- <HelloWorld msg="Theme V2" /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
@import "scss/cheatsheet";
</style>

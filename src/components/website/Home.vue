<template>
  <section id="home">
    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
      <h3>Home</h3>
    </div>
    <div class="px-4 my-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="../../assets/img/logo-creads-black-rounded.svg"
        alt=""
        width="72"
        height="57"
      >
      <h1 class="display-5 fw-bold d-flex-center">
        <icon
          name="arrow-right-circle-fill"
          class="text-info me-2"
          :width="32"
          :height="32"
        />Theme V2
        <icon
          name="heart-fill"
          class="text-danger ms-2"
          :width="32"
          :height="32"
        />
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Ah Batard tu thème !</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a
            href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
            target="_blank"
            rel="nofollow"
            class="btn btn-primary btn-lg"
            role="button"
          >
            <icon
              name="bootstrap"
              :width="16"
              :height="16"
              class="me-2"
            />Bootstrap 5</a>
          <a
            href="https://icons.getbootstrap.com/#icons"
            target="_blank"
            rel="nofollow"
            class="btn btn-outline-warning btn-lg"
            role="button"
          >
            <icon
              name="emoji-heart-eyes"
              :width="16"
              :height="16"
              class="me-2"
            />Icons</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
}
</script>

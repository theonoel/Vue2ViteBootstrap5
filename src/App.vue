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
    <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
      <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
      <nav
        class="small"
        id="toc"
      >
        <ul class="list-unstyled">
          <li class="my-2">
            <button
              class="btn d-inline-flex align-items-center"
              data-bs-toggle="collapse"
              aria-expanded="true"
              data-bs-target="#contents-collapse"
              aria-controls="contents-collapse"
            >Contents</button>
            <ul
              class="list-unstyled ps-3 collapse show"
              id="contents-collapse"
              style=""
            >
              <li><a
                  class="d-inline-flex align-items-center rounded"
                  href="#typography"
                >Typography</a></li>
            </ul>
          </li>
          <li class="my-2">
            <button
              class="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#forms-collapse"
              aria-controls="forms-collapse"
            >Forms</button>
            <ul
              class="list-unstyled ps-3 collapse"
              id="forms-collapse"
              style=""
            >
              <li><a
                  class="d-inline-flex align-items-center rounded"
                  href="#overview"
                >Overview</a></li>
            </ul>
          </li>
          <li class="my-2">
            <button
              class="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#components-collapse"
              aria-controls="components-collapse"
            >Components</button>
            <ul
              class="list-unstyled ps-3 collapse"
              id="components-collapse"
              style=""
            >
              <li><a
                  class="d-inline-flex align-items-center rounded"
                  href="#alerts"
                >Alerts</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="bd-cheatsheet container-fluid bg-body">
      <section id="content">
        <article
          class="my-3"
          id="typography"
        >
          <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
            <h3>Typography</h3>
          </div>
          <div>
            <div class="px-4 my-5 text-center">
              <img
                class="d-block mx-auto mb-4"
                src="./assets/img/logo-creads-black-rounded.svg"
                alt=""
                width="72"
                height="57"
              >
              <h1 class="display-5 fw-bold">
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
            <div class="bd-example">
              <p class="display-1">Display 1</p>
              <p class="display-2">Display 2</p>
              <p class="display-3">Display 3</p>
              <p class="display-4">Display 4</p>
              <p class="display-5">Display 5</p>
              <p class="display-6">Display 6</p>
            </div>

            <div class="bd-example">
              <p class="h1">Heading 1</p>
              <p class="h2">Heading 2</p>
              <p class="h3">Heading 3</p>
              <p class="h4">Heading 4</p>
              <p class="h5">Heading 5</p>
              <p class="h6">Heading 6</p>
            </div>

            <div class="bd-example">
              <ul class="list-unstyled">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it's still a list.</li>
                <li>However, this style only applies to immediate child elements.</li>
                <li>Nested lists:
                  <ul>
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>

            <div class="bd-example">
              <ul class="list-inline">
                <li class="list-inline-item">This is a list item.</li>
                <li class="list-inline-item">And another one.</li>
                <li class="list-inline-item">But they're displayed inline.</li>
              </ul>
            </div>
          </div>
        </article>
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

<style>
</style>

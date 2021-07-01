<template>
  <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
    <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
    <nav
      class="small"
      id="toc"
    >
      <ul class="list-unstyled">
        <li class="my-2">
          <ul
            class="list-unstyled ps-3 collapse show"
            id="contents-collapse"
            style=""
          >
            <li><a
                class="d-inline-flex align-items-center rounded"
                href="#home"
              >Home</a></li>
          </ul>
        </li>
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
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {}
  },
}
</script>

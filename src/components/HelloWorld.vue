<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >Vite Documentation</a>
      |
      <a
        href="https://vuejs.org/v2/guide/"
        target="_blank"
      >Vue 2 Documentation</a>
    </p>
    icon:
    <i
      class="bi-alarm"
      style="font-size: 2rem; color: cornflowerblue;"
    ></i><br />
    <div>
      <label
        for="exampleColorInput"
        class="form-label"
      >Color picker</label>
      <input
        type="color"
        class="form-control form-control-color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      >
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <li><a
              class="dropdown-item"
              href="#"
            >Action</a></li>
          <li><a
              class="dropdown-item"
              href="#"
            >Another action</a></li>
          <li><a
              class="dropdown-item"
              href="#"
            >Something else here</a></li>
        </ul>
      </div>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
    </div>
    <button
      class="btn btn-primary"
      @click="count++"
    >
      count is: {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <div class="d-flex">
      <div>caca</div>
      <div class="flex-fill">pipi</div>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="modal.show()"
    >
      Launch demo modal
    </button>
    <div
      class="modal fade"
      ref="exampleModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Modal title</h5>
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="modal.hide()"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { Tooltip } from 'bootstrap';

export default {
  name: 'HelloW',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      modal: null
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }
}
</script>

<style scoped>
/* @import 'component/modal'; */
</style>

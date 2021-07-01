<template>
  <article
    class="my-3"
    id="typography"
  >
    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
      <h3>Typography</h3>
    </div>
    <div>
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
</template>

<script>
export default {
  name: 'typography',
  data() {
    return {}
  },
}
</script>

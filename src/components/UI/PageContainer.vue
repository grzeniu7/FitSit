<template>
  <main>
    <section v-if="isPost" class="content">
      <slot></slot>
    </section>
    <section v-else class="content">
      <div class="page">
        <h2 class="page__title page__item">{{ pageTitle }}</h2>
        <p class="page__content page__item">
          {{ pageContent }}
          <slot></slot>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["isPost", "pageTitle", "pageContent"],
};
</script>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

.content {
  min-height: 100vh;
  width: 90%;
  max-width: 900px;
  padding: 5rem 0;
  margin: auto;
  color: white;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1em;
  &__item {
    width: 100%;
    padding: 2em;
    background-color: $main-background-color;
    box-shadow: $box-shadow;
    margin: 0.5em 0;
  }
  &__title {
    text-align: center;
  }
  p {
    margin: 10px 0 0 0;
  }
}
</style>

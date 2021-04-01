<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import "src/scss/_variables.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: $body_background_color;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  @media (min-width: 490px) {
    font-size: 1rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.2rem;
  }
}

.route {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active {
    transition: opacity 0.3s ease-out;
  }

  &-leave-active {
    transition: opacity 0.3s ease-in;
  }
}
</style>

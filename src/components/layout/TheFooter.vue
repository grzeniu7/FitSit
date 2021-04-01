<template>
  <footer>
    <div class="footer__text">
      <small>&copy; Made by Grzesiu Pawłowski</small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: $header_color;
  opacity: 0.7;
  height: 2.5vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  small {
    font-size: 0.5rem;
  }
}
</style>

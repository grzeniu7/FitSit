<template>
  <a class="link" rel="noopener" target="_blank" :href="urlAdress">{{
    text
  }}</a>
</template>

<script>
export default {
  props: ["urlAdress", "text"],
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: turquoise;
  display: inline-block;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateX(5px);
  }
}
</style>

<template>
  <page-container is-post="true">
    <div class="article">
      <h2
        class="article__item article__title"
        v-html="post?.title?.rendered"
      ></h2>
      <div
        class="article__item article__content"
        v-html="post?.content?.rendered"
      ></div>
    </div>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getData() {
      this.axios(
        `http://api.fit-sit.com/wp-json/wp/v2/posts/${this.$route.params.id}`
      ).then(
        (res) => {
          this.post = res?.data;
        },
        (error) => {
          alert(error);
        }
      );
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import "src/scss/_variables.scss";

.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $main-background-color;
  margin: 2em 0;
  box-shadow: $box-shadow;
  padding: 1em;
  transition: all 0.2s ease-in-out;
  &__item {
    padding: 1em;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1600px) {
    margin-top: 4em;
    padding: 2rem;
  }
}

img,
p {
  margin: 0.5rem;
  max-width: 100%;
  max-height: 100%;
}

.blocks-gallery {
  &-grid {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 2rem 0;
  }
  &-item {
    margin: 0 1em 1em 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    @media (min-width: 600px) {
      width: calc(50% - 1em);
    }
    figure {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      height: 100%;
      max-width: none;
    }
    img {
      height: 100%;
      width: 100%;
      flex: 1;
      object-fit: cover;
      display: block;
      max-width: 100%;
    }
  }
}

iframe {
  max-height: 100%;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: white;
}
</style>

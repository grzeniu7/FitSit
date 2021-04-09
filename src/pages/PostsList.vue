<template>
  <page-container is-post="true">
    <div class="articles" :key="post.id" v-for="post in posts">
      <router-link class="articles__link" :to="`/post/${post.id}`">
        <h2
          class="articles__item articles__title"
          v-html="post.title.rendered"
        ></h2>
        <div
          class="articles__item articles__content"
          v-html="post.excerpt.rendered"
        ></div>
      </router-link>
    </div>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getData() {
      this.axios("http://api.fit-sit.com/wp-json/wp/v2/posts").then(
        (res) => {
          for (let post in res.data) {
            console.log(res);
            this.posts.push(res.data[post]);
          }
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

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

.articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $main-background-color;
  margin: 2rem 0;
  box-shadow: $box-shadow;
  transition: transform 0.3s ease-in;
  // padding: 1rem;
  &__item {
    padding: 1rem;
    @media (min-width: 1600px) {
      padding: 2rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &:hover {
    transform: translateX(10px);
  }
  &:nth-of-type(odd):hover {
    transform: translateX(-10px);
  }
  @media (min-width: 1600px) {
    margin-top: 4rem;
  }
  &__title {
    text-align: center;
  }
  &__link {
    display: block;
    width: 100%;
  }
}

p {
  margin: 0.5rem;
  max-width: 100%;
  max-height: 100%;
}
</style>

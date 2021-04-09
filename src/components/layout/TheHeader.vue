<template>
  <header class="header">
    <div class="centralizer"></div>
    <div class="header__logo">
      <a href="#top">
        <img
          class="header__image"
          src="../../img/logo_FitSit.png"
          alt="Logo
        FitSit"
        />
      </a>
    </div>
    <button
      @click="hamburgerClicked"
      @keydown.esc="hamburgerClickedESC"
      tabindex="0"
      :class="{ hamburger: true, 'hamburger--active': hamburgerIsActive }"
    >
      <span class="hamburger__box">
        <span class="hamburger__inner"></span>
      </span>
    </button>
    <nav :class="{ navigation: true, 'navigation--active': hamburgerIsActive }">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link class="navigation__link" to="/">Posty</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/about-us"
            >O nas</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/about-project"
            >O projekcie</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/contact"
            >Kontakt</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hamburgerIsActive: false,
    };
  },
  methods: {
    hamburgerClicked() {
      this.hamburgerIsActive = !this.hamburgerIsActive;
    },
    hamburgerClickedESC() {
      if (this.hamburgerIsActive) {
        this.hamburgerIsActive = !this.hamburgerIsActive;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";

.header {
  font-size: 1rem;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: $header_color;
  color: white;

  .centralizer {
    flex: 0 1 0rem;
    @media (min-width: 1600px) {
      flex: 0 1 23rem;
    }
  }
  &__image {
    display: inline-block;
    width: 5rem;
    margin: 0;
    @media (min-width: 1600px) {
      width: 8rem;
    }
  }
  &__logo {
    flex: 1 1 50rem;
    text-align: center;
    @media (min-width: 1600px) {
      flex: 1 1 20rem;
    }
  }
  @media (min-width: 1600px) {
    height: 8rem;
  }
}

.hamburger,
.navigation {
  @media (max-width: 1599px) {
    transition: transform 0.3s 0.1s ease-in-out;
  }
}

.navigation {
  position: absolute;
  top: 5rem;
  right: 0;
  background-color: $header_color;
  height: 100vh;
  width: 8rem;
  transform: translateX(8rem);
  opacity: 0.8;

  &--active {
    transform: translateX(0rem);
  }
  &__link {
    display: block;
    height: 100%;
    text-decoration: none;
    padding: 1rem 1rem;
    color: white;
    line-height: 3rem;
    @media (min-width: 1600px) {
      line-height: 6rem;
    }
    &:hover {
      color: black;
    }
  }
  &__list {
    list-style: none;
    padding-top: 50px;
    @media (min-width: 1600px) {
      display: flex;
      padding-top: 0;
    }
  }
  &__item {
    &:hover {
      background-color: $hover_color;
    }
  }

  @media (min-width: 1600px) {
    position: static;
    transform: translateX(0);
    height: auto;
    width: auto;
  }
}

@mixin hamburger-line {
  width: 100%;
  height: 3px;
  background-color: white;
  position: absolute;
}

.hamburger {
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 10px;
  position: absolute;
  right: 0px;
  z-index: 1;
  &__box {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
  }
  &__inner {
    @include hamburger-line;

    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.1s 0.15s ease-in-out;
  }
  &:focus {
    outline: none;
  }

  &--active {
    transform: translateX(-5rem);
  }
  @media (min-width: 1600px) {
    display: none;
  }
}

.hamburger__inner::before,
.hamburger__inner::after {
  @include hamburger-line;

  content: "";
  right: 0;
  transition: transform 0.3s 0.05s ease-in-out;
}

.hamburger__inner::before {
  top: -10px;
}
.hamburger__inner::after {
  top: 10px;
}

.hamburger--active .hamburger__inner {
  background-color: transparent;
}

.hamburger--active .hamburger__inner::before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger--active .hamburger__inner::after {
  transform: translateY(-10px) rotate(-45deg);
}

.router-link-active {
  background-color: white;
  color: black;
}
</style>

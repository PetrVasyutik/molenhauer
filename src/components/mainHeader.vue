<template>
  <header class="navbar">
    <div class="navbar__desktop">
      <router-link class="navbar__logo" to="/">
        <div class="navbar__logo-container">
          <img src="@/img/logo.svg" width="263" height="46" alt="Логотип">
        </div>
      </router-link>
      <ul class="navbar__list">
        <li class="navbar__item" v-for="link in links" :key="link.alias">
          <router-link class="navbar__link" :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
      <div class="navbar__btn-list">
        <button class="btn btn-accent">
          <span>Contacts Us</span>
        </button>
        <div class="navbar__lang">
          <div class="navbar__icon-container">
            <button class="navbar__icon">
              <img src="@/img/germany-icon.svg" width="39" height="18" alt="">
            </button>
            <button class="navbar__icon">
              <img src="@/img/english-icon.svg" width="39" height="18" alt="">
            </button>
            <button class="navbar__icon">
              <img src="@/img/french-icon.svg" width="39" height="18" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar__mobile">
      <router-link class="navbar__logo" to="/">
        <div class="navbar__logo-container">
          <img src="@/img/logo.svg" width="263" height="46" alt="Логотип">
        </div>
      </router-link>
      <div class="navbar__btn-list">
        <div class="navbar__lang">
          <div class="navbar__icon-container">
            <button class="navbar__icon">
              <img src="@/img/germany-icon.svg" width="39" height="18" alt="">
            </button>
            <button class="navbar__icon">
              <img src="@/img/english-icon.svg" width="39" height="18" alt="">
            </button>
            <button class="navbar__icon">
              <img src="@/img/french-icon.svg" width="39" height="18" alt="">
            </button>
          </div>
        </div>
        <button class="navbar-toggle" @click="toggleMenu">
          <div v-if="isMenuOpen" class="navbar-toggle__icon navbar-toggle__icon--close">
            <img src="@/img/toggle-close.svg" width="21" height="21" alt="">
          </div>
          <div v-else class="navbar-toggle__icon navbar-toggle__icon--open">
            <img src="@/img/toggle-open.svg" width="33" height="26" alt="">
          </div>
        </button>
        <div v-if="isMenuOpen" class="navbar__list-container" v-bind:class="{ 'is-open': isMenuOpen }">
          <div class="navbar__list-wrapper">
            <ul class="navbar__list">
              <li class="navbar__item" v-for="link in links" :key="link.alias">
                <router-link class="navbar__link" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
            <button class="btn btn-accent">
              <span>Contacts Us</span>
            </button>
            <div class="navbar__copyright">Imprint    l     Data Privacy</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import {app, links} from "../_config.js";
export default {
  data() {
    return {
      title: app.title,
      links: links,
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};


// export default {
//   data() {
//     return {
//       isMenuOpen: false,
//     };
//   },
// methods: {toggleMenu() {this.isMenuOpen = !this.isMenuOpen;},},};
</script>

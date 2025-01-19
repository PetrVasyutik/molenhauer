<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar__content">
        <router-link class="navbar__logo" to="/">
          <div navbar__logo-container>
            <img src="@/img/logo.svg" width="263" height="46" alt="Логотип">
          </div>
        </router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
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
    };
  },
};
</script>
<style lang="scss">
.navbar {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

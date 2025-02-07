<template>
  <div class="main-footer">
    <div class="container">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="link in links" :key="link.alias">
            <router-link class="navbar__link" :to="link.url">{{ link.title }}</router-link>
          </li>
      </ul>
    </div>
  </div>
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
.main-footer {
  background-color: #06255B;
  padding-bottom: 20px;
}
</style>

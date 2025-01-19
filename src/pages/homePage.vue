<template>
  <section class="page-section intro">
    <div class="intro__img">
      <picture>
        <source type="image/webp" srcset="@/img/intro-img.webp, @/img/intro-img@2x.webp 2x">
        <img src="@/img/intro-img.jpg" srcset="@/img/intro-img@2x.jpg 2x" width="1730" height="1037">
      </picture>
    </div>
    <div class="container">
      <div class="intro__wrapper"></div>
    </div>
  </section>
</template>

<script>


export default {
  components: {  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
.intro {
  position: relative;
  width: 100%;
  height: auto;
}
</style>

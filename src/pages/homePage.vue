<template>
  <section class="page-section intro">
    <div class="intro__img">
      <picture>
        <source type="image/webp" srcset="@/img/intro-img.webp, @/img/intro-img@2x.webp 2x">
        <img src="@/img/intro-img.jpg" srcset="@/img/intro-img@2x.jpg 2x" width="1730" height="1037">
      </picture>
    </div>
    <div class="container">
      <div class="intro__wrapper">
        <div class="intro__content">
          <h1 class="intro__title">Civil <b>Engineering Solutions</b> For The <b>Cement</b> Industry</h1>
          <div class="intro__subtitle">
            <p>We are your leading partner for complex brownfield construction projects during ongoing operation.</p>
            <p>Benefit from engineering excellence built on more than 30 years of industry experience.</p>
          </div>
        </div>
      </div>
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
  color: #ffff;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 42%, 65% 100%, 0% 100%);
  }

  &__wrapper {
    padding-top: 250px;
  }

  &__content {
    max-width: 723px;
  }

  &__title {
    font-size: 50px;
    margin-bottom: 25px;
  }
  &__subtitle {
    max-width: 600px;
    font-size: 21px;
    line-height: 1.1;

    & p {
      margin-bottom: 25px;
    }
  }
}
</style>

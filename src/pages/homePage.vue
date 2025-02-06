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
          <div class="intro__btn-container">
            <button class="btn btn-transparent">How can we serve you</button>
            <button class="btn">Contact Us</button>
          </div>
        </div>
        <div class="intro__advantages">
          <div class="intro__advantage intro__advantage--agil">Agil.</div>
          <div class="intro__advantage intro__advantage--ganzh">Ganzheitlich.</div>
          <div class="intro__advantage intro__advantage--zuver">Zuverlässig.</div>
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
  height: 100%;
  color: #ffff;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 42%, 65% 100%, 0% 100%);
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    padding-top: 190px;
  }

  &__content {
    max-width: 723px;
    margin-top: 90px;
    width: 50%;
    flex-basis: 50%;
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

  &__btn-container {
    display: flex;
    gap: 15px;
    margin-top: 40px;
  }

  &__advantages {
    width: 50%;
    flex-basis: 50%;
    padding-left: 55px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "agil ganzh"
      "agil zuver";
    align-items: center;
  }

  &__advantage {
    font-size: 21px;
    font-weight: 900;
    line-height: 20.4px;

    &--agil {
      grid-area: agil;
      text-align: center;
      position: relative;
      z-index: 1;
      margin-top: 90px;

      &::before {
        content: "";
        position: absolute;
        top: -50px;
        left: 100px;
        width: 124px;
        height: 124px;
        background-color: rgba(6, 37, 91, 0.75);
        border: 9px solid #06255B;
        z-index: -1;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: -50px;
        left: 80px;
        width: 124px;
        height: 124px;
        background-color: transparent;
        border: 1px solid #FF7C40;
        transform: rotate(45deg);
        z-index: -2;
      }
    }

    &--ganzh {
      grid-area: ganzh;
      position: relative;
      z-index: 1;
      text-align: center;
      margin-left: -120px;

      &::before {
        content: "";
        position: absolute;
        top: -64px;
        left: 142px;
        width: 151px;
        height: 151px;
        background-color: rgba(6, 37, 91, 0.75);
        border: 9px solid #ffff;
        z-index: -1;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: -85px;
        left: 142px;
        width: 151px;
        height: 151px;
        background-color: transparent;
        border: 1px solid #ffff;
        transform: rotate(45deg);
        z-index: -2;
      }
    }

    &--zuver {
      grid-area: zuver;
      position: relative;
      z-index: 1;
      text-align: center;
      margin-left: -120px;
      margin-top: 140px;

      &::before {
        content: "";
        position: absolute;
        top: -70px;
        left: 130px;
        width: 177px;
        height: 177px;
        background-color: rgba(6, 37, 91, 0.75);
        border: 10px solid #DA5D24;
        z-index: -1;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: -50px;
        left: 130px;
        width: 177px;
        height: 177px;
        background-color: transparent;
        border: 1px solid #ffff;
        transform: rotate(45deg);
        z-index: -2;
      }
    }
  }
}
</style>

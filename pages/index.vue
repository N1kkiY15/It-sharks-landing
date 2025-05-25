<template>
  <div class="cover">
    <div class="cover__heading">
      <div class="cover__title" aria-label="ONE TO ONE">
        <span class="cover__title-span" aria-hidden="true">
            ONE
        </span>
        <RightArrow class="cover__title-arrow" aria-hidden="true"/>
        <span class="cover__title-span" aria-hidden="true">
            TO
        </span>
        <RightArrow class="cover__title-arrow" aria-hidden="true"/>
        <span class="cover__title-span" aria-hidden="true">
            ONE
        </span>
      </div>
      <div class="cover__socials">
        <EmailButton class="cover__socials-button"/>
        <TelegramButton class="cover__socials-button"/>
      </div>
    </div>

    <h1 class="cover__header">
      <span class="cover__header-line">личное обучение</span>
      <span class="cover__header-line">менторы</span>
      <NuxtImg
          class="cover__image"
          src="/images/Shark.svg"
          alt=""
          role="presentation"
      />
    </h1>

    <div class="cover__details">
      <RoundedContainer>
        <p class="cover__details-text">Экспертиза</p>
        <RightArrowS/>
      </RoundedContainer>

      <RoundedContainer>
        <p class="cover__details-text">c 2019г.</p>
      </RoundedContainer>
    </div>

    <h3 class="cover__exclusive">exclusive .</h3>


    <p class="cover__info">Python разработка, Mobile dev, Frontend, Golang, Product manager, ML</p>

    <nav class="cover__buttons">
      <div class="cover__buttons-more">
        <p class="cover__buttons-text">читать дальше</p>
        <DefaultButton variant="secondary" class="cover__buttons-arrow">
          <DoubleArrow class="cover__buttons-arrow--double"/>
        </DefaultButton>
      </div>

      <DefaultButton variant="primary" class="cover__buttons-link">
        <p class="cover__buttons-question">Кому подойдет ?</p>
        <RightArrowS class="cover__buttons-arrow--shortest"/>
        <RightArrowM class="cover__buttons-arrow--short"/>
        <RightArrowL class="cover__buttons-arrow--long"/>
        <RightArrowXl class="cover__buttons-arrow--longest"/>
      </DefaultButton>

    </nav>
  </div>

  <div class="about">

  </div>
</template>

<script setup lang="ts">
import RightArrow from "@assets/svg/RightArrow.vue";
import RightArrowS from "@assets/svg/RightArrowS.vue";
import DoubleArrow from "@assets/svg/DoubleArrow.vue";
import RightArrowXl from "@assets/svg/RightArrowXL.vue";
import EmailButton from "@components/EmailButton.vue";
import TelegramButton from "@components/TelegramButton.vue";
import RightArrowM from "@assets/svg/RightArrowM.vue";
import RightArrowL from "@assets/svg/RightArrowL.vue";
</script>

<style scoped lang="scss">
.cover {
  position: relative;
  margin-bottom: 60px;

  @media (min-width: $breakpoint-xl) {
    margin-bottom: 100px;
  }

  &__heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 5px;
    }

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;

    //@media (min-width: $breakpoint-md) {
    //  gap: 15px;
    //  flex-wrap: nowrap;
    //}

    &-arrow {
      width: 22px;
      height: 16px;

      @media (min-width: $breakpoint-sm) {
        width: 32px;
        height: 24px;
      }

      @media (min-width: $breakpoint-md) {
        width: 50px;
        height: 37px;
      }
    }

    &-span {
      font-weight: 400;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: -2%;
      color: #F4F4F466;

      @media (min-width: $breakpoint-sm) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 64px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 80px;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 96px;
      }
    }
  }

  &__socials {
    display: none;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    @media (min-width: $breakpoint-sm) {
      display: flex;
    }

    @media (min-width: $breakpoint-md) {
      gap: 10px;
    }

    @media (min-width: $breakpoint-xl) {
      gap: 20px;
    }


    &-button {
      width: 35px;
      height: 35px;
      padding: 9px;

      @media (min-width: $breakpoint-md) {
        width: 53px;
        height: 53px;
        padding: 12px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 70px;
        height: 70px;
      }
    }
  }

  &__header {
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -1px;
    color: var(--text-color);
    text-transform: uppercase;
    text-align: right;

    @media (min-width: $breakpoint-sm) {
      font-size: 40px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 64px;
      margin-bottom: 5px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 92px;
    }

    @media (min-width: $breakpoint-xl) {
      font-size: 110px;
    }

    @media (min-width: $breakpoint-xxl) {
      font-size: 124px;
      margin-bottom: 10px;
    }

    &-line {
      display: block;
      width: 100%;

      &:first-child {
        text-align: left;
        position: relative;
        z-index: 2;

        &::after {
          content: "/";
        }
      }
    }
  }

  &__image {
    position: absolute;
    width: 143px;
    height: 114px;
    top: 0;
    left: 43px;

    @media (min-width: $breakpoint-sm) {
      width: 197px;
      height: 155px;
      top: -10px;
      left: 70px;
    }

    @media (min-width: $breakpoint-md) {
      width: 247px;
      height: 195px;
      left: 220px;
    }

    @media (min-width: $breakpoint-lg) {
      width: 355px;
      height: 280px;
      left: 200px;
      top: -15px;
    }

    @media (min-width: $breakpoint-xl) {
      width: 502px;
      height: 397px;
      left: 260px;
    }

    @media (min-width: $breakpoint-xxl) {
      left: 320px;
    }
  }

  &__info {
    color: #F4F4F4B2;
    max-width: 139px;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    text-align: left;
    margin: 0 15px 117px auto;

    @media (min-width: $breakpoint-sm) {
      font-size: 14px;
      max-width: 189px;
      margin: 0 0 103px auto;
    }

    @media (min-width: $breakpoint-md) {
      max-width: 308px;
      font-size: 16px;
      margin-bottom: 86px;
    }

    @media (min-width: $breakpoint-lg) {
      max-width: 384px;
      font-size: 20px;
      margin-bottom: 60px;
    }

    @media (min-width: $breakpoint-xl) {
      max-width: 384px;
      font-size: 20px;
      margin-bottom: 100px;
    }
  }

  &__details {
    position: absolute;
    top: 183px;
    left: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (min-width: $breakpoint-sm) {
      top: 200px;
    }

    @media (min-width: $breakpoint-md) {
      top: 168px;
    }

    @media (min-width: $breakpoint-lg) {
      top: 214px;
    }

    @media (min-width: $breakpoint-xl) {
      top: 246px;
    }

    @media (min-width: $breakpoint-xxl) {
      top: 264px;
    }


    &-text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }
  }

  &__exclusive {
    position: absolute;
    left: 0;
    top: 215px;
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-sm) {
      font-size: 16px;
      top: 240px;
    }

    @media (min-width: $breakpoint-md) {
      top: 234px;
      font-size: 24px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 36px;
      top: 284px;
    }

    @media (min-width: $breakpoint-xl) {
      top: 324px;
    }

    @media (min-width: $breakpoint-xxl) {
      top: 344px;
    }

  }

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-more {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;

      //@media (min-width: $breakpoint-md) {
      //  gap: 20px;
      //}
    }

    &-text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -1%;
      max-width: 53px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 76px;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 20px;
      }
    }

    &-link {
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;

      @media (min-width: $breakpoint-md) {
        align-self: flex-end;
        gap: 20px;
      }
    }

    &-question {
      color: var(--accent-color);
      max-width: 76px;
      text-align: left;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: initial;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 20px;
      }
    }

    &-arrow {
      width: 40px;
      height: 40px;

      @media (min-width: $breakpoint-md) {
        width: 60px;
        height: 60px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 100px;
        height: 100px;
      }

      &--double {
        height: 12px;
        width: 12px;

        @media (min-width: $breakpoint-md) {
          height: 17px;
          width: 17px;
        }

        @media (min-width: $breakpoint-lg) {
          height: 27px;
          width: 27px;
        }
      }

      &--shortest {
        height: 12px;
        width: 15px;

        @media (min-width: $breakpoint-sm) {
          display: none;
        }
      }

      &--short {
        display: none;
        height: 12px;
        width: 25px;

        @media (min-width: $breakpoint-sm) {
          display: block;
        }

        @media (min-width: $breakpoint-md) {
          display: none;
        }
      }

      &--long {
        display: none;
        height: 12px;
        width: 50px;

        @media (min-width: $breakpoint-md) {
          display: block;
        }

        @media (min-width: $breakpoint-lg) {
          display: none;
        }
      }

      &--longest {
        display: none;
        height: 12px;
        width: 100px;

        @media (min-width: $breakpoint-lg) {
          display: block;
        }
      }
    }
  }
}
</style>
<template>
  <div class="NotFound">
    <img class="NotFound__image" src="@/assets/images/404.svg" alt="404" />
    <h1 class="NotFound__title">Страница не найдена</h1>
  </div>
</template>

<style lang="less">
@import '@/style/colors';

.NotFound {
  padding-top: 10vh;
  text-align: center;

  &__image {
    max-width: 100%;
    margin-bottom: 20px;
  }

  &__title {
    color: @dark;
  }
}
</style>

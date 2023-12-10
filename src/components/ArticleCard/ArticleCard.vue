<template>
  <div class="ArticleCard">
    <router-link :to="{ name: 'home' }" class="ArticleCard__link">
      <div class="ArticleCard__head">
        <!-- <span>{{
          $f.dateformat(article.creationDate, 'dd mmmm yyyy, hh:nn')
        }}</span> -->
        <span v-if="article.adminName" class="link">
          <b>{{ article.adminName }}</b>
        </span>
        <span class="ArticleCard__views">
          <IconSvg symbol="eye_opened" />
          <span>{{ article.viewsCount }}</span>
        </span>
      </div>
      <div class="ArticleCard__title" v-if="article.title">
        <h3 class="link">{{ article.title }}</h3>
      </div>
      <div class="ArticleCard__text" v-if="article.summary">
        <p>{{ article.summary }}</p>
      </div>
      <div class="ArticleCard__preview" v-if="article.previewPictureWebp">
        <img
          :src="article.previewPictureWebp || ''"
          :alt="article.title || ''"
        />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true,
    default: null,
  },
});
</script>

<style lang="less">
@import '@/style/colors';

.ArticleCard {
  &__link {
    display: block;
    padding: 24px 24px 32px;
    color: @dark;
    background-color: #fff;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05),
      -1px -1px 5px rgba(0, 0, 0, 0.03);
    border-radius: 10px;

    &:hover {
      color: @primary;
    }
  }

  &__head {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px;

    & > span {
      display: block;
      font-size: 14px;
      font-weight: 300;
      color: @black;

      &:not(:last-child) {
        border-right: 1px solid #e0e1f3;
        margin-right: 7px;
        padding-right: 7px;
      }

      &.link {
        color: currentColor;
      }
    }
  }

  &__views {
    & > span {
      color: @dark;
      margin-left: 4px;
      vertical-align: middle;
    }

    .icon {
      color: @primary-blond;
    }
  }

  &__title {
    margin: 16px 0 0;
    color: currentColor;

    & > h3 {
      font-size: 28px;
      margin: 0;

      &.link {
        color: inherit;
      }
    }
  }

  &__text {
    color: @black;
    margin: 8px 0 0;

    & > p {
      margin: 0;
    }
  }

  &__preview {
    position: relative;
    display: block;
    height: 0;
    width: 100%;
    height: 205px;
    overflow: hidden;
    margin: 16px 0 0;
    background-color: @light-light;

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>

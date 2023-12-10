<template>
  <svg :class="'icon icon--' + symbol">
    <use :href="symbolHref" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconSvg',
  props: {
    symbol: {
      type: String,
      required: true,
      default: 'loading',
    },
  },
  data() {
    return {
      spritePath: '',
    };
  },
  computed: {
    symbolHref(): string {
      return `${this.spritePath}#${this.symbol}`;
    },
  },
  created() {
    if (!this.spritePath) {
      this.spritePath = new URL(
        '../assets/svg-sprite.svg',
        import.meta.url,
      ).href;
    }
  },
});
</script>

<style lang="less">
.icon {
  fill: currentColor;
  display: inline-block;
  height: 24px;
  vertical-align: middle;
  width: 24px;
}
</style>

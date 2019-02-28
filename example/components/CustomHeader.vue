<template>
  <div v-bem="modifiers">
    <h1 v-bem:text>
      <slot/>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'custom-header',
  props: {
    textColor: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    modifiers: ({ textColor }) => ({textColor})
  }
}
</script>
<style lang="scss">
  $block-name: "custom-header";
  .#{$block-name} {
    &_text-color_red {
      .#{$block-name}__text {
        color: red;
      }
    }
    &__text {
      color: black;
    }
  }
</style>


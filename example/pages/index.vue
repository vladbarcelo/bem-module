<template>
  <div>
    <custom-header>
      This is a header with text in black.
    </custom-header>
    <custom-header text-color="red">
      This is a header with text in red.
    </custom-header>
  </div>
</template>

<script>
export default {
  components: {
    CustomHeader: () => import("../components/CustomHeader")
  }
}
</script>

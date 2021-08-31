<template>
    <div>
    <input
      v-model="$store.state.colorCode"
      placeholder="Enter color code"
      type="text">
  </div>
</template>

<script>
export default {
computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newVaclue) {
        this.$store.dispatch('setColorCode', newVaclue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <span class="go back">
    <button @click="returnHome">Return to main listing</button>
    </span> 
</template>

<script>
export default {
methods: {
  returnHome() {
    return this.$router.push('/')
  }
}
}
</script>

<style>

</style>
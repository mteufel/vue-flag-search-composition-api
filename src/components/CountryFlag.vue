<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
  </div>
</template>

<script>

export default {
  name: "Flag",
  inject: ['country'],
  computed: {
    flagCss: function() {
      return "flag flag-" + this.country
    }
  },
  mounted() { 
    console.log("---- CountryFlag.vue ----")
    console.log(this) 
  }
};
</script>


<style scoped src="@/assets/flags.css">
</style>
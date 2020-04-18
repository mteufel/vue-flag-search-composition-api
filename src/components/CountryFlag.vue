<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flag" />
  </div>
</template>

<script>

export default {
  name: "Flag",
  inject: ["getCountry", "setCountry"],
  computed: {
    flag: {
      get() {
        return "flag flag-" + this.getCountry();
      },
      set(country) {
        this.setCountry(country);
      }
    }
  }
};
</script>


<style scoped src="@/assets/flags.css">
</style>
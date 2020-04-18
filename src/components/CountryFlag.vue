<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flag" />
  </div>
</template>

<script>
import { inject, computed } from "@vue/composition-api"
export default {
  name: "Flag",
  setup() {
    const flag = computed( () => "flag flag-" + inject("country").value);
    return { flag }
  }
};
</script>


<style scoped src="@/assets/flags.css">
</style>
<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import flagStore from '../stores/FlagStore'

export default {
  name: "Flag",
  setup() {
    const flagCss = ref("flag flag-" + flagStore.getSelectedCountry())

    flagStore.subscribe( () => flagCss.value = "flag flag-" + flagStore.getSelectedCountry() );
  
    return { flagCss }
  }
};
</script>


<style scoped src="@/assets/flags.css">
</style>
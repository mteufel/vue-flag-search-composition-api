<template>
  <div>
    <h1>{{ title }} {{ country }}</h1>
  </div>
</template>

<script>

import { ref } from '@vue/composition-api'
import flagStore from '../stores/FlagStore'

export default {
  name: "AppHeader",
  props: {
    title: String
  }, 
  setup() {
    const country = ref('')

    flagStore.subscribe( () => country.value = ` (${flagStore.getSelectedCountry()})`)

    return { country }
  }
};
</script>
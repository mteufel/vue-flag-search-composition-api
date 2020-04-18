<template>
  <div>
    <h1>{{ title }} {{ country }}</h1>
  </div>
</template>

<script>

import { inject, computed } from '@vue/composition-api'

export default {
  name: "AppHeader",
  props: {
    title: String
  },
  setup() {
    const getCountry = inject("getCountry")
    const country = computed( () => '(' + getCountry() + ')')
    return { country }
  }
};
</script>
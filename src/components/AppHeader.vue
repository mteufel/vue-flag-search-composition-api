<template>
  <div>
    <h1>{{ title }} ({{ country }})</h1>
  </div>
</template>

<script>

import { inject } from '@vue/composition-api'

export default {
  name: "AppHeader",
  props: {
    title: String
  },
  setup() {
    const country = inject("country")
    return { country }
  }
};
</script>
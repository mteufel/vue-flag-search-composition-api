<template>
  <div>
    <v-select
      class="country-search"
      v-model="selected"
      :options="options"
      @search="onSearch"
      @input="onSelection"
    />
  </div>
  
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useSearch, useSelection } from "../use/useCountries"
export default {
  name: "CountrySearch",
  setup() {

    return { ...useSearch(), 
             ...useSelection() }

  },
  components: {
    vSelect
  }
}
</script>

<style>
.country-search {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
</style>
<template>
  <div id="app">
    <AppHeader title="Welcome to Flag Search" />
    <CountryPanel>
      <CountrySearch />
      <CountryFlag :country="country" />
    </CountryPanel>
  </div>
</template>

<script>
import { ref, provide } from "@vue/composition-api"
import AppHeader from "./components/AppHeader.vue";
import CountrySearch from "./components/CountrySearch.vue"
import CountryPanel from "./components/CountryPanel.vue"
import CountryFlag from "./components/CountryFlag.vue";

export default {
  name: "App",
  setup() {
    const country = ref('ro')
    provide("country", country)
    return { country }
  },
  components: {
    AppHeader,
    CountryPanel,
    CountrySearch,
    CountryFlag
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

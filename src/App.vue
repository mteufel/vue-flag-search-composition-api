<template>
  <div id="app">
    <AppHeader title="Welcome to Flag Search" />
    <CountryPanel @countryChanged="countryChanged">
      <CountrySearch />
      <CountryFlag />
    </CountryPanel>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import CountrySearch from "./components/CountrySearch.vue"
import CountryPanel from "./components/CountryPanel.vue"
import CountryFlag from "./components/CountryFlag.vue";

export default {
  name: "App",
  setup() {
  },
  data() {
    return {
      country: 'gb'
    }
  },
  provide() {
    return {
      'country': this.country
    }
  },
  methods: {
    countryChanged(value) {
      console.log('event angekommen:' + value)
      this.country = value
    }
  },
  components: {
    AppHeader,
    CountryPanel,
    CountrySearch,
    CountryFlag
  },
  mounted() {
    console.log("---- App.vue ----")
    console.log(this)
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

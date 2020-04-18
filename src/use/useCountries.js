import { ref } from '@vue/composition-api'

export function useSearch() {
  const options = ref([])
  const onSearch = (search) => {
      if (search === "") {
        return
      }
      fetch("https://restcountries.eu/rest/v2/name/" + search).then(res => {
        res.json().then(json => (options.value = json.map(e => e.name)));
      })
  }
  return { options, onSearch }
}

export function useSelection(parent) {
  const selected = ref("")
  const onSelection = (selection) => {
      fetch("https://restcountries.eu/rest/v2/name/" + selection).then(res => {
        res.json().then(json =>  {
          parent.$parent.country = json.map(e => e.alpha2Code)[0].toLowerCase();
        })
      })
    }
  return { selected, onSelection }
}
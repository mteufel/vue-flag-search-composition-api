import { ref, inject } from '@vue/composition-api'
import flagStore from '../stores/FlagStore'

export function useSearch() {
  const options = ref([])
  const onSearch = (search) => {
    flagStore.doSearch(options, search)
  }
  return { options, onSearch }
}

export function useSelection() {
  const selected = ref("")
  const setCountry = inject("setCountry");
  const onSelection = (selection) => {
    flagStore.countrySelected(selection, setCountry)
  }
  return { selected, onSelection }
}
import { ref } from '@vue/composition-api'
import flagStore from '../stores/FlagStore'

export function useSearch() {
  const options = ref([])
  const onSearch = (search) => {
    flagStore.doSearch(options, search)
  }
  return { options, onSearch }
}

export function useSelection(parent) {
  const selected = ref("")
  const onSelection = (selection) => {
    flagStore.countrySelected(selection, parent)
  }
  return { selected, onSelection }
}
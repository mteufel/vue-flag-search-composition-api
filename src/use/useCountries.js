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
  const selected = ref('')
  const country = inject("country")
  const onSelection = (selection) => {
    flagStore.countrySelected(selection, country)
  }
  return { selected, onSelection }
}
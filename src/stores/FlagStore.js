const createFlagStore = () => {

    const url = 'https://restcountries.eu/rest/v2'

    const queryByName = async (search) => {
        let response = await fetch(`${url}/name/` + search)
        return await response.json()
    }

    return {
        doSearch: async(options, search) => {
            if (search === "") {
                return
            }
            let json = await queryByName(search)
            options.value = json.map(e => e.name)
        },
        countrySelected: async(selection, parent) => {
            let json = await queryByName(selection)
            parent.$emit('countryChanged', json.map(e => e.alpha2Code)[0].toLowerCase());
        },
        
    }

}

const flagStore = createFlagStore()

export default flagStore
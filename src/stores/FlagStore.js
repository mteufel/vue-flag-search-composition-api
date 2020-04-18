const createFlagStore = () => {

    const url = 'https://restcountries.eu/rest/v2'

    const queryByName = async (search) => {
        let response = await fetch(`${url}/name/` + search)
        return await response.json()
    }

    let selectedCountry = 'ro'
    const subscribers = []

    return {
        subscribe: (fn) => {
            subscribers.push(fn)
        },
        doSearch: async(options, search) => {
            if (search === "") {
                return
            }
            let json = await queryByName(search)
            options.value = json.map(e => e.name)
        },
        countrySelected: async(selection) => {
            let json = await queryByName(selection)
            selectedCountry = json.map(e => e.alpha2Code)[0].toLowerCase()
            subscribers.forEach( s => s() )
        },
        getSelectedCountry: () => selectedCountry
    }

}

const flagStore = createFlagStore()

export default flagStore
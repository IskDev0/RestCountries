import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCountryStore = defineStore('country', () => {
    let search = ref("")

    let countries = ref([])

    let searchByName = async () => {
        let response = await fetch(`https://restcountries.com/v3.1/name/${search.value}`)
        countries.value = await response.json()
        search.value = ""
    }

    let loadCountries = async () => {
        let response = await fetch("https://restcountries.com/v3.1/all")
        countries.value = await response.json()
    }

    let options = ref(["Africa", "America", "Asia", "Europe", "Oceania"])

    let selected = ref("Filter by Region")

    let isVisible = ref(false)

    let changeVisibility = async () => {
        isVisible.value = !isVisible.value
    }


    let selectOption = async (option) => {
        selected.value = option
        isVisible.value = false
        let response = await fetch(`https://restcountries.com/v3.1/region/${selected.value}`)
        countries.value = await response.json()
    }


    return {
        searchByName,
        loadCountries,
        countries,
        search,
        selected,
        options,
        selectOption,
        isVisible,
        changeVisibility
    }
})

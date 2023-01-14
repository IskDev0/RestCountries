import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCountryStore = defineStore('country', () => {
    let search = ref("")

    let countries = ref([])

    let searchByName = async () => {
        let response = await fetch(`https://restcountries.com/v3.1/name/${search.value}`)
        countries.value = await response.json()
    }

    let loadCountries = async () => {
        let response = await fetch("https://restcountries.com/v3.1/all")
        countries.value = await response.json()
    }


    return {searchByName, loadCountries, countries, search}
})

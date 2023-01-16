import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCountryStore = defineStore('country', () => {
    let search = ref("")

    let countries = ref([])

    let isLoading = ref(false)

    let error = ref(false)

    let searchByName = async () => {
        try {
            isLoading.value = true
            error.value = false
            let response = await fetch(`https://restcountries.com/v3.1/name/${search.value}`)
            if (response.status !== 404){
                countries.value = await response.json()
            }else {
                error.value = true
                countries.value = []
            }
            search.value = ""
        }catch (err){
            error.value = true
        }finally {
            isLoading.value = false
        }
    }

    let loadCountries = async () => {
        try {
            isLoading.value = true
            let response = await fetch("https://restcountries.com/v3.1/all")
            countries.value = await response.json()
        }catch (err){

        }finally {
            isLoading.value = false
        }

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

        try {
            isLoading.value = true
            let response = await fetch(`https://restcountries.com/v3.1/region/${selected.value}`)
            countries.value = await response.json()
        }catch (err){

        }
        finally {
            isLoading.value = false
        }

    }

    let loadingTrue = () => {
        isLoading.value = true
    }

    let loadingFalse = () => {
        isLoading.value = false
    }

    let closeModal = () => {
        error.value = false
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
        changeVisibility,
        isLoading,
        loadingTrue,
        loadingFalse,
        error,
        closeModal
    }
})

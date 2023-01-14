import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCountryStore = defineStore('country', () => {
  let countyInfo = ref([])
  let search = ref("")

  let searchByName = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/name/${search.value}`)
    countyInfo.value = await response.json()
  }


  return { searchByName, countyInfo, search }
})

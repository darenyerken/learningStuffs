import { defineStore } from "pinia";
import {ref} from 'vue'

const useNewsStore = defineStore('news',()=>{
    const newsList = ref([])

    function addNews(news){
        newsList.value.push(news)
    }

    return {
        newsList,
        addNews
    }
})

export default useNewsStore
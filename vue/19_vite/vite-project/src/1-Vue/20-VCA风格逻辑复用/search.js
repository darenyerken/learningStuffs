import {computed} from 'vue'
export function useSearch(text,dataList) {
    const computedList = computed(()=>
            dataList.value.filter(item=>item.includes(text.value))
        )

    return computedList
}
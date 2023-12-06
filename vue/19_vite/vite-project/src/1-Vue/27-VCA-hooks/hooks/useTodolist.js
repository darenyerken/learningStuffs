import {ref} from 'vue'
export default function() {
    // 原始数据
    const text = ref('')
    const memList = ref(['aaa','bbb','ccc'])
    // 添加备忘录
    function addMem(){
        dataList.value.push(text.value)
        text.value = ''
    }
    //删除备忘录
    function deleteMem(index) {
        dataList.value.splice(index,1)
    }
   
    return {
        text,
        memList,
        addMem,
        deleteMem
    }
}
<template>
    <div>
        App
        <p>{{ h.a }}</p>
        <p>{{ h.b }}</p>
        <p>{{ h.c }}</p>
        <p>{{ e }}</p>
        <p>{{ f }}</p>
        {{ g }}
    </div>
</template>
<script>
import {reactive, ref, toRefs} from 'vue'
export default {
    setup()  {
        const a = ref('aaa')
        const b = ref('bbb')
        const c = ref('ccc')
        const d = reactive({
            e:'eee',
            f:'fff',
            g:'ggg'
        })
        const h = reactive({
            // 将ref转换为reactive只需要将变量添加到reactive中
            a,
            b,
            c
        })

        return {
            h,
            // 将ref转换为reative只需要torefs，注意torefs转出来是个对象
            ...toRefs(d),
        }
    }
}
</script>
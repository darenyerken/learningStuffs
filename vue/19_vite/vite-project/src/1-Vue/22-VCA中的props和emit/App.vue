<template>
    <div>
        App
        <Child name="myChild" @event="handlaEvent" />
    </div>
</template>
<script>
import Child from "./Child.vue";
export default {
    components: {
        Child,
    },
    setup() {
        const handlaEvent = (value)=> {
            console.log(value)
        }

        return {
            handlaEvent
        }
    }
}
</script>
<template>
    <div>
        Child
        {{ name }}
        <button @click="handleClick">Communicate</button>
    </div>
</template>
<script>
export default {
    props:['name'],  //这一步还是必须的

    // setup第一个属性就是props，第二个属性是个对象，包含emit，sttrs等等
    setup(props,{emit}) {
        const toFather = 'Im from Child'
        const handleClick = ()=> {
            console.log(props.name)
            emit('event',toFather)
        }

        return {
            handleClick
        }
        
    }
}
</script>
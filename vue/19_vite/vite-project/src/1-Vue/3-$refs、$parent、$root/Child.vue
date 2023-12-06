
<template>
  <div>
    <label for="ipt">{{ label }}</label>
    <input :type="type" name="ipt" v-model="value">
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        value:''
      }
    },
    components: {
      
    },
    props:{
      label:{
        required:true,
        type:String,
      },
      type:{
        type:String,
        default:'text'
      }
    }
  }
</script>

<style>

</style>

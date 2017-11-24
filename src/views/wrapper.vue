<template>

<div >
    <Menus></Menus>
    <router-view></router-view>
</div>

 
</template>


<script>
import Menus from '../components/Menus'
export default {
    components: {
        Menus
    },
    name: 'wrapper',
    props: ['lang'],

  
}
</script>

<style lang="scss">




</style>






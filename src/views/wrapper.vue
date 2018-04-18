<template>
<div >
    <Menus v-if="route != '/'"></Menus>
    <transition name="fade">
        <router-view></router-view>
    </transition>
    
</div>

 
</template>


<script>
import Menus from '../components/Menus'
export default {
    components: {
        Menus
    },

    computed: {
        route() {
            return this.$route.path
        }
    },
    name: 'wrapper',
    props: ['lang']
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>






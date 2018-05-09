<template>
<div >
    <Menus v-if="route != '/'"></Menus>
    <transition name="fade">
        <router-view class="main-content-wrapper"></router-view>
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

.main-content-wrapper {
    position: absolute;
    width: 60%;
    left: 20%;
    min-height: 100vh;
    overflow: visible;
}
</style>






<template>
<div class="menu-wrapper">
<div class="menu-left">
    <span class="left-title">L'OEUVRE</span>
    <div class="main-menu">
        <span class="menu-title">MEMOIRE</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/peinture">PEINTURE</router-link>
        </div>
    </div>
    <div class="main-menu">
        <router-link tag="span" class="menu-title" to="/oeuvre/portraits/peinture">PORTRAITS ET MATERNITES</router-link>
        <!-- <span class="menu-title">PORTRAITS ET MATERNITES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/portraits/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/portraits/peinture">PEINTURE</router-link>
        </div> -->
    </div>
    <div class="main-menu">
        <router-link tag="span" class="menu-title" to="/oeuvre/nus/peinture">NUS ET EROTIQUES</router-link>
        <!-- <span class="menu-title">NUS ET EROTIQUES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/nus/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/nus/peinture">PEINTURE</router-link>
        </div> -->
    </div>
    <div class="main-menu">
        <router-link tag="span" class="menu-title" to="/oeuvre/paysages/peinture">PAYSAGES</router-link>
        <!-- <span class="menu-title">PAYSAGES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/paysages/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/paysages/peinture">PEINTURE</router-link>
        </div> -->
    </div>
    <div class="main-menu">
        <!-- <span class="menu-title">NATURES MORTES</span> -->
        <router-link tag="span" class="menu-title" to="/oeuvre/natures/peinture">NATURES MORTES</router-link>
        <!-- <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/natures/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/natures/peinture">PEINTURE</router-link>
        </div> -->
    </div>
</div>
<div class="menu-right">
    <router-link tag="div" class="isaac" to="/Accueil">ISAAC CELNIKIER</router-link>
    <!-- <div class="isaac">ISAAC CELNIKIER</div> -->
    <div class="inner-menu-right">
        <span class="right-title">L'HOMME</span>
        <div class="main-menu">
            <router-link tag="span" class="menu-title" to="/homme/bio/">BIOGRAPHIE</router-link>
            <!-- <span class="menu-title">BIOGRAPHIE</span> -->
            <div class="sub-menu-right" >
                <router-link v-for="slice in bio" key="slice.date.id" tag="div" class="leaf-menu" :to="'/homme/bio#date'+slice.date.id ">{{slice.date.date}}</router-link>
            </div>
        </div>
        <div class="main-menu">
            <router-link tag="span" class="menu-title" to="/homme/exposition/">EXPOSITIONS</router-link>
        </div>
        <div class="main-menu">
            <router-link tag="span" class="menu-title" to="/homme/catalogue/">CATALOGUES</router-link>
        </div>
        <div class="main-menu">
            <router-link tag="span" class="menu-title" to="/homme/contact/">CONTACT</router-link>
        </div>

    </div>
   
</div>
    
</div>

</template>

<script>
import biojson from '../assets/bio.json'
export default {
    name: 'Menus',
    data() {
        return {
            bio: biojson.bio
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.isaac {
    font-size: 26px;
    letter-spacing: 6px;
    cursor: pointer;
}

.menu-wrapper {
    position: fixed;
    width: 100%;
}

.left-title {
    font-size: 22px;
    top: -20px;
    position: relative;
}

.right-title {
    font-size: 22px;
    top: -20px;
    position: relative;
}

.menu-right {
    text-align: right;
    // position: relative;
    padding: 50px;
    float: right;
    // top: 100px;
    // left: 100%;
    .menu-title {
        float: left;
        padding-left: 60px;
    }
}

.inner-menu-right {
    position: relative;
    top: 50px;
}

.menu-left {
    float: left;
    padding: 50px;
    .menu-title {
        float: right;
    }
}

.main-menu {
    z-index: 1;
    width: 200px;
    height: 17px;
    font-size: 12px;

    &:hover {
        cursor: pointer;
        .menu-title {
            font-weight: bold;
            cursor: pointer;
        }

        .leaf-menu {
            display: block;
            cursor: pointer;
        }
    }
}

.sub-menu-left {
    position: relative;
    // top: -14px;
    left: 200px;
    padding-left: 10px;
}
.sub-menu-right {
    position: relative;
    top: -14px;
    right: 150px;
}

.leaf-menu {
    display: none;
    &:hover {
        font-weight: bold;
    }
}
</style>


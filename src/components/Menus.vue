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
    font-size: 1.5vmax;
    letter-spacing: 8px;
    cursor: pointer;
}

.menu-wrapper {
    position: fixed;
    width: 100%;
}

.left-title {
    font-size: 22px;
    font-size: 1.4vmax;
    top: -20px;
    position: relative;
}

.right-title {
    font-size: 22px;
    font-size: 1.4vmax;
    top: -20px;
    right: 30%;
    position: relative;
}

.menu-title {
    font-size: 16px;
    font-size: 0.84vmax;
}
.leaf-menu {
    font-size: 16px;
    font-size: 0.84vmax;
}

.menu-right {
    text-align: right;
    // position: relative;
    padding: 3% 2% 0 0;
    float: right;
    // top: 100px;
    // left: 100%;
    .menu-title {
        float: left;
        padding-left: 70%;
    }
}

.inner-menu-right {
    position: relative;
    top: 40px;
}

.menu-left {
    width: 15%;
    float: left;
    padding: 4% 0 0 1%;
    .menu-title {
        float: right;
        padding-right: 20%;
    }
}

.main-menu {
    z-index: 1;
    // width: 200px;
    height: 1.2vmax;
    font-size: 12px;

    &:hover {
        cursor: pointer;
        .menu-title {
            z-index: 99;
            font-weight: bold;
            cursor: pointer;
        }

        .leaf-menu {
            z-index: 99;
            display: block;
            cursor: pointer;
        }
    }
}

.sub-menu-left {
    position: relative;
    // top: -14px;
    left: 80%;
    padding-left: 10px;
}
.sub-menu-right {
    position: relative;
    top: -0.95vmax;
    right: 35%;
}

.leaf-menu {
    display: none;
    &:hover {
        font-weight: bold;
    }
}
</style>


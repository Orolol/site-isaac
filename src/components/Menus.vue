<template>
<div>
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
        <span class="menu-title">PORTRAITS ET MATERNITES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/peinture">PEINTURE</router-link>
        </div>
    </div>
    <div class="main-menu">
        <span class="menu-title">NUS ET EROTIQUES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/peinture">PEINTURE</router-link>
        </div>
    </div>
    <div class="main-menu">
        <span class="menu-title">PAYSAGES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/peinture">PEINTURE</router-link>
        </div>
    </div>
    <div class="main-menu">
        <span class="menu-title">NATURES MORTES</span>
        <div class="sub-menu-left" >
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/gravure">GRAVURE</router-link>
            <router-link tag="div" class="leaf-menu" to="/oeuvre/memoire/peinture">PEINTURE</router-link>
        </div>
    </div>
</div>
<div class="menu-right">
    <span class="right-title">L'HOMME</span>
    <div class="main-menu">
        <span class="menu-title">BIOGRAPHIE</span>
        <div class="sub-menu-right" >
            <router-link v-for="slice in bio" key="slice.date.id" tag="div" class="leaf-menu" :to="'/homme/bio#date'+slice.date.id ">{{slice.date.date}}</router-link>
        </div>
    </div>
    <div class="main-menu">
        <router-link tag="div" class="main-menu" to="/homme/exposition/">EXPOSITION</router-link>
    </div>
    <div class="main-menu">
        <router-link tag="div" class="main-menu" to="/homme/catalogue/">CATALOGUE</router-link>
    </div>
    <div class="main-menu">
        <router-link tag="div" class="main-menu" to="/homme/contact/">CONTACT</router-link>
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
    float: right;
    text-align: right;
    padding: 50px;
}
.menu-left {
    float: left;
    padding: 50px;
}


.main-menu {
    z-index: 1;
    width: 200px;
    height: 15px;
    font-size: 12px;


    &:hover {
        
        .menu-title {
            font-weight: bold;
        }
        
        .leaf-menu {
            display: block
        }
     }
}

.sub-menu-left {
    position: relative;
    top: -14px;
    left: 180px;
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


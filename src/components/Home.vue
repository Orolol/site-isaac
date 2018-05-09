<template>
  <div class="home">

      <!-- <router-link tag="span" to="Accueil" class="enter">Entrer</router-link> -->
      <router-link tag="div" to="Accueil" class="isaac-accueil"><span class="effect-underline">ISAAC CELNIKIER</span></router-link>

  </div>
</template>

<script>
export default {
    props: ['cat', 'type'],
    name: 'Oeuvre',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style >
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.isaac-accueil {
    font-size: 55px;
    font-size: 3.5vmax;
    letter-spacing: 25px;
    cursor: pointer;
    top: 20%;
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
    &:hover {
    }
}

/*effect-underline*/
.effect-underline:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
}

.effect-underline:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.home {
    background-image: url('/static/accueil.JPG');
    height: 100vh;
    width: 100%;
    left: 0px;
    background-repeat: no-repeat;
    background-size: cover;
}

.enter {
    font-size: 18;
    top: 15%;
    left: 10%;
    position: absolute;
}
</style>

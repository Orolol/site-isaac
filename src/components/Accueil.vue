<template>
  <div class="hello">
      <img class="img-accueil img-accueil-1" :src="require('@/assets/oeuvre/memoire/gravure/Alerte 1939.jpg')" />
      <img class="img-accueil img-accueil-2" :src="require('@/assets/oeuvre/portraits/peinture/Anne à l\'écharpe rouge.jpg')" />
      <img class="img-accueil img-accueil-3" :src="require('@/assets/oeuvre/natures/peinture/Mangues et grenades.jpg')" />
      <img class="img-accueil img-accueil-4" :src="require('@/assets/oeuvre/paysages/peinture/Ciel blanc sur Abu Tor, Jérusalem.jpg')" />
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

.img-accueil {
    max-width: 40%;

    position: absolute;
}

.img-accueil-1 {
    top: 15%;
    max-height: 38vh;
}
.img-accueil-2 {
    top: 15%;
    left: 55%;
    max-height: 38vh;
}
.img-accueil-3 {
    top: 60%;
    max-height: 38vh;
}
.img-accueil-4 {
    top: 62%;
    left: 55%;
    max-height: 38vh;
}
</style>

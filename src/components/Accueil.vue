<template>
  <div class="hello">
      <img class="img-accueil img-accueil-1" :src="require('@/assets/oeuvre/memoire/gravure/Insurrection.jpg')" />
      <img class="img-accueil img-accueil-2" :src="require('@/assets/oeuvre/memoire/peinture/Femmes pourchassées.jpg')" />
      <img class="img-accueil img-accueil-3" :src="require('@/assets/oeuvre/natures/peinture/Mangues et grenades.jpg')" />
      <img class="img-accueil img-accueil-4" :src="require('@/assets/oeuvre/paysages/peinture/Rocher de Sainte-Agnes pastel.jpg')" />
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
    max-width: 30%;
    max-height: 30vh;
    position: absolute;
}

.img-accueil-1 {
    top: 15%;
    left: 25%;
}
.img-accueil-2 {
    top: 25%;
    left: 55%;
}
.img-accueil-3 {
    top: 60%;
    left: 25%;
}
.img-accueil-4 {
    top: 65%;
    left: 60%;
}
</style>

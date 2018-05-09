<template>
<div>
  <transition name="fade">
    <div class="biographie" v-if="cat == 'bio'">
      <div class="intro"> {{intro[lang]}} </div>
      <img class="photo" :src="require('@/assets/homme/image1.jpeg')" /> 
      <span v-for="slice in bio" key="slice.date.id" :id="'date' + slice.date.id">
         <p v-for="para in slice.texte[lang]">{{para}}</p>
      </span>
    </div>
  </transition>
  <transition name="fade">
    <div class="homme" v-if="cat == 'exposition'">
      <div class="exposition">
          <div class="expo-solo titre">
            EXPOSITIONS INDIVIDUELLES
          </div>
          <div class="expo expo-solo" v-for="expo in expoSolo.expo">            
            <div class="expo-lieu">{{expo.lieu}}</div>
            <div class="expo-pays">{{expo.pays}}</div>
            <div class="expo-annee">{{expo.annee}}</div>
            <div class="expo-nom">{{expo.nom}}</div>
          </div>
      </div>
      <div class="exposition">
          <div class="expo-groupe titre">
            EXPOSITIONS COLLECTIVES
          </div>
          <div class="expo expo-groupe" v-for="expo in expoGroupe.expo">
            <div class="expo-lieu">{{expo.lieu}}</div>
            <div class="expo-pays">{{expo.pays}}</div>
            <div class="expo-annee">{{expo.annee}}</div>
            <div class="expo-nom">{{expo.nom}}</div>
          </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div class="homme" v-if="cat == 'contact'">
      <div class="contact">
          <div class="contact-1">
            <span>JACOB CELNIKIER</span><br>
            <a href="mailto:jacob.celnikier@gmail.com" >jacob.celnikier(at)gmail.com</a>
          </div>
          <div class="contact-2">
            <span>ANNE CELNIKIER</span> <br>
            <a href="mailto:anne.szulmajster@college-de-france.fr" >anne.szulmajster(at)college-de-france.fr</a>
          </div>
        </div>
    </div>
  </transition>
  <transition name="fade">
    <div class="homme" v-if="cat == 'catalogue'">
        <img class="catalgue1" :src="require('@/assets/homme/catalogue1.jpg')"/>
        <img class="catalgue2" :src="require('@/assets/homme/catalogue2.jpg')"/>
        <router-link tag="span" class="contact-catalogue" to="/homme/contact/">Pour recevoir ces catalogues veuillez nous contacter</router-link>
    </div>
  </transition>
  
</div>


</div>
</template>

<script>
import biojson from '../assets/bio.json'
import expoSoloJson from '../assets/expo-solo.json'
import expoGroupeJson from '../assets/expo-groupe.json'
export default {
    props: ['cat', 'type'],
    name: 'Homme',

    data() {
        return {
            lang: 'fr',
            slideshow: false,
            slideshowCurrent: 0,
            bio: biojson.bio,
            intro: biojson.intro,
            expoSolo: expoSoloJson,
            expoGroupe: expoGroupeJson
        }
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scss>
.contact-catalogue {
    /* justify-content: center; */
    /* text-align: center; */
    /* width: 100%; */
    position: absolute;
    left: 40%;
    top: 95%;
}
.contact-catalogue:hover {
    cursor: pointer;
}
.catalgue1 {
    /* max-width: 23%; */
    max-width: 48%;
    max-height: 70vh;
    top: 10%;
    /* left: 18%; */
    position: absolute;
}
.catalgue2 {
    max-height: 70vh;
    max-width: 48%;
    top: 10%;
    right: 1px;
    position: absolute;
}
.biographie {
    /* width: 55%; */
    padding-right: 10%;
    padding-top: 10%;
    /* padding: 12% 0 0 19%; */
}

.photo {
    padding: 10% 0 5% 50%;
}

.intro {
    font-size: 22px;
    width: 55%;
    padding: 0 0 0 20%;
}

.expo-nom {
    width: 40%;
}
.expo-lieu {
    width: 37%;
    text-align: right;
    padding-right: 15px;
}
.expo-pays {
    width: 5%;
    padding-right: 15px;
}
.expo-annee {
    width: 5%;
}

.exposition {
    position: relative;
    top: 250px;
    /* margin: 0 20% 0 12%; */
    /* left: 21%; */
    /* width: 55%; */
}

.expo-solo,
.expo-groupe {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    flex-grow: 0;
    -webkit-flex-grow: 0;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    /* width: 82%; */
    padding-bottom: 6px;
    padding-top: 6px;
    border-bottom: 1px solid black;
    position: relative;
    font-size: 15px;
    top: -150px;
}

.expo-groupe {
    position: relative;
    top: -100px;
}

.titre {
    font-weight: bold;
    text-align: right;
}

.contact-1 {
    position: fixed;
    left: 40%;
    top: 30%;
}

.contact-1 span {
    font-size: 12px;
}

.contact-2 {
    position: fixed;
    left: 20%;
    top: 60%;
}
.contact-2 span {
    font-size: 12px;
}

.contact-2 a,
.contact-1 a {
    font-size: 30px;
    letter-spacing: 4px;
    font-style: normal;
    font-variant: normal;
    text-decoration: none;
    text-transform: none;
    color: black;
}
</style>

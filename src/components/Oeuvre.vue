<template>
<div>
  <transition name="fade">
  <div class="oeuvre" v-if="!slideshow">
    <div class="oeuvre-texte">
      <p class="oeuvre-texte-titre"> {{titre}} </p>
      <div class="oeuvre-texte-content">
        <p v-for="para in contenu">{{para}}</p>
      </div>
      <div class="oeuvre-oeuvre">
        <div class="oeuvre-img" @click="slideshow = true">
          <img class="img" :src="require('@/assets/oeuvre/' +cat+'/'+ type+'/' + assets[0].filename)" />
        </div>
        
        <div class="oeuvre-box">
          <div class="oeuvre-titre"><span>{{assets[0].titre}}</span></div>
          <div class="oeuvre-details"><span>{{assets[0].date}}<br>{{assets[0].description}}<br>{{assets[0].dimension}}</span></div>
        </div>
      </div>
  	</div>
	</div>
  </transition>
  <transition name="fade">
    <div class="slideshow"v-if="slideshow">
      <div class="slide-next" @click="next"> > </div>  
      <div class="slide-prev" @click="previous"> < </div>  
      <div class="slideshow-img" >
            <img class="img-slide" @click="next" :src="require('@/assets/oeuvre/' +cat+'/'+ type+'/' + assets[slideshowCurrent].filename)" />
        </div>
        <div class="slideshow-box">
            <div class="oeuvre-titre"><span>{{assets[slideshowCurrent].titre}}</span></div>
            <div class="oeuvre-details"><span>{{assets[slideshowCurrent].date}}<br>{{assets[slideshowCurrent].description}}<br>{{assets[slideshowCurrent].dimension}}</span></div>
        </div>
        <div class="back" @click="slideshow = false">RETOUR</div>
    </div>
  </transition>
</div>


</div>
</template>

<script>
import datajson from '../assets/content.json'
export default {
    props: ['cat', 'type', 'lang'],
    name: 'Oeuvre',
    created() {
        console.log(datajson[this.cat])
    },
    data() {
        return {
            slideshow: false,
            slideshowCurrent: 0
            // titre : datajson[this.cat].titre,
            // contenu : datajson[this.cat].contenu,
            // assets : datajson[this.cat].assets[this.type]
        }
    },
    computed: {
        titre() {
            return datajson[this.cat].titre
        },
        contenu() {
            return datajson[this.cat].contenu
        },
        assets() {
            return datajson[this.cat].assets[this.type]
        }
    },
    methods: {
        next() {
            this.slideshowCurrent ==
            datajson[this.cat].assets[this.type].length - 1
                ? (this.slideshowCurrent = 0)
                : this.slideshowCurrent++
        },
        previous() {
            this.slideshowCurrent == 0
                ? (this.slideshowCurrent =
                      datajson[this.cat].assets[this.type].length - 1)
                : this.slideshowCurrent--
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scss>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.oeuvre-texte-titre {
    font-size: 20px;
}

.back {
    padding: 50px;
    z-index: 2;
}

.oeuvre-texte-content {
    font-size: 14px;
}

.slideshow {
    background: black;
    min-width: 100%;
    text-align: center;
    position: absolute;
}

.oeuvre-oeuvre {
    position: absolute;
    top: 30%;
    /* width: 30%; */
    padding: 0 0 0 45%;
}
.oeuvre-texte {
    top: 150px;
    padding: 10% 0 0 0;
    /* width: 30%; */
}

.oeuvre {
    width: 40%;
    padding: 10% 0 0 15%;
}

.img {
    max-width: auto;
    max-height: 50vh;
}
.img-slide {
    max-width: 80%;
    max-height: 80vh;
    z-index: 2;
}
.img-slide-full {
    max-width: 80%;
    height: auto;
}

.slide-next {
    height: 100vh;
    width: 30%;
    font-size: 60px;
    position: absolute;
    vertical-align: center;
    text-align: right;
    z-index: 1;
    left: 70%;
}
.slide-prev {
    height: 100vh;
    width: 30%;
    font-size: 60px;
    vertical-align: center;
    text-align: left;
    z-index: 1;
    position: absolute;
}
</style>

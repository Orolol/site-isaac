<template>
<div>
  <transition name="fade">
  <div class="oeuvre" v-if="!slideshow">
    <div class="oeuvre-texte">
      <p class="oeuvre-texte-titre"> {{titre}} </p>
      <div class="oeuvre-texte-content">
        <p v-for="para in contenu">{{para}}</p>
      </div>
    </div>
      <div class="oeuvre-oeuvre">
        <div class="oeuvre-img" @click="goSlide">
          <img class="img" :src="require('@/assets/oeuvre/' +cat+'/'+ type+'/' + assets[0].filename)" />
        </div>
        
        <div class="oeuvre-box">
          <div class="oeuvre-titre"><span>{{assets[0].titre}}</span></div>
          <div class="oeuvre-details"><span><span v-if="assets[0].description">{{assets[0].date}}</span><br v-if="assets[0].date">{{assets[0].description}}<br v-if="assets[0].description">{{assets[0].dimension}}</span></div>
        </div>
      </div>
  	
	</div>
  </transition>
  <transition name="fade">
    <div class="slideshow" v-if="slideshow" v-shortkey="['arrowup', 'arrowdown']" @shortkey="slideshow = false">
     
      <div class="slide-prev" @click="previous" v-shortkey="['arrowleft']" @shortkey="previous"> <span class="symbol-prev"> < </span></div>  
         
        <div class="slideshow-img" >
            <img class="img-slide" @click="next" :src="require('@/assets/oeuvre/' +cat+'/'+ type+'/' + assets[slideshowCurrent].filename)" />
             <div class="slideshow-box">
            <div class="oeuvre-titre"><span>{{assets[slideshowCurrent].titre}}</span></div>
            <div class="oeuvre-details"><span>{{assets[slideshowCurrent].date}}<br v-if="assets[slideshowCurrent].date">{{assets[slideshowCurrent].description}}<br>{{assets[slideshowCurrent].dimension}}</span></div>
            <div class="back" @click="slideshow = false" >RETOUR &rarrhk;</div>
            </div>
        </div>
        <div class="slide-next" @click="next" v-shortkey="['arrowright']" @shortkey="next"> <span class="symbol-next"> > </span> </div>
    
   
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
        goSlide() {
            this.slideshowCurrent = 0
            this.slideshow = true
        },
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
    padding-top: 12px;
    z-index: 2;
    font-weight: bold;
}

.oeuvre-texte-content {
    font-size: 14px;
}

.slideshow {
    background: black;
    /* min-width: 100%; */
    /* max-width: 60%; */
    z-index: 1001;
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.oeuvre-oeuvre {
    /* position: absolute; */
    padding-top: 20%;
    width: 45%;
    /* right: 1%; */
    /* width: 30%; */
    /* padding: 0 0 0 5%; */
}
.oeuvre-texte {
    top: 20%;
    padding: 5% 5% 0 0;
    overflow-y: hidden;
    width: 60%;
    /* height: 80vh; */

    /* width: 30%; */
}

.oeuvre {
    display: flex;
    flex-direction: row;
    padding: 10% 0 0 0;
}

.img {
    max-width: auto;
    max-height: 50vh;
}

.oeuvre-img:hover {
    cursor: pointer;
}
.back:hover {
    cursor: pointer;
}

.img-slide {
    /* max-width: 80%; */
    margin-top: 5px;
    max-height: 80vh;
    max-width: 80vw;
    z-index: 2;
}
.img-slide-full {
    max-width: 80%;
    height: auto;
}

.slide-next {
    display: flex;
    height: 100vh;
    width: 50%;
    font-size: 60px;
    /* position: absolute; */
    vertical-align: center;
    /* text-align: right; */
    z-index: 1;
    /* left: 70%; */
}
.symbol-prev {
    top: 40%;
    position: absolute;
    /* margin-right: 10px; */
    /* right: 1px; */
}
.symbol-next {
    top: 40%;
    /* right: 1px; */
    /* margin-left: 10px; */
    position: absolute;
}
.slide-prev {
    display: flex;
    height: 100vh;
    width: 50%;
    font-size: 60px;
    justify-content: flex-end;
    z-index: 1;
    /* position: absolute; */
}
.slide-prev:hover {
    cursor: pointer;
}
.slide-next:hover {
    cursor: pointer;
}
</style>

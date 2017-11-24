<template>
  <div id="app" :class="{ 'themeblack ' : $route.name != 'Homme', 'themewhite' : $route.name == 'Homme' }">
    <div class="wrapper" >
      <wrapper></wrapper>
    </div>
  </div>
</template>

<script>

import wrapper from './views/wrapper'

export default {
  components: {
    wrapper
  },
  name: 'app',
  data(){
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.themeblack  {
    position: absolute;
    background-color: black;
    color: white;
    min-height: 100%;
    height: 100%;
    width: 100%;
    /* display: flex;
    flex: 0 0 100%; */
} 

.wrapper {
  /* display: flex; */
}

.themewhite {
    background-color: white;
    color: black;
}

</style>


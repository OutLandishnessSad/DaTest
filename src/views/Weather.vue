<template>
    <div>
       <h1> ahoj</h1>

<vue-weather api-key="<your-open-weather-map-api-key>" units="uk" />
  <vue-weather api-key="<your-dark-sky-api-key>" use-dark-sky-api units="uk" />
    </div>
</template>

<script>
import VueWeather from "vue-weather-widget";

  export default {
    components: {
      VueWeather,
    },
  };
</script>

<style>

</style>
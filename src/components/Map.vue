<template>
  <l-map
    style="height:100vh; width:100vw; mix-blend-mode:screen"
    v-model="zoom"
    v-model:zoom="zoom"
    :center="[28.5618571 + 10, -80.577366 - 40]"
    :options="{ zoomControl: false, scrollWheelZoom: false }"
  >
    <l-tile-layer
      :attribution="attribution"
      url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
    />
    <l-marker :lat-lng="[28.5618571, -80.577366]" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 4,
      attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
    };
  },
};
</script>

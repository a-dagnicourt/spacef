<template>
  <l-map
    style="height: 100vh; width: 66.26vw; right: 0; mix-blend-mode: lighten"
    v-model="zoom"
    v-model:zoom="zoom"
    :center="[28.5618571, -80.577366 - 40]"
    :options="{ zoomControl: false, scrollWheelZoom: false }"
  >
    <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" />
    <l-circle-marker :lat-lng="circle.center" :radius="circle.radius" :color="circle.color" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LCircleMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
  },
  data() {
    return {
      zoom: 4,
      circle: {
        center: [28.5618571, -80.577366],
        radius: 10,
        color: 'rgba(251, 191, 36, 0.65)',
      },
    };
  },
};
</script>

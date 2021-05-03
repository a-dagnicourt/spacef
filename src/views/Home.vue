<script>
import axios from 'axios';
import dayjs from 'dayjs';

import Map from '../components/Map.vue';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

export default {
  name: 'Home',
  components: {
    Map,
  },
  data() {
    return {
      loading: true,
      formattedDate: null,
      countdown: null,
      rocket: '',
    };
  },
  computed: {
    setBg() {
      return {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 80%), url(${this.rocket})`,
      };
    },
  },
  methods: {
    async getDatas() {
      const self = this;
      await axios
        .get('https://api.spacexdata.com/v4/launches/next')
        .then((res) => {
          self.launch = res.data;
          console.log(self.launch);
          self.loading = false;
          self.formattedDate = dayjs(res.data.date_local).format('DD/MM/YY [-] HH:mm');
          self.countdown = dayjs(res.data.date_local).toNow(true);
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get(`https://api.spacexdata.com/v4/launchpads/${self.launch.launchpad}`)
        .then((res) => {
          self.launchpad = res.data.full_name;
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get(`https://api.spacexdata.com/v4/rockets/${self.launch.rocket}`)
        .then((res) => {
          self.rocket = res.data.flickr_images[Math.floor(Math.random() * res.data.flickr_images.length)];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDatas();
  },
};
</script>

<template>
  <div class="wrapper bg" :style="setBg">
    <div class="content bg h-full w-full absolute z-30" :style="setBg">
      <div class="bg-black h-full flex flex-col items-center justify-center" v-if="loading">
        <span class="animate-pulse">Loading...</span>
      </div>
      <main v-else class="home flex h-full z-30">
        <section id="mission-patch" class="w-full z-0 overflow-hidden">
          <img :src="launch.links.patch.large" :alt="launch.name" class="absolute max-h-full animate-spin-slow" />
        </section>
        <Map class="z-20 absolute" />
        <section
          id="mission-launchs"
          class="bg w-2/3 left-1/3 border-solid border-l-8 border-yellow-400 flex flex-col absolute h-full"
          :style="setBg"
        >
          <div id="mission-title" class="text-left mt-20 mb-5 ml-3 z-30">
            <h1 class="font-display text-6xl font-black tracking-wider text-yellow-400">
              <i class="fas fa-rocket"></i>{{ launch.name }}
            </h1>
          </div>
          <div class="mission-desc text-left text-xl italic leading-5 my-5 ml-3 z-30">
            <p class="text-left w-2/3">
              {{ launch.details }}
            </p>
          </div>
          <div id="mission-dates" class="flex-grow flex flex-col justify-center ml-3 z-30">
            <div class="text-left text-4xl pl-8">
              {{ formattedDate }}
            </div>
            <h2 class="text-left text-9xl absolute pt-16 opacity-25 font-display tracking-wide font-black z-30">
              {{ countdown }}
            </h2>
          </div>
        </section>
        <!-- <div>
      <p class="relative h-full z-30">Ola fdp comment ca va ?</p>
    </div> -->
      </main>
    </div>
  </div>
</template>

<style>
.bg {
  background-size: cover;
  background-attachment: fixed;
}

.animate-spin-slow {
  animation: spin 30s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

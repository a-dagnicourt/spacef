<script>
/* eslint-disable arrow-parens */
import axios from 'axios';
import dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      formattedDate: null,
      countdown: null,
    };
  },
  methods: {
    async getDatas() {
      const self = this;
      await axios.get('https://api.spacexdata.com/v4/launches/next').then(res => {
        self.launch = res.data;
        // console.log(self.launch);
        self.loading = false;
        self.formattedDate = dayjs(res.data.date_local).format('DD/MM/YY [-] HH:mm');
        self.countdown = dayjs(res.data.date_local).toNow(true);
      });
      await axios
        .get(`https://api.spacexdata.com/v4/launchpads/${self.launch.launchpad}`)
        .then(res => {
          self.launchpad = res.data.full_name;
          console.log(self.launchpad);
        });
    },
  },
  mounted() {
    this.getDatas();
  },
};
</script>

<template>
  <div class="bg-black h-full flex flex-col items-center justify-center" v-if="loading">
    <span class="animate-pulse">Loading...</span>
  </div>
  <main v-else class="home flex p-5 h-full">
    <section class="mission-patch w-1/3 z-0">
      <img
        :src="launch.links.patch.large"
        :alt="launch.name"
        class="h-full absolute animate-spin-slow"
      />
    </section>
    <section
      class="mission-launchs w-2/3 border-solid border-l-8 border-yellow-400 p-3 flex flex-col z-10"
    >
      <div class="mission-title text-left mt-20 mb-5">
        <h1 class="font-display text-6xl font-black tracking-wider">
          {{ launch.name }}
        </h1>
      </div>
      <div class="launchpad text-left mb-5">
        {{ launchpad }}
      </div>
      <div class="mission-desc text-left text-xl italic leading-5 my-5">
        <p class="text-left w-2/3">
          {{ launch.details }}
        </p>
      </div>
      <div class="mission-dates flex-grow flex flex-col justify-center">
        <div class="text-left text-4xl">
          {{ formattedDate }}
        </div>
        <div class="text-left text-6xl">{{ countdown }}</div>
      </div>
    </section>
  </main>
</template>

<style>
main,
.mission-launchs {
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95)),
    url('https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg');
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

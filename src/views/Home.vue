<template>
  <main class="home flex p-5 h-full bg-opacity-25">
    <section class="patch w-1/3" />
    <section class="w-2/3 border-solid border-l-8 border-yellow-400 p-3 flex flex-col">
      <div class="text-left mt-20 mb-5">
        <h1 class="font-display text-6xl font-black tracking-wider">
          Mission Title
        </h1>
      </div>
      <div class="text-left text-xl italic leading-5 my-5">
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatem?
          Exercitationem odit assumenda totam, nihil suscipit earum placeat est id quis corporis
          obcaecati at, natus quam, nisi labore tenetur minus!
        </p>
      </div>
      <div class="flex-grow flex flex-col justify-center">
        <div class="text-left text-4xl">25/03/21 21:00 UTC</div>
        <div class="text-left text-6xl">1d:3h:30m</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
main {
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95)),
    url('https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg');
}

.patch {
  background: left / cover no-repeat url('https://i.imgur.com/573IfGk.png');
  animation: animatedBackground 10s linear infinite alternate;
}
</style>

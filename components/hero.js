export function Hero() {
  return `
    <section id="home"
      class="relative min-h-screen flex items-center justify-center text-white"
      style="background-image: url('assets/images/bg-2.jpg'); background-size: cover; background-position: center;">

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-3xl">
        <h2 class="text-4xl md:text-5xl font-bold mt-20 mb-6">
          Push Your Brand Beyond Limits
        </h2>
        <p class="text-lg md:text-xl mb-8 opacity-90">
          Infinity Web Solutions provides Infinite Virtual Resource to enhance the efficiency of your business
        </p>
        <a href="#/explore"
          class="inline-block bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg font-semibold transition duration-300">
          Explore Services
        </a>
      </div>

    </section>
  `;
}
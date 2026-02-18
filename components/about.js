export function About() {
  return `
    <section id="about" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        
        <h2 class="text-4xl md:text-5xl font-bold text-black mt-20 mb-10">
          A Team Of Experienced <br class="hidden md:block"/><span class="text-sky-500"> Filipino Virtual Assistants
        </h2>

        <p class="text-gray-800 max-w-2xl mx-auto mb-14 text-justify">
          Infinity Web Solutions is a full-service digital marketing agency based in Batangas, Philippines. We are a team that works with companies and brands of all sizes, both locally and internationally. Our mission is to provide the most comprehensive business offering and experience, coupled with the highest level of customer service in the digital marketing industry. From strategizing to execution and down to maintenance, our versatile virtual assistants guarantee to deliver exceptional results in the least measure of time, with the most cost-effective solutions.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/images/abt-1.jpg" alt="abt1" class="w-full h-72 object-cover" />
          </div>

          <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/images/abt-2.jpg" alt="abt-2" class="w-full h-72 object-cover" />
          </div>

          <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/images/abt-3.jpg" alt="abt-3" class="w-full h-72 object-cover" />
          </div>

        </div>

      </div>
    </section>
  `;
}

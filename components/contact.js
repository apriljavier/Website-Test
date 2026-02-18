export function Contact() {
  return `
    <section id="contact" class="py-24 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-16">

          <!-- LEFT SIDE: FORM -->
          <div>
            <h2 class="text-4xl font-bold mt-20">
              Let’s talk about your goals.
            </h2>

            <p class="text-gray-600 mb-10 leading-relaxed">
              Every success starts with a conversation. Share your goals with us, and let’s build something great together.
            </p>

            <form class="space-y-6">

              <div class="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name*" 
                  class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">

                <input type="email" placeholder="Email*" 
                  class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
              </div>

              <input type="text" placeholder="Subject (Service) *" 
                class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">

              <input type="text" placeholder="Your Website" 
                class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">

              <textarea rows="5" placeholder="Message*" 
                class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>

              <button type="submit"
                class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Send Message
              </button>

            </form>
          </div>

          <!-- RIGHT SIDE: LOCATION -->
          <div>
            <h2 class="text-4xl font-bold mt-20">
              Where You Can Find Us
            </h2>

            <p class="mb-6 text-gray-700">
              San Jose, Batangas
            </p>

            <!-- MAP -->
            <div class="rounded-xl overflow-hidden shadow-lg mb-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.306924673067!2d121.10566829999999!3d13.880587199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd124224c8a75f%3A0x578be4e80b3b3fee!2sInfinity%20Web%20Solutions!5e0!3m2!1sen!2sph!4v1771384878144!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <!-- CONTACT INFO -->
            <div class="space-y-4 text-gray-700 text-lg">

              <div class="flex items-center gap-4">
                <i class="fa-solid fa-envelope text-sky-600"></i>
                <span>info@infinity-web-solutions.com</span>
              </div>

              <div class="flex items-center gap-4">
                <i class="fa-solid fa-phone text-sky-600"></i>
                <span>+63 915 372 5918</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
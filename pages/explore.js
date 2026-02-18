import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function Explore() {
  return `
    ${Navbar()}

    <section class="min-h-screen py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h1 class="text-4xl font-bold mt-20 mb-10">
          Explore Our Services
        </h1>

        <div class="grid md:grid-cols-2 gap-10">

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SynzIFPa45I?si=NNn59XeUqg4pfrQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
            <p class="mt-4 text-gray-600">
              SEO SERVICES
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/-Xy_VSoZJN4?si=pm8RH-CobRxQ9FLC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mt-4 text-gray-600">
              GRAPHIC DESIGN SERVICES
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/kAwIoRKzijE?si=1Hlw9w_8aI1yRSiv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mt-4 text-gray-600">
              CONTENT WRITING SERVICES
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div 
              class="aspect-video bg-cover bg-center bg-no-repeat rounded-lg"
              style="background-image: url('assets/images/bg-3.jpg');">
            </div>
            <p class="mt-4 text-gray-600">
              <a href="#contact"
                class="inline-block bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg text-white font-semibold transition duration-300">
                  Get Quote
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>

    ${Footer()}
  `;
}
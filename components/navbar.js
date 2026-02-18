export function Navbar() {
  return `
    <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <img src="assets/images/logo.png" alt="Logo" class="h-20 w-auto">

        <!-- Navigation Links -->
        <div class="space-x-6">
          <a href="#" class="hover:text-sky-600">Home</a>
          <a href="#about" class="hover:text-sky-600">About</a>
          <a href="#services" class="hover:text-sky-600">Our Services</a>
          <a href="#contact" class="hover:text-sky-600">Contact</a>
        </div>
      </div>
    </nav>
  `;
}
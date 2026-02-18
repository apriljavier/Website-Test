export function Footer() {
  return `
    <footer style="background-color: #1a1a1a; color: #cccccc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

      <!-- Top Footer: Logo + Nav Columns -->
      <div style="max-width: 1200px; margin: 0 auto; padding: 60px 40px 50px; display: flex; align-items: flex-start; gap: 40px;">

        <!-- Logo & Slogan -->
        <div style="flex: 0 0 220px; min-width: 180px;">
          <div style="font-size: 2rem; font-weight: 900; color: #ffffff; letter-spacing: 0.05em; text-transform: uppercase; line-height: 1;">
            INFINITY WEB SOLUTIONS
          </div>
          <div style="font-size: 0.7rem; color: #aaaaaa; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 6px;">
            A TEAM OF EXPERIENCED FILIPINO VIRTUAL ASSISTANTS
          </div>
        </div>

        <!-- Spacer to push nav columns to the right -->
        <div style="flex: 1;"></div>

        <!-- Nav Column 1 -->
        <div style="flex: 0 0 auto; min-width: 140px;">
          <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px;">
            <li>QUICK LINKS</li>
            <li><a href="#about" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">About Us</a></li>
            <li><a href="#contact" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Contact</a></li>
            <li><a href="#plans" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Plans and Pricing</a></li>
            <li><a href="#/explore" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Explore Our Services</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Get Quote</a></li>
          </ul>
        </div>

        <!-- Nav Column 2 -->
        <div style="flex: 0 0 auto; min-width: 120px;">
          <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px;">
            <li>OUR SERVICES</li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Search Engine Optimization</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Search Engine Marketing</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Social Media Marketing</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Email Marketing</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Content Writing</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Video Creation and Marketing</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Customer Service and Support</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Virtual Assistance</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Outsourcing - White Label</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Web Development and Design</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Graphic Design</a></li>
            <li><a href="#" style="color: #cccccc; text-decoration: none; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">E-commerce Development and Management</a></li>
          </ul>
        </div>

        <!-- Nav Column 3 -->

      </div>

      <!-- Divider -->
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 40px;">
        <hr style="border: none; border-top: 1px solid #333333; margin: 0;" />
      </div>

      <!-- Bottom Section: Social Icons + Copyright -->
      <div style="max-width: 1200px; margin: 0 auto; padding: 40px 40px 50px; display: flex; flex-direction: column; align-items: center; gap: 20px;">

        <!-- Social Icons -->
        <div style="display: flex; gap: 14px;">
          <!-- Facebook -->
          <a href="https://www.facebook.com/" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #555555; display: flex; align-items: center; justify-content: center; color: #cccccc; text-decoration: none; font-size: 0.85rem; transition: border-color 0.2s, color 0.2s;">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <!-- Pinteresr -->
          <a href="https://www.pinterest.com/" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #555555; display: flex; align-items: center; justify-content: center; color: #cccccc; text-decoration: none; font-size: 0.85rem;">
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
          <!-- Twitter -->
          <a href="https://www.x.com/" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #555555; display: flex; align-items: center; justify-content: center; color: #cccccc; text-decoration: none; font-size: 0.85rem;">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #555555; display: flex; align-items: center; justify-content: center; color: #cccccc; text-decoration: none; font-size: 0.85rem;">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        <!-- Copyright -->
        <p style="margin: 0; font-size: 0.75rem; color: #888888; letter-spacing: 0.05em;">
          ©Copyright. All rights reserved.
        </p>

      </div>

    </footer>
  `;
}
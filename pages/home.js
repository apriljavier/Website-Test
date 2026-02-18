import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { About } from "../components/about.js";
import { Services } from "../components/services.js";
import { Contact } from "../components/contact.js";
import { Footer } from "../components/footer.js";

export function Home() {
  return `
    ${Navbar()}
    ${Hero()}
    ${About()}
    ${Services()}
    ${Contact()}
    ${Footer()}
  `;
}
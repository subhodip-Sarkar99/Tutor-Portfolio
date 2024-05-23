import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className="footer items-center p-8 bg-cyan-800 text-neutral-content font-Montserrat xl:text-xl absolute">
  <aside className="items-center grid-flow-col">
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
    <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
    <a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></a>
    <a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
    </nav>
</footer>
    </>
  );    
}

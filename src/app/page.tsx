import Image from "next/image";
import Nav from "./nav/Nav";
import Hero from "./Hero/Hero";
import Works from "./Working/Works";
import Footer from "./Footer/Footer";
import Feature from "./Features/Feature";


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Feature />
      <Works />
   
      <Footer />
      
    </div>
    
  );
}

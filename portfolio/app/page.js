import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container ">
      
      <div className="container mx-auto px-12 py-18"> 
        <Navbar/>      
      <HeroSection/>
      <AboutMe/>
      <MySkills/>
      <Projects/>
      <Footer/>

      </div>
    </main>
  );
}

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";



export default function Home() {
  return (
   <main className=" relative bg-black flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-2.5">
    <div className=" max-w-7xl w-full">
      <FloatingNav 
      navItems = {[
        {name: 'Home',
        link: '/',
        icon: <FaHome />}
    ]} />
    <Hero /> 
    <Grid />
    </div>
   </main>
  );
}

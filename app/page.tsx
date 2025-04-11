import Hero from "@/components/Hero";



export default function Home() {
  return (
   <main className=" relative bg-black flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-2.5">
    <div className=" max-w-7xl w-full">
      <h1> <Hero /> </h1>
    </div>
   </main>
  );
}

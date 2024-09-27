import Hero from "@/components/Hero";
import InstallInstructions from "@/components/InstallInstructions";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        <Hero />
        <InstallInstructions />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

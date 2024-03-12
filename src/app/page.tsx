import Footer from "@/components/Common/Footer";
import Blogs from "@/components/Home/Blogs/Blogs";
import Header from "@/components/Home/Header";
import Projects from "@/components/Home/Projects/Projects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </main>
  );
}

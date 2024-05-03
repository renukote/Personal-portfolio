import { AboutMe } from "./components/molecules/AboutMe/AboutMe";
import { Blog } from "./components/molecules/Blog/Blog";
import { ContactMe } from "./components/molecules/ContactMe/ContactMe";
import { Education } from "./components/molecules/Education/Education";
import { Footer } from "./components/molecules/Footer/Footer";
import { Header } from "./components/molecules/Header/Header";
import { Projects } from "./components/molecules/Projects/Projects";
import { Skills } from "./components/molecules/Skills/Skills";
import { Hero } from "./components/organism/Hero/Hero";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Blog />
      <ContactMe />
      <Footer />
    </RootLayout>
  );
}

import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Languages from "./components/languages"
import Contact from "./components/contact"

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Skills/>
            <Languages/>
            <Contact/>
        </>
    );
}

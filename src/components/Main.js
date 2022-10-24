import Hero from "./Hero";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Line from "./Line";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <Line />
      <Rockets />
      <Line />
      <Testimonials />
      <Line />
      <Contact />
    </main>
  )
}
export default Main
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="my-12 p-6 scroll-mt-20">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Testimonials
      </h2>
      <TestimonialCard
        testimonial="Acme has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience."
        author="Wile E. Coyote, Genius"
      />
      <TestimonialCard
        testimonial={`The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occasions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's sturdy, quality designs.`}
        author="Marvin The Martian &amp; K-9"
      />
      <TestimonialCard testimonial="I knew that I not only wanted &#8212; I NEEDED &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says 'Take me to your leader!' like Acme's Infinity Rocket! 💯" author="Buzz Lightyear, Space Ranger" />
    </section>
  );
};

export default Testimonials;

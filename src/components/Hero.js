import rocketDab from "../images/rocketdab.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-12 flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white capitalize">
            we boldy go <span className="text-indigo-700 dark:text-indigo-300">where no rocket</span> has gone before...
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Think Acme Rockets.
        </p>
      </article>
      <img src={rocketDab} alt="Rocket Dab" className="w-1/2" />
    </section>
  );
};
export default Hero;

import RocketCard from "./RocketCard";

import rocketMan from "../images/rocketman.png";
import rocketRide from "../images/rocketride.png";
import rocketLaunch from "../images/rocketlaunch.png";


const Rockets = () => {
  return (
    <section id="rockets" className="my-12 p-6 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <RocketCard imageUrl={rocketMan} imageAlt="Explorer" title="Explorer" largeContent="$" smallContent="Affordable Exploration" />
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <RocketCard imageUrl={rocketRide} imageAlt="Adventurer" title="Adventurer" largeContent="$$" smallContent="Best Selling Rocket!" />
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <RocketCard imageUrl={rocketLaunch} imageAlt="Infinity" title="Infinity" largeContent="$$$" smallContent="Luxury Starship" />
        </li>
      </ul>
    </section>
  );
};
export default Rockets;

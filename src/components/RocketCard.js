const RocketCard = ({ imageUrl, imageAlt, title, largeContent, smallContent }) => {
  return (
    <>
      <img src={imageUrl} alt={imageAlt} className="mb-6 w-1/2" />
      <h3 className="text-center text-3xl text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
        {largeContent}
      </p>
      <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
        {smallContent}
      </p>
    </>
  );
};
export default RocketCard;

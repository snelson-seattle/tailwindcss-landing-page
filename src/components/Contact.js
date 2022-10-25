const Contact = () => {
  return (
    <section id="contact" className="my-12 p-6 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact Us
      </h2>
      <form className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required minLength="3" maxLength="60" placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="7" required placeholder="Your Message" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" />
        <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;

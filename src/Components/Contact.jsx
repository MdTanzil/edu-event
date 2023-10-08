

const Contact = () => {
    return (
      <div>
        <section className="mt-10">
          <h1 className="text-4xl mb-10 text-black text-center font-bold roboto capitalize">
            Contact Us
          </h1>
          <h3
            className="text-
        xl mb-4 text-[#040a17] text-center font-medium roboto "
          >
            Have any question ? Want to send feedback about? Need
            details about our Business ? Let us know.
          </h3>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8 barlow" >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm  border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  rounded-lg border  shadow-sm "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center  rounded-lg sm:w-fit  bg-rose-200"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
};

export default Contact;
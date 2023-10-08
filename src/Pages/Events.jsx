import { Helmet } from "react-helmet-async";


const Events = () => {
    return (
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Helmet>
          <title>eduEvent | Events</title>
          
        </Helmet>
        <div className=" relative h-auto w-auto flex-col justify-center overflow-hidden ">
          <div className="absolute "></div>
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif roboto text-black text-2xl font-bold  shadow-xl">
                Azores
              </h1>
              <h1 className="text-sm font-light shadow-xl text-black">
                A Little Paradise in Portugal
              </h1>
            </div>
          </div>
        </div>
        <div className=" relative h-auto w-auto flex-col justify-center overflow-hidden  ">
          <div className="absolute "></div>
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80"
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif roboto text-black text-2xl font-bold  shadow-xl">
                Azores
              </h1>
              <h1 className="text-sm font-light shadow-xl text-black">
                A Little Paradise in Portugal
              </h1>
            </div>
          </div>
        </div>
        <div className=" relative h-auto w-auto flex-col justify-center overflow-hidden ">
          <div className="absolute "></div>
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80"
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif roboto text-black text-2xl font-bold  shadow-xl">
                Azores
              </h1>
              <h1 className="text-sm font-light shadow-xl text-black">
                A Little Paradise in Portugal
              </h1>
            </div>
          </div>
        </div>
        <div className=" relative h-auto w-auto flex-col justify-center overflow-hidden  ">
          <div className="absolute "></div>
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif roboto text-black text-2xl font-bold  shadow-xl">
                Azores
              </h1>
              <h1 className="text-sm font-light shadow-xl text-black">
                A Little Paradise in Portugal
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Events;
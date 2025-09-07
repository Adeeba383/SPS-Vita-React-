function Banner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start m-4 md:m-7 pb-12">
      {/* Left section */}
      <div className="text-white">
        <h1 className="text-2xl md:text-3xl font-bold mt-2 text-center lg:text-left">
          Helping State of Virginia with VITA Sec-530 Compliance
        </h1>
        <h2 className="text-lg md:text-xl font-semibold mt-3 text-center lg:text-left">
          Guiding Organizations to Meet VITA SEC-530 Cybersecurity Standards
        </h2>
        <p className="mt-5 text-justify text-sm md:text-base">
          Ensure your organization's security measures comply with VITA SEC 530
          standards. Our expert consulting services provide tailored solutions
          to meet your cybersecurity requirements and enhance your defense
          against threats.
        </p>
      </div>

      {/* Right section */}
      <div className="text-white mt-8 lg:mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Choose a Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div className="h-full p-4 rounded-xl shadow-md bg-white text-black flex flex-col items-center">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p className="mt-2">$1k/month</p>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
              Get Started
            </button>
          </div>

          <div className="h-full p-4 rounded-xl shadow-md bg-white text-black flex flex-col items-center">
            <h3 className="font-semibold text-lg">Standard</h3>
            <p className="mt-2">$3k/month</p>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
              Get Started
            </button>
          </div>

          <div className="h-full p-4 rounded-xl shadow-md bg-white text-black flex flex-col items-center">
            <h3 className="font-semibold text-lg">Premium</h3>
            <p className="mt-2">Custom</p>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

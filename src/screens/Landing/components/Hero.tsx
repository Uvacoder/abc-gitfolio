export default function Hero() {
  return (
    <div className="gradient-bg h-96 flex justify-center items-center flex-col">
      <h1 className="text-4xl lg:text-6xl text-white font-bold text-center w-11/12">
        Build with us. Code with us
      </h1>
      <div className="p-8 mt-6 w-full">
        <div className="bg-white flex mx-auto justify-center items-center rounded-full shadow-xl w-3/4 md:w-1/2">
          <input
            className="rounded-l-full w-10/12 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Find some awesome developers here! (still in progress)"
          />
          <div className="p-4">
            <button className="bg-blue-500 text-secondary rounded-full p-2 hover:bg-blue-400 focus:outline-none h-4 flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

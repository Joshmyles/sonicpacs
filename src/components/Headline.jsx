const Headline = () => {
  return (
    <>
      <div
        id="headline"
        className="relative flex flex-col items-center justify-center mx-auto w-full py-28 space-y-8 lg:py-36 xl:py-56"
      >
        <h1 className="font-bold text-center lg:text-3xl">
          The <span className="text-xl text-purple-500 lg:text-5xl">Ideal</span>
          <br /> Picture Archiving and Communication System
        </h1>
        <div className="flex font-bold tracking-widest lg:text-[100px]">
          <span className="text-5xl text-purple-600">P</span>
          <span className="text-5xl text-purple-600">A</span>
          <span className="text-5xl text-purple-600">C</span>
          <span className="text-5xl text-purple-600">S</span>
        </div>
        <h3 className="text-center lg:text-xl">
          <span className="text-purple-600 font-semibold">
            Web-based medical imaging
          </span>{' '}
          platform for storage, visualization and sharing.
          <br /> DICOM server + HTML5 DICOM viewer for both on-premises and
          cloud environments
        </h3>
        <button className="rounded-md bg-purple-600 font-bold text-white p-2 hover:bg-purple-700 animate-pulse">
          Contact Us Now
        </button>
        <div className="absolute z-10 top-[330px] -left-36 sm:top-[280px] md:top-[260px] lg:top-[330px] xl:top-[380px]">
          <img
            src="src/assets/images/wave.svg"
            alt=""
            className="w-[350px] md:w-[400px]  lg:w-[500px] xl:w-[750px]"
          />
        </div>
        <div className="absolute z-20 -top-[150px] -right-[500px]">
          <img
            src="src/assets/images/wave.svg"
            alt=""
            className="rotate-[180deg] w-[900px] xl:w-[1200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Headline;

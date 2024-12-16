/* import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4"; */
import video3 from "../assets/hero-1.mp4";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Software for your
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Startup, Web , Landing
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        In a world where businesses need to stay ahead with cutting-edge
        software, our company offers bespoke solutions that are fast, reliable,
        and tailored to our clients exact needs.
      </p>
      <div className="flex justify-center my-10">
        <a href="#pricing" className="primary-btn">
          Start for free
        </a>
        <a
          href="#workflow"
          className="hidden sm:flex py-3 px-4 mx-3 rounded-md border transition-all duration-200 hover:opacity-70 "
        >
          WorkfLow
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <video className="rounded-xl" autoPlay muted loop>
          <source src={video3} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
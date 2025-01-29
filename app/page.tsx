import Clock from "@/components/clock";

const Home = () => {
  return (
    <main className="relative container max-w-[1600px] h-screen overflow-hidden">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.90)]" />
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source src="/ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
          Launching soon
        </h1>
        <p className="font-light max-w-[400px] lg:max-w-[600px] mb-8 text-lg md:text-xl lg:text-2xl">
          Leave your email and we&apos;ll let you know once the site goes live.
        </p>
        <Clock />
        <button
          type="button"
          className="h-16 px-12 capitalize rounded-md text-xl font-normal bg-white text-black"
        >
          Notify me
        </button>
      </div>
    </main>
  );
};

export default Home;

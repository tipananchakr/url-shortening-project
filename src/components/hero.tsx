import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="container mx-auto flex flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-24">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-gray-custom-900 text-4xl font-bold leading-tight md:text-6xl">
          More than just
          <br />
          shorter links
        </h1>

        <p className="text-gray-custom-500 mt-6 max-w-xl text-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button
          className="bg-cyan hover:bg-cyan/80 mt-8 rounded-full px-8 py-6"
        >
          Get Started
        </Button>
      </div>

      <div className="flex-1">
        <img
          src="/images/illustration-working.svg"
          alt="working"
          className="w-full max-w-xl"
        />
      </div>
    </section>
  );
}

export default Hero;
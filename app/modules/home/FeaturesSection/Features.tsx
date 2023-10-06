import { BsGear } from "react-icons/bs";
let Features = () => {
  return (
    <div className="box-border w-full mx-auto space-y-10 overflow-x-hidden font-normal p-8 bg-transparent h-fit max-w-10xl">
      <h2 className="mx-auto text-4xl text-center text-text font-roboto">
        What`s Omniscient?
      </h2>
      <p className="w-2/3 mx-auto text-sm font-light text-center font-roboto text-accent md:text-lg md:w-1/2">
        Omniscient Personal is an{" "}
        <span className="underline underline-offset-4 under decoration-primary">
          AI-driven
        </span>{" "}
        platform, which assists with self-education and serves as a personal
        tutor. Omniscient ensures personalized, consistent, and effective
        self-education using generative AI.
      </p>
      <div className="box-border grid lg:features w-10/12 lg:w-full xl:w-3/4 mx-auto grid-cols-1 gap-2 px-10 h-fit md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
        <div className="lg:features-container--1 features-container"></div>
        <div className="lg:features-container--2 features-container">
          <div className=" w-8/12 border-accent">
            <h2 className="font-roboto  text-3xl text-text">
              Personalized education
            </h2>
            <p className="mt-5 text-base text-accent  font-light font-roboto border-accent text">
              Omniscient Personal provides an AI tutor that is personalized to
              each user`s context and goals. This acts as a mentor to guide
              users through their learning journey and provide feedback.
            </p>
          </div>
          <BsGear
            size={"40%"}
            className="text-accent opacity-80 animate-spin-slow "
          />
        </div>
        <div className="lg:features-container--3 features-container">
          <div className="border-accent">
            <h2 className="font-roboto text-3xl text-text">
              Flexible learning path
            </h2>
          </div>
        </div>
        <div className="lg:features-container--4 features-container"></div>
        <div className="lg:features-container--5 features-container"></div>
        <div className="lg:features-container--6 features-container"></div>
      </div>
    </div>
  );
};
export default Features;

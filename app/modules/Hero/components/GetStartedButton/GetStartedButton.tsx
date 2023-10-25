import Link from "next/link";

let GetStartedButton = () => {
  return (
    <Link
      className="w-fit hover:border-accent tracking-tight border-[0.2px] hover:text-text border-accent text-md font-medium hover:bg-background transition-all duration-300  box-border mx-auto text-background bg-text  px-5 py-1  rounded-lg block  text-[min(2vw,20px)]"
      href="/"
    >
      Get started
    </Link>
  );
};

export default GetStartedButton;

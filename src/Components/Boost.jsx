import Button from "./Button";
// import background from "../assets/images/bg-boost-mobile.svg";

function Boost() {
  return (
    <div className="flex flex-col gap-6 bg-darkViolet bg-[url('src/assets/images/bg-boost-mobile.svg')] bg-cover bg-center p-6 py-20 text-white">
      <h1 className=" text-center text-2xl font-bold ">
        Boost your link today
      </h1>
      <Button className=" rounded-full">Get Started</Button>
    </div>
  );
}

export default Boost;

import heroimag from "../../src/assets/images/illustration-working.svg";
import Button from "./Button";
import Header from "./Header";
import HeroText from "./HeroText";

function Hero() {
  return (
    <div className="mb-12 flex flex-col justify-center gap-6 p-6">
      <Header />
      <img src={heroimag} alt="heroimg" />
      <HeroText />
      <Button className=" grow-0 rounded-full ">Get Started</Button>
    </div>
  );
}

export default Hero;

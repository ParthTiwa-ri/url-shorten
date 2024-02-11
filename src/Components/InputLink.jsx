import Button from "./Button";

function InputLink() {
  return (
    <div className="  space-y-4 rounded-md bg-darkViolet bg-[url('src/assets/images/bg-shorten-mobile.svg')] bg-cover bg-center px-6 py-7">
      <input
        className="w-full rounded-md px-4 py-3"
        placeholder="Shorten a link here.."
      />
      <Button className="w-full rounded-md"> Shorten It!</Button>
    </div>
  );
}

export default InputLink;

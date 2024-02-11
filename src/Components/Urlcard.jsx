import Button from "./Button";

function Urlcard() {
  return (
    <div className="divide-y-[1px] divide-gray rounded-md bg-white p-3  ">
      <p className="p-3">https://www.trontenamentor.ic</p>
      <p className="px-3 py-4">https://rel.ink/k41Kyk</p>
      <Button className="w-full rounded-md ">Copy</Button>
    </div>
  );
}

export default Urlcard;

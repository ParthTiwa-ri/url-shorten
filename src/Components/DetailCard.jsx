/* eslint-disable react/prop-types */
function DetailCard({ item }) {
  const { title, content, img } = item;
  return (
    <div className="relative mb-24 mt-12 rounded-md bg-white p-8 pt-14 shadow-sm">
      <h2 className=" text-center text-2xl font-bold text-veryDarkBlue">
        {title}
      </h2>
      <p className="mt-3 text-center leading-7  text-grayishViolet">
        {content}
      </p>
      <div className=" absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-darkViolet">
        <img src={img} alt="brand" />
      </div>
    </div>
  );
}

export default DetailCard;

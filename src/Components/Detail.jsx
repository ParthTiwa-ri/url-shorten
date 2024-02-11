import DetailHeading from "./DetailHeading";
import DetailsCards from "./DetailsCards";
import InputLink from "./InputLink";
import UrlCards from "./UrlCards";

function Detail() {
  return (
    <div className="relative mt-4 flex flex-col gap-6 bg-detailGray p-6 pt-32 ">
      <UrlCards />
      <InputLink />
      <DetailHeading />
      <DetailsCards />
    </div>
  );
}

export default Detail;

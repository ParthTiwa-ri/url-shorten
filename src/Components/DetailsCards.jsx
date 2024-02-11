import DetailCard from "./DetailCard";
import card from "../Data/card.json";
function DetailsCards() {
  return (
    <div>
      {card.map((item, i) => (
        <DetailCard key={i} item={item} />
      ))}
    </div>
  );
}

export default DetailsCards;

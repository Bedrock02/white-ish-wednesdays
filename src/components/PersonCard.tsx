interface Props {
  image: string;
  alt: string;
  name: string;
  score?: number;
}
const PersonCard = ({ image, alt, name, score }: Props) => {
  return (
    <div className="personCard">
      <img src={image} alt={alt} height={200} />
      <h2>{name}</h2>
      {score && <h3>{score}</h3>}
    </div>
  );
}

export default PersonCard;
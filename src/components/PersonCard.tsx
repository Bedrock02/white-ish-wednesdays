import { Player } from "../types";

interface Props {
  player: Player;
  score?: number;
}

const playerToData = (player: Player) => {
  switch (player) {
  
    case 'ebro':
      return {
        image: 'src/assets/ebro.png',
        alt: 'Ebro',
        name: 'Ebro Darden'
      };
    case 'laura':
      return {
        image: 'src/assets/lauraStyles.png',
        alt: 'Laura Styles',
        name: 'Laura Styles'
      };
    case 'shani':
      return {
        image: 'src/assets/shani.png',
        alt: 'Shani Kulture',
        name: 'Shani Kulture'
      };
    case 'djkast':
      return {
        image: 'src/assets/djkast.png',
        alt: 'DJ Kast One',
        name: 'DJ Kast One'
      };
    default:
      return {
        image: '',
        alt: '',
        name: ''
      };
  }
};

const PersonCard = ({ player, score }: Props) => {
  const { image, alt, name } = playerToData(player);
  return (
    <div className="personCard">
      <img src={image} alt={alt} height={200} />
      <h2>{name}</h2>
      {score && <h2>{score}</h2>}
    </div>
  );
}

export default PersonCard;
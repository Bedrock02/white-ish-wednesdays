import { Player } from "../types";
import ebro from './assets/ebro.png'
import laura from './assets/lauraStyles.png'
import djkast from './assets/djkast.png'
import shani from './assets/shani.png'

interface Props {
  player: Player;
  score?: number;
}

const playerToData = (player: Player) => {
  switch (player) {
  
    case 'ebro':
      return {
        image: ebro,
        alt: 'Ebro',
        name: 'Ebro Darden'
      };
    case 'laura':
      return {
        image: laura,
        alt: 'Laura Styles',
        name: 'Laura Styles'
      };
    case 'shani':
      return {
        image: shani,
        alt: 'Shani Kulture',
        name: 'Shani Kulture'
      };
    case 'djkast':
      return {
        image: djkast,
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
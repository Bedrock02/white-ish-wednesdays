import { Player } from "../types";
import ebro from '../assets/ebro.png';
import laura from '../assets/lauraStyles.png';
import djkast from '../assets/djkast.png';
import shani from '../assets/shani.png';
import djjuan from '../assets/djjuan.jpeg';

interface Props {
  player: Player;
  score?: number;
  icon?: boolean;
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
    case 'djjuan':
      return {
        image: djjuan,
        alt: 'DJ Juan',
        name: 'DJ Juan'
      }
    default:
      return {
        image: '',
        alt: '',
        name: ''
      };
  }
};
const PersonCard = ({ player, score, icon }: Props) => {
  const { image, alt, name } = playerToData(player);
  const scoreText = score !== undefined ? `${score}` : '';
  return (
    <div className="personCard">
      <img src={image} alt={alt} height={icon ? 40 : 200} style={{ borderRadius: '10%' }} />
      <h2>{name}</h2>
      {<h2>{scoreText}</h2>}
    </div>
  );
}

export default PersonCard;
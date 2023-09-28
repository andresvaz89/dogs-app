import dogImage from '../../assets/doggy.avif';
import dogImageTwo from '../../assets/dog2.avif';
import dogImageThree from '../../assets/perritomaca.avif';
import dogImageFour from '../../assets/perroempollon.avif';
import DogCard from '../DogCard/DogCard';
import './MainSection.css';

const dogList = [
  { name: 'Pistacho', src: dogImage, description: 'Mi coleguita' },
  { name: 'Horse Luis', src: dogImageTwo, description: 'Lo máximo' },
  {
    name: 'Alfredo',
    src: dogImageThree,
    description: 'El más maca del barrio'
  },
  { name: 'Pocholo', src: dogImageFour, description: 'Lo sabe todo' }
];

function MainSection() {
  return (
    <div className="main">
      <h1>Welcome to my React Dog Page</h1>
      <br />
      {/*     <DogCard
        name={'Pistacho'}
        src={dogImage}
        description={'Looks scary but nicest dog'}
      />
      <DogCard
        name={'Horse Luis'}
        src={dogImageTwo}
        description={'Lo máximo'}
      />
      <DogCard
        name={'Alfredo'}
        src={dogImageThree}
        description={'El más maca del barrio'}
      />
      <DogCard
        name={'Pocholo'}
        src={dogImageFour}
        description={'Lo sabe todo'}
      /> */}
      <div className="dogs-container">
        {dogList.map((dog) => {
          return (
            <DogCard
              name={dog.name}
              src={dog.src}
              description={dog.description}
            />
          );
        })}
      </div>
      <p>This page is all about dogs</p>
    </div>
  );
}
export default MainSection;

function DogCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="dog_image" width={'100px'} height={'100px'} />
      <p>{props.description}</p>
    </div>
  );
}

export default DogCard;

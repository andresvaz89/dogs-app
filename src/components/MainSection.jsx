import dogImage from '../assets/doggy.avif';

function MainSection() {
  return (
    <div className="main">
      <h1>Welcome to my React Dog Page</h1>
      <br />
      <img src={dogImage} width={'100px'} height={'100px'} alt="perrini" />
    </div>
  );
}
export default MainSection;

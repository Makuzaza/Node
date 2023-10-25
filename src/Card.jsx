import './Card.css'

const Card = (props) => {
    return (
    <div >
      <h1>Name: {props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card
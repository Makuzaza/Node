

const Card = (props) => {
    return (
    <div class='cards'>
      <h1>Name: {props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;



// class Welcome extends Component {
//   render() {
//     return 
//     <h1>Hello, {this.props.name}</h1>;
//   }
// }
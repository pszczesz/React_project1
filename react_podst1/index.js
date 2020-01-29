


class MyComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const names = ["anna", "wanna", "banna", "Rybka"];
    return (names.map(
      (item) => (<h1 key={item}>Hello: {item}</h1>)
    ));

  }
}
const name = "Paweł"
ReactDOM.render(<MyComp name={name} />, document.querySelector("#root"));
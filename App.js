import "./App.css";
import Navbar from "./components/navbarComponent";
import Card from "./components/myCard";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://assessment.api.vweb.app/rides")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div className="App">
			<div className="mycontainer">
				<Navbar />
				<Card />
			</div>
        </div>
      );

    console.log(items);
    return (
      <div className="App">
        <div className="mycontainer">
          <Navbar />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;

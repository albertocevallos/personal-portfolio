import React, { Component } from "react";
import "./styles/main.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/primary/Homepage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          name: "Zentab",
          website: "",
          media: { img: "zentab", imgType: "png" },
          word: "Productivity App",
          tweet:
            "Zentab is a personal productivity app built for developers, designers and data scientists",
          release: { date: "Private Beta", state: "live" }
        },
        {
          name: "InstaPen",
          website: "",
          media: { img: "none", imgType: "png" },
          word: "Online Text Editor",
          tweet: "Instapen is a simple online text editor and notepad",
          release: { date: "February 2020", state: "progress" }
        },
        {
          name: "DeFi Daily",
          website: "",
          media: { img: "none", imgType: "png" },
          word: "DeFi Analytics",
          tweet:
            "DeFi Daily tracks the performance of decentralized finance's (DeFi) top projects",
          release: { date: "March 2020", state: "progress" }
        }
      ],
      experiments: [
        {
          name: "Deep Voice Fake",
          website: "",
          media: { img: "none", imgType: "png" },
          word: "Deep Voice Fake",
          tweet: "Create a digital voice from a small audio sample",
          release: { date: "Winter 2020", state: "N/A" }
        }
      ],
      posts: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route
          path={["/"]}
          exact
          render={() => {
            return (
              <Homepage
                products={this.state.products}
                experiments={this.state.experiments}
              />
            );
          }}
        />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="content">
          <div className="container" id="body" style={{ height: 300 }} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;

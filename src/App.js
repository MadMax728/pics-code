import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/dashboard/UserProfile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Dashboard /> */}
        <UserProfile />
        <Footer />
      </div>
    );
  }
}

export default App;

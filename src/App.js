import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import JourneyForm from './components/journey.jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/profile';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Navbar />
        <Welcome name="there" />
        <div className="journey-planner">
          <JourneyForm />
        </div>
        <div>
        <Profile />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

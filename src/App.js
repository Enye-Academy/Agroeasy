import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/support';
import Home from './components/home';
import Eggcrate from "./components/items-detailed/egg-crate";
import Palmoil from "./components/items-detailed/palm-oil";


/*
The principal component for housing sub-components (like home, about and
other pages) for easy navigation
*/
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                   <Route path='/' exact strict component={Home} />
                   <Route path='/about/' exact strict component={About} />
                   <Route path="/eggcrates/" exact strick component={Eggcrate} />
                   <Route path="/palmoil/" exact strick component={Palmoil} />
                </div>
            </Router>


        );
    }
}

export default App;

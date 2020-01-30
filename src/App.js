import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import projectTitles from './components/variables';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Projects projects={projectTitles} />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

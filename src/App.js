import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';

// React router 5
function App() {
  return (
    <>
      <Router basename="/react-food">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

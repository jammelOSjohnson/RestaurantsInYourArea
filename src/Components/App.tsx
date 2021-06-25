import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeScreen from '../Screens/HomeScreen';

//Import provider
import AppDataProvider from '../Context/AppDataContext';

var App = function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
            <Route path="/" exact component={HomeScreen} />
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  return (
    <AppDataProvider>
      <App />
    </AppDataProvider>
  );
};

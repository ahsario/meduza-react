import React from 'react';
import Header from './components/header/header';
import HistoryPage from './components/pages/history';
import KoronavirusPage from './components/pages/koronavirus';
import NewsPage from './components/pages/news';
import PlayPage from './components/pages/play';
import PodcastsPage from './components/pages/podcasts';
import ParsingPage from './components/pages/razbor';
import ShapitoPage from './components/pages/shapito';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header/>
        <Route path='/news/' component={NewsPage}/>
        <Route path='/history/' component={HistoryPage}/>
        <Route path='/parsing/' component={ParsingPage}/>
        <Route path='/plays/' component={PlayPage}/>
        <Route path='/shapito/' component={ShapitoPage}/>
        <Route path='/podcasts/' component={PodcastsPage}/>
        <Route path='/coronavirus/' component={KoronavirusPage}/>
      </div>
    </Router>
  )
}

export default App;

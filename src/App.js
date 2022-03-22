import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AskQuoteFormPage from './pages/AskQuoteFormPage/AskQuoteFormPage';
/* import Home from './pages/Home/Home'; */

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' default element={<Home />} /> */}
        <Route
          path='/demander-un-devis'
          default
          element={<AskQuoteFormPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

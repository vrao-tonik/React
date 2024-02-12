import React from 'react';
import './App.css';
import TopNavbar from './Pages/TopNavbar';
import CarCards from './Pages/CarCards';
import { SubmissionProvider } from './helpers/SubmissionContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmittedDataPage from './Pages/SubmittedDataPage';

function App() {
  return (
    <div className="App">
      <Router>
        <SubmissionProvider>
          <div>
            <TopNavbar />
            <Routes>
               <Route path="/" element={<CarCards />} />
              <Route path="/page2" element={<SubmittedDataPage />} />
              
            </Routes>
          </div>
        </SubmissionProvider>
      </Router>
    </div>
  );
}

export default App;

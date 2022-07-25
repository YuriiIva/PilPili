import Contacts from 'components/Contacts/Contacts';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <Main /> */}
    </div>
  );
};

export default App;

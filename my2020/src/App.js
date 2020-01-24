import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Select from './Components/Select';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const items = ["Ala ma kota", "Widro cebuli", "Robaki do paki"];
  return (
    <div className="badge-info p-2 text-lg-center">
      <Select items={items} />
    </div>
  );
}

export default App;

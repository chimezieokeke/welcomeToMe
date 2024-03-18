import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Chimezie Okeke LinkedIn' },
    { id: 2, name: 'Chimezie Okeke Basketball Profile' },
    { id: 3, name: 'Chimezie Okeke Programming Channel' }
  ]);

  const handleItemClick = (item) => {
    console.log('Item clicked in App:', item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is assignment #1</h1>
      </header>
      <div className="item-list-container">
        <ItemList items={items} onItemClick={handleItemClick} />
      </div>
    </div>
  );DOMException
}

export default App;

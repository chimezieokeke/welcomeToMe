import React from 'react';
import './ItemList.css';

function ItemList({ items, onItemClick }) {
  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item.id} className="item">
          {item.id === 1 ? (
            <a href="https://www.linkedin.com/in/chimezieokeke/" onClick={() => onItemClick(item)}>
              {item.name}
            </a>
          ) : item.id === 2 ? (
            <a href="https://morehouseathletics.com/sports/mens-basketball/roster/chimezie-okeke/3579" onClick={() => onItemClick(item)}>
              {item.name}
            </a>
          ) : item.id === 3 ? (
            <a href="https://www.youtube.com/channel/UC00Pj166p47amPEOmmje6vQ" onClick={() => onItemClick(item)}>
              {item.name}
            </a>
          ) : (
            <a href={`#${item.id}`} onClick={() => onItemClick(item)}>
              {item.name}
            </a>          
          )}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;

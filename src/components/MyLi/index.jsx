import React from 'react';
import './style.css'; // Если нужен CSS, создай этот файл

function MyLi({ text, index, clickVariant }) {
  return (
    <li onClick={() => clickVariant(index)}>
      {text}
    </li>
  );
}

export default MyLi;
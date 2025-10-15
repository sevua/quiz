import React from 'react';
import './style.css'; // Если нужен CSS, создай этот файл

function MyButton({text, link}) {
  return (
    <a href={link} className="my-button">
      {text}! asdfasd
    </a>
  );
}

export default MyButton;
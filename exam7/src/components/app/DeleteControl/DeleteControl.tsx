import React from 'react';

interface Item {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface DeleteControlProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const DeleteControl: React.FC<DeleteControlProps> = ({ items, setItems }) => (
  <ul>
    {items.map(({ id, title, price, stock }) => (
      <li key={id}>
        {title} - ${price} - {stock} in stock
        <button onClick={() => setItems(items => items.filter(item => item.id !== id))}>
          delete
        </button>
      </li>
    ))}
  </ul>
);
export default DeleteControl;


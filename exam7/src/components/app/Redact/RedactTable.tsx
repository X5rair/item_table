import React, { useState } from 'react';
import ModalWindow from '../Modal/ModalWindow';

interface Item {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface RedactTableProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const RedactTable: React.FC<RedactTableProps> = ({ items, setItems }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const handleEditClick = (item: Item) => setSelectedItem(item);
  const handleSave = (updatedItem: Item) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setSelectedItem(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>$</th>
            <th>stock</th>
            <th>wtd</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button onClick={() => handleEditClick(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <ModalWindow
          isOpen={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          onSave={handleSave}
          item={selectedItem}
        />
      )}
    </div>
  );
};
export default RedactTable;
import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
  item: Item | null;
}
const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, onClose, onSave, item }) => {
  const [formData, setFormData] = useState<Item>({
    id: 0,
    title: '',
    price: 0,
    stock: 0,
  });
  useEffect(() => {
    if (item) setFormData(item);
  }, [item]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' || name === 'stock' ? +value : value }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {['title', 'price', 'stock'].map(field => (
          <input
            key={field}
            type={field === 'price' || field === 'stock' ? 'number' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field as keyof Item]}
            onChange={handleChange}
            min={0}
          />
        ))}
        <button onClick={() => onSave(formData)}>save</button>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default ModalWindow;

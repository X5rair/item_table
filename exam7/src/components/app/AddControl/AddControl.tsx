import React, { useReducer } from 'react';

interface Item {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface AddControlProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

type Action =
  | { type: 'set_field'; field: 'title' | 'price' | 'stock'; value: string }
  | { type: 'add_item' };

const initialState: State = { title: '', price: 0, stock: 0 };
const reducer = (state: State, action: Action): State => {
  if (action.type === 'set_field') {
    return {
      ...state,
      [action.field]: action.field === 'price' || action.field === 'stock'
        ? +action.value
        : action.value
    };
  }
  return initialState;
};

const InputField: React.FC<{
  type: 'text' | 'number';
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
}> = props => <input {...props} />;

const AddControl: React.FC<AddControlProps> = ({ items, setItems }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: 'title' | 'price' | 'stock') => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'set_field', field, value: e.target.value });
  };

  const addItem = () => {
    const { title, price, stock } = state;
    if (!title.trim() || items.some(item => item.title === title)) return;

    setItems(prevItems => [
      ...prevItems,
      { id: items.length ? Math.max(...items.map(item => item.id)) + 1 : 1, title, price, stock }
    ]);
    dispatch({ type: 'add_item' });
  };

  return (
    <div>
      <InputField
        type="text"
        placeholder="Title"
        value={state.title}
        onChange={handleChange('title')}
      />
      <InputField
        type="number"
        placeholder="Price"
        value={state.price}
        onChange={handleChange('price')}
        min={0}
      />
      <InputField
        type="number"
        placeholder="Stock"
        value={state.stock}
        onChange={handleChange('stock')}
        min={0}
      />
      <button onClick={addItem}>add</button>
    </div>
  );
};

export default AddControl;

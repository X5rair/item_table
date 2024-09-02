import React, { useState } from 'react';
import AddControl from './components/app/AddControl/AddControl';
import DeleteControl from './components/app/DeleteControl/DeleteControl';
import RedactTable from './components/app/Redact/RedactTable';
import ItemsSort from './components/app/ItemsSort/ItemsSort'

const App: React.FC = () => {
  const [items, setItems] = useState<items[]>([]);
  React.useEffect(() => {
    console.log('Items updated:', items);
  }, [items]);

  return (
    <div>
      <AddControl items={items} setItems={setItems} />
      <DeleteControl items={items} setItems={setItems} />
      <RedactTable items={items} setItems={setItems} />
    </div>
  );
};
export default App;


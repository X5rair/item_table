# 📦 Item Table – Product Management Interface

This project is a lightweight product management table that allows users to **add, edit, delete, sort, and manage item quantities** in an intuitive UI.
It is designed to be clean, responsive, and easy to use.

---

## 🚀 Features

### ✅ Product Table

* Display products in a structured table
* Decrease quantity with a “–” button
* Automatically disable the button when quantity reaches **0**
* Show “Not available” when the item is out of stock

### 📝 Add New Products

* Form for adding items to the table
* Prevents duplicates using:

  * modal confirmation, or
  * unique identifiers

### ✏️ Edit Items

* Each item has an **Edit** button
* Opens a custom modal window for:

  * updating name
  * updating quantity
  * updating price

### 🗑️ Deleted Items Table

* A separate table storing removed products
* Allows easy tracking of deleted items

### 🔽 Sorting System

Click any column header to sort:

* Ascending / descending toggle
* Sorting arrows for visual feedback

### 🎛️ Custom Modal Windows

* Used for adding, editing, deleting
* Smooth UI experience without default browser alerts

---

## 📁 Project Structure

```
item_table/
└── src/
    ├── css/
    │   ├── styles.scss        # Main SCSS file with variables & mixins
    │   └── components/        # Divided SCSS partials
    ├── js/
    │   ├── main.js            # Core UI logic
    │   ├── table.js           # Table rendering & sorting
    │   ├── modal.js           # Custom modal system
    │   └── form.js            # Add/Edit form handling
    └── index.html             # Entry point
```

---

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/item_table.git
cd item_table
```

Install dependencies (if SCSS compiler is used):

```bash
npm install
```

Run SCSS build:

```bash
npm run build
```

(or your configured script)

---

## ▶️ Running the Project

Simply open:

```
index.html
```

in any browser.
No backend is required — everything works on the client side.

---

## 💡 How It Works

### 📉 Decreasing Quantity

The “–” button calls:

```js
decreaseQuantity(itemId)
```

When quantity hits **0**, the button becomes disabled and the status updates to:

```
Not available
```

### 🧩 Sorting Logic

Clicking a column header triggers:

```js
sortTable(column, direction)
```

Sorting mode toggles on each click.

### 📝 Editing via Modal

The modal system handles:

```js
openModal('edit', item)
saveChanges(itemId, updatedData)
```

---

## 📌 Example Usage

```js
addItem({
  name: "Laptop",
  price: 1500,
  quantity: 3
});

editItem(1, { price: 1200 });

removeItem(2);  // moves it to Deleted Items table
```

---

## 🤝 Contributing

Contributions are welcome!
You can improve UI, add animations, or extend table filters.

---

## 📄 License

MIT License
Скажи только — какой стиль нужен?

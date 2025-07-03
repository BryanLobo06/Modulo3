# Product Management App

This is a simple web application for managing products (CRUD: Create, Read, Update, Delete) using a JSON file as a database and `json-server` as a fake REST API.

## Features
- List all products
- Add new products
- Update product name and price
- Delete products

## Technologies Used
- HTML, CSS, JavaScript (Vanilla)
- json-server for the backend

## File Structure
- `index.html`: Main web page
- `styles.css`: Styles for the app
- `app.js`: JavaScript logic for interacting with the API
- `db.json`: JSON file acting as the database

## Getting Started

### 1. Install Dependencies
You need Node.js installed. Then, install `json-server` globally (if you haven't already):

```bash
npm install -g json-server
```

### 2. Start the Backend
Run the following command in the project directory:

```bash
json-server db.json
```

This will start a REST API at `http://localhost:3000/`.

### 3. Open the App
Open `index.html` in your browser. You can now:
- View the list of products
- Add a new product (enter name and price, then click Add)
- Update a product (click Update, change name and/or price)
- Delete a product (click Delete)

## Notes
- The backend expects the collection to be called `products` in `db.json`.
- The frontend expects the API endpoint to be `/products`.
- Make sure the backend is running before using the app.

## Example `db.json`
```json
{
  "products": [
    { "id": "1", "name": "Monitor", "price": 30000 },
    { "id": "2", "name": "Keyboard", "price": 15000 }
  ]
}
```
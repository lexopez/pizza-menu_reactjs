const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        <li className="pizza">
          <img src={pizzaData[0].photoName} alt={pizzaData[0].name} />
          <div>
            <h3>{pizzaData[0].name}</h3>
            <p>{pizzaData[0].ingredients}</p>
            <span>
              {pizzaData[0].soldOut ? "SOLD OUT" : pizzaData[0].price}
            </span>
          </div>
        </li>
        <li className="pizza">
          <img src={pizzaData[1].photoName} alt={pizzaData[1].name} />
          <div>
            <h3>{pizzaData[1].name}</h3>
            <p>{pizzaData[1].ingredients}</p>
            <span>
              {pizzaData[1].soldOut ? "SOLD OUT" : pizzaData[1].price}
            </span>
          </div>
        </li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <p>We're open from this our to this our. Come visit us or order.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default App;

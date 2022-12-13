import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6398a4ddfe03352a94d9819e.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => {
            setCartOpened(false);
          }}
          items={cartItems}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" name="" id="" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((sneaker) => (
            <Card
              title={sneaker.title}
              price={sneaker.price}
              imageUrl={sneaker.imageUrl}
              // onFavorite={() => console.log(sneaker)}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

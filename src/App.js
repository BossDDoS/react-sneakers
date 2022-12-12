import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

let arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12998,
    imageUrl: "img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "img/sneakers/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" name="" id="" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {arr.map((sneaker) => (
            <Card
              title={sneaker.title}
              price={sneaker.price}
              imageUrl={sneaker.imageUrl}
              onClick={() => console.log(sneaker)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

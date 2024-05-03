import './App.css';

function App() {

  const products = [
    { id: 1, info: { name: "사과", price: 1000 } },
    { id: 2, info: { name: "바나나", price: 1500 } },
    { id: 3, info: { name: "오렌지", price: 2000 } },
    { id: 4, info: { name: "포도", price: 2500 } },
  ];



  return (
    <div className="App">
      <h1>상품 목록</h1>
      <ul>
        { products.map(item => {
            return <li key={item.id}>{item.info.name} - {item.info.price}</li>
        }) }
      </ul>
      
    </div>
  );
}

export default App;
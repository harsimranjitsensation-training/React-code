import Student from "./components/Student";
import products from "./data/products";

function App() {
  let arr = ["A", "B", "C", "D", "E"];
  
  
  return (
    <>

      <Student name="Abc" age="23" />   

      {/* list rendering */}
      {arr.map((letter) => (
        <h1>{letter}</h1>
      ))}

      {products.map((product) => (
        
        <div>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Description: {product.desc}</p>
        </div>
      ))}


    </>
  )
}

export default App;
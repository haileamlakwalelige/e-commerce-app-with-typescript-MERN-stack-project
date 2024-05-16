import { sampleProducts } from "./data";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header>Header</header>
      <main className="w-screen flex flex-col justify-center items-center">
        <ul>
          {
            sampleProducts.map((product)=>(
              <li key={product.slug} className="py-3 flex gap-2 flex-col">
                <img src={product.image} alt={product.name} className="max-h-[300px] max-w-[300px] "/>
                <h1>{product.name}</h1>
                <p>${product.price}</p>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}
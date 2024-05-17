import { Link } from "react-router-dom";
import { sampleProducts } from "../data";

export default function Home() {
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    sampleProducts.map((product) => (
                        <Link to={'/product/  ' + product.slug}>
                            <li key={product.slug} className="py-3 flex gap-2 flex-col">
                                <img src={product.image} alt={product.name} className="max-h-[300px] max-w-[300px] " />
                                <h1 className="text-xl font-bold font-mono">{product.name}</h1>
                                <p className="text-slate-800">${product.price}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

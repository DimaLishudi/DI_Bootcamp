import {Link} from "react-router-dom"

export function Shop() {
    return (
        <>
        <h1>
            Shop
        </h1>

        <div className="shopProducts">
            {
                Array.from(Array(5).keys()).map((value) => 
                    <Link to={"/products/" + value} key={value}>Product {value}</Link>
                )
            }
        </div>
        </>
    )
}

export default Shop;

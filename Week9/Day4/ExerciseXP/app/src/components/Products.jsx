import {useEffect, useState} from "react"
import {useParams, Link, useNavigate} from "react-router-dom";

const api = "http://localhost:5678/posts/"

export function Product(props) {
    const params = useParams();
    const nav = useNavigate();
    const id = parseInt(params.id);

    const [item, setItem] = useState({});
    console.log(item);
    useEffect(() => {
        fetch(api + id)
        .then(data => data.json())
        .then(setItem)
        .catch(err => {
            setItem(null);
            console.log(err);
        });
    }, []);
    return (
        <>
            <h2>Product #{params.id}</h2>
            {
                (item !== null)
                ?
                    <>
                    <h3>{item?.title}</h3>
                    <h3>{item?.contents}</h3>
                    </>
                    : <h3> Product {params.id} not found</h3>
                
            }
            <button onClick={() => nav("/shop")}>Back to the shop</button>
            {/* <h3>{price} $</h3> */}
        </>
    );
}

export default Product;
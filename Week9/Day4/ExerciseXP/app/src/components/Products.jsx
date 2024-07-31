import {useParams, Link, useNavigate} from "react-router-dom";

export function Product(props) {
    const params = useParams();
    const nav = useNavigate();
    const id = parseInt(params.id);
    console.log(params);
    console.log(props);
    return (
        <>
            <h2>product #{params.id}</h2>
            <button onClick={() => nav("/products/" + (id + 1))}>Next</button>
            {/* <h3>{price} $</h3> */}
        </>
    );
}

export default Product;
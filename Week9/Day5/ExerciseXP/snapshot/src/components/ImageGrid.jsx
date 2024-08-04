import react from "react";
import { pexels_api_key } from "../config";


// I decided to use manual fetching instead of pexels package to practice
export function ImageGrid({category}) {
    const [images, setImages] = react.useState([]);

    const url = new URL("https://api.pexels.com/v1/search", );
    url.searchParams.append("query", category);
    url.searchParams.append("orientation", "landscape");
    url.searchParams.append("size", "small");
    url.searchParams.append("per_page", 40);

    react.useEffect(() => {
        fetch(url, {
            headers: {
                Authorization : pexels_api_key
            }
        })
        .then(data => data.json())
        .then(data => setImages([...data.photos]))
        .catch(console.log);
    }, []);

    return (
        <>
            <h2>{category} Pictures</h2>
            <div className="imageGrid">{
                images?.map((image, index) => (
                    <img key={"img " + index} src={image.src.medium} alt="img" />
                ))
            }
            </div>
        </>
    )
}

export default ImageGrid;
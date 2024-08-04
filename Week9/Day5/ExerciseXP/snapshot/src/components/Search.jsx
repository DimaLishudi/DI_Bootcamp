
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { base_categories } from '../config';


// const element = <FontAwesomeIcon icon={faCoffee} />


export function Search() {
    const nav = useNavigate()
    function toSearchResults(event) {
        event.preventDefault();
        const category = event.target.search.value;
        if (category) {
            nav("/search/" + category);
        }
    }

    return (
        <>
            <h1>Snapshot</h1>
            <form onSubmit={toSearchResults}>
                <input type="search" name="search" id="search" placeholder="Search..."/>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
            </form>
            <div className="grid">
            {
                base_categories.map((category, index) => (
                    <button key={"btn " + index} onClick={() => nav("/" + category)}> 
                        {category}
                    </button>
                ))
            }
            </div>
        </>
    )
}

export default Search;
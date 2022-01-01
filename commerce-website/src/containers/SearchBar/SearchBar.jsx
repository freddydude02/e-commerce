import styles from "./SearchBar.module.scss";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchTerm";

const SearchBar = () => {
    const [currentSearch, setCurrentSearch] = useState("");
    const data = useContext(SearchContext);

    return (
        <div>
            <input
                type="text"
                onInput={(e) => setCurrentSearch(e.target.value)}
            ></input>
            <Button
                label={"Search"}
                clickHandler={() => data.setSearchTerm(currentSearch)}
            ></Button>
        </div>
    );
};
export default SearchBar;

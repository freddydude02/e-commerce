import { useState, createContext } from "react";
export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const data = { searchTerm, setSearchTerm };
    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};
export default SearchProvider;

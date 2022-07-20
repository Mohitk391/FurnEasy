import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        async function fetchProducts () {
        try{
            const response = await axios.get("/api/products");
            setProducts(response.data.products);
        }
        catch(error){
            console.error(error);
        }
        }
        fetchProducts();
    },[]);

    return (<ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
    );
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider};
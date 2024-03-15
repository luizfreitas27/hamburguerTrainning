import React, { useEffect } from "react";
import { IProducts } from "../interfaces/interfaces";
import { api } from "../services/api";

interface IProductsContext{
    productsList: IProducts[];
}

const productsContext = React.createContext({} as IProductsContext);

export const ProductsProvider = ({ children } : {
    children: React.ReactNode;
}) => {
    const [productsList, setProductsList] = React.useState<IProducts[]>([]);
    console.log(productsList);

    useEffect(() => {
        const loadProducts = async() => {
            try {
               const { data } = await api.get<IProducts[]>("/products");
               setProductsList(data);
            } catch (error) {
                console.log(error);
            }
        }

        loadProducts();
    }, [])

    return(
        <productsContext.Provider value={{ productsList }}>
            {children}
        </productsContext.Provider>
    )
}
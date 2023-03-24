import { createContext, useState, useEffect } from 'react';
import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  // useEffect(() => {addCollectionAndDocuments('categories',SHOP_DATA)}, []);
  useEffect(() => {
    const getCatoriesMap = async() => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    }
    getCatoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

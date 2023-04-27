import "./App.css";
import { useReducer } from "react";
import { useEffect } from "react";
import Products from "./components/products/Products";
import AddProduct from './components/add-product/Add-Product'
import AddedProducts from "./components/added-prodect/Added-Product";
const productItemReducer = (state, action) => {
  if (action.type === DELETE) {
    return {
      ...state,
      products: action.newProducts
    }
  }
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      products: [...state.products, action.data]
    }
  } 
}
const DELETE = 'DELETE'
const ADD_PRODUCT = 'ADD_PRODUCT'
function App() {
  const productsFromLocal = localStorage.getItem('Products')
  const products = productsFromLocal ? JSON.parse(productsFromLocal) : [
    {
      image: "https://thumb.tildacdn.com/tild3133-3533-4164-a637-666537633266/-/resize/552x/-/format/webp/image_9.png",
      title: "Product 1",
      price: 1,
      id: 1,
      count: 1

    },
    {
      image: "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg",
      title: "Product 2",
      price: 2,
      id: 2,
      count: 1

    },
    {
      image: "https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg",
      title: "Product 3",
      price: 3,
      id: 3,
      count: 1


    }, {
      image: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
      title: "Product 4",
      price: 4,
      id: 4,
      count: 1

    }
  ]
  const [productItem, dispatchProductItem] = useReducer(productItemReducer, { products: products })
  const addNewProductHandler = (data) => {
    dispatchProductItem({type:ADD_PRODUCT, data:data});
  };
  function deleteProject(id) {
    const newProducts = productItem.products.filter((el) => el.id !== id)
    dispatchProductItem({ type: DELETE, newProducts: newProducts })
  }
  useEffect(() => {
    localStorage.setItem('Products', JSON.stringify(productItem.products));
  }, [productItem.products]);
  return (
    <div className="App">
      <AddProduct onSubmit={addNewProductHandler}></AddProduct>
      <AddedProducts addedProducts={productItem.products}></AddedProducts>
      <Products onClick={deleteProject} products={productItem.products}></Products>
    </div>
  );
}

export default App;
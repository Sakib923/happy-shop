import React from "react";
import productData from "../../products.json";
import { useState } from "react";
import SelectedCategory from "../selectedCategory/SelectedCategory";
import { Link } from "react-router-dom";

const title = <h2>Search Your One From <span>Thousand</span> of Products</h2>;
const desc = "We have the largest collection of products.";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
    
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const searchProduct = (e) => {

        const searchItem = e.target.value;
        setSearchInput(searchItem);

        console.log(productData);
        // console.log(searchItem.toLowerCase());
        console.log("=>");
        console.log(productData.filter((product) => product.name.toLowerCase().includes(searchItem.toLowerCase())))

        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredProducts(filtered);
        console.log(filtered);
    }

  return (
  <div className="banner-section style-4">
    <div className="container">
        <div className="banner-content">
            {title}
            <form>
                <SelectedCategory select={"all"} />
                <input type="text" name="search" placeholder="Search Your Product" value={searchInput} onChange={searchProduct} />
            <button type="submit">
                <i className="icofont-search"></i>
            </button>
            </form>

            <p>{desc}</p>
            <ul className="lab-ul">
                {searchInput && filteredProducts.map((product, i) => (
                    <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        {/* <p>{product.name}</p> */}
                    </li>
                ))}
            </ul>


        </div>
    </div>

  </div>
  );
};

export default Banner;

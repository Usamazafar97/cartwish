import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import rocket from "../../assets/rocket.png";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        <LinkWithIcon
          title="electronics"
          link="products?catergory=electronics"
          emoji={rocket}
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;

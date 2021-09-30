import { useContext, useState } from "react";
import Card from "../components/Product/Card";
import { Link } from "react-router-dom";

import ProductContext from "../context/productContext";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ProductPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const a = useContext(ProductContext);

  const handleClick = (e) => {
    a.setClicked(e);
  };

  return (
    <>
      <div className="text-center my-2">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="light" caret>
            Select Category
          </DropdownToggle>
          <DropdownMenu>
            {a.cat.map((item) => {
              return <DropdownItem>{item.name}</DropdownItem>;
            })}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center">
          {a.state.map((item) => (
            <div
              onClick={() => handleClick(item)}
              className="card col-md-3 p-2 m-4"
            >
              <Link to="/product-details">
                <Card
                  key={item.id}
                  name={item.name}
                  modal={item.model}
                  price={item.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;

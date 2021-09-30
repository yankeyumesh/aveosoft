import productContext from "./productContext";

import { useState, useEffect } from "react";
import axios from "axios";

const ProductState = (props) => {
  const [state, setstate] = useState([]);
  const [clicked, setClicked] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [cat, setcat] = useState([]);

  useEffect(() => {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/products")
      .then((response) => {
        setstate(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/categories")
      .then((response) => {
        setcat(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsFetching(false));
  }, []);

  if (isFetching) {
    return null;
  }

  return (
    <productContext.Provider value={{ state, clicked, setClicked, cat }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;

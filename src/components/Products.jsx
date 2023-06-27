import React, { Fragment, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { getProducts } from "../features/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: listProducts, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading === "loading")
    return (
      <Alert key="primary" variant="primary">
        loading...
      </Alert>
    );

  if (loading === "error")
    return (
      <Alert key="danger" variant="danger">
        loading failed!
      </Alert>
    );

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const cards = listProducts.map((product) => {
    return (
      <div className="col-md-3" key={product.id}>
        <Card style={{ height: "300px", width: "18rem", marginBottom: "20px" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "120px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price} $</Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <Button variant="primary" onClick={() => handleAdd(product)}>
                Add Cart
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <Fragment>
      <h1>Products Dashboard</h1>
      <div className="row">{cards}</div>
    </Fragment>
  );
};

export default Products;

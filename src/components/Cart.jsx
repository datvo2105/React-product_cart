import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const cartList = cartProducts.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>
          <img src={product.image} width="50px" height="50px" alt="" />
        </td>
        <td>{product.price}</td>
        <td>
          <Button variant="danger" onClick={() => handleRemove(product.id)}>
            Remove Cart
          </Button>
        </td>
      </tr>
    );
  });
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Fragment>
      <Table striped bordered hover variant="light">
        <thead className="mt-5">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{cartList}</tbody>
      </Table>
    </Fragment>
  );
};
export default Cart;

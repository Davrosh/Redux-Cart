import React, { useEffect } from "react";
import CartItem from "./CartItem";

import { connect } from "react-redux";

import { clearCart, getTotals, requestDisplayItems } from "../actions";

const CartContainer = ({ loading, error, dispatch, total, cart = [] }) => {
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(requestDisplayItems());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="cart">
        <header className="cart__header">
          <h2>loading...</h2>
        </header>
      </section>
    );
  }

  if (error) {
    return (
      <section className="cart">
        <header className="cart__header">
          <h2>error!</h2>
        </header>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header className="cart__header">
          <h2 >your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header className="cart__header">
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article className="cart__container">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer className="cart__footer">
        <hr />
        <div className="cart__total">
          <h4>
            total <span className="cart__amount">${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            return dispatch(clearCart());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(CartContainer);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PriceContainer from "../../components/PriceContainer";
import { basketAddItemAction } from "../../store/reducer/BasketReducer";
import s from "./style.module.css";

export default function DescriptionProductPage() {
  const { id } = useParams();
  const products = useSelector(({ products }) => products);
  const dispatch = useDispatch();

  const render = () => {
    if (products.length === 0) {
      return <p>Loading</p>;
    } else {
      const { title, image, discont_price, price, description } = products.find(
        (item) => item.id === +id
      );

      const img = `http://localhost:3333/${image}`;

      return (
        <>
          <h1>{title}</h1>
          <div className={s.item}>
            <img src={img} alt={title} />
            <div className={s.content}>
              <div className={s.content_top}>
                <PriceContainer
                  price={price}
                  discont_price={discont_price}
                  font={"descr"}
                />
                <button onClick={() => dispatch(basketAddItemAction(+id))}>
                  To cart
                </button>
              </div>
              <div className={s.content_bottom}>
                <h3>Description</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div className={s.container}>{render()}</div>;
}

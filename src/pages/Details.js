import { useParams } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
export default function Details({ items, fourItems,isUser }) {
  const id = useParams();

  return (
    <>
      {items.map((item) => {
        if (item.id == id.id) {
          return (
            <div className="details">
              <div className="row">
                <img src={item.imageURL} className="imgDet" alt="" />
                <div className="col-lg-6 col-md-12 mb-4">
                  <div className="pName">{item.name}</div>

                  <p className="pPrice">{item.price} EGP</p>
                  <p className="pCat">{item.category}</p>
                  <p className="stock">
                    AVAILABILTY :
                    <span className="st">
                      {item.is_in_inventory === true
                        ? " In stock"
                        : " Out of stock"}
                    </span>
                  </p>
                  <div className="offers">
                    <p> available offers</p>
                    <div className="offersList">
                      <div className="offer">
                        GET 10% INSTANT OFF ON PREPAID ORDERS ABOVE 999 EGP
                      </div>
                      <div className="offer">
                        GET 5% INSTANT OFF ON PREPAID ORDERS ABOVE 499 EGP
                      </div>
                    </div>
                  </div>
                 {isUser == true && (  <div className="btns">
                    <i class="bi bi-suit-heart m-2"></i>
                    <Button className="m-2 ">
                      <i className="bi bi-bag "></i> Add to cart
                    </Button>
                    <Button className="m-2 ">BUY now</Button>
                  </div>)}
                </div>
                <div className="products">
                  {fourItems.map((item) => (
                    <div className="home-card">
                      <img src={item.imageURL} className="img" />
                      <div className="home-card-content">
                        <div>{item.name}</div>
                        <div className="desc">{item.desc}</div>
                        <div> {item.price} EGP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

import { useParams } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
export default function Details({ items }) {
  const id = useParams();

  return (
    <>
      {items.map((item) => {
        if (item.id == id.id) {
          return (
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                  <img
                    src={item.image}
                    className="img w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                  <div className="pName">{item.name}</div>
                  <p className="pDesc">
                    <strong>Description: </strong>
                    {item.desc}
                  </p>
                  <p className="pPrice">
                    <strong>Price: </strong>
                    {item.price} EG
                  </p>
                  <p className="pCat">
                    <strong>Category: </strong>
                    {item.category}
                  </p>
                  <Stack gap={3}>
                    <Button variant="dark" className="p-2">
                      <i className="bi bi-bag "></i> Add to cart
                    </Button>

                    <Button className="p-2" variant="danger">
                      <i className="bi bi-suit-heart-fill "></i> Add to wish
                      list
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

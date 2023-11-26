// import React from 'react'

import { useParams } from "react-router-dom";
import { useGetProduct } from "../components/API/useGetProduct";
import { baseUrl } from "../components/API/httpserver";

export default function SinglePage() {
  const { id } = useParams();
  const URL = `${baseUrl}/movies/${id}`;
  const [product, isload] = useGetProduct(URL);
  if (isload) {
    return <h1 className="text-white"> loading ...</h1>;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              product.image.original == undefined
                ? "https://placehold.co/600x400"
                : product?.image.original
            }
            alt="sora"
          />
        </div>
        <div className="col-md-8">
          <h1 className="text-white">{product.name}</h1>
          <p className="text-white fs-4"> category : {product.category}</p>
          <span className="text-danger">{product.genres.join(" | ")}</span>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: product.summary }}
          ></p>
          <button className="btn btn-outline-danger">
            <a href={product.url}>go To Show</a>
          </button>
        </div>
      </div>
    </div>
  );
}

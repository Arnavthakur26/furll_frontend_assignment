"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductProp } from "@/types/types";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const getProducts = async (page: number): Promise<ProductsResponse> => {
  const res = await fetch(
    `https://api.furrl.in/api/v1/vibe/getVibeRelate?visitId=&page=${page}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vibe: "#NightFlea",
      }),
    }
  );
  return res.json();
};

interface ProductsResponse {
  collectionData: {
    product_ids: ProductProp[];
  };
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(page);
      setProducts((prev) => [...prev, ...data.collectionData[0].product_ids]);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={products.length} //This is important field to render the next data
      next={handleScroll}
      hasMore={true}
      loader={<Loader />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="grid grid-cols-2" onScroll={handleScroll}>
        {products.map((product: ProductProp) => {
          return <ProductCard key={product.productId} {...product} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Products;

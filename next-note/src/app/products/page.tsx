import { getProducts } from "@/service/products";
import Link from "next/link";
import React from "react";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";
// export const revalidate = 0;

const page = async () => {
  // throw new Error();
  const products = await getProducts();
  return (
    <div>
      <h1>제품 페이지</h1>
      <Image src={clothesImage} alt="옷" priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
};

export default page;

import GoProductBtn from "@/components/GoProductBtn";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

// 동적으로 메타데이터 사용
export function generateMetadata({ params }: Props) {
  return {
    title: `제품 ${params.slug}`,
  };
}

// 만약 동적 라우팅중 특정 라우팅은 정적 페이지(SSG)로 만들고 싶을때 사용
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((item) => ({
    slug: item.id,
  }));
}
// 동적라우팅에서 props 를 받아서 처리할땐 기본적으로 SSR 처리됨
const page = async ({ params }: Props) => {
  const product = await getProduct(params.slug);
  if (!product) {
    redirect("/products");
    //notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.image}
        width={400}
        height={400}
      />
      <GoProductBtn />
    </>
  );
};

export default page;

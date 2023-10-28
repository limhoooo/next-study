import Counter from "@/components/Counter";
import Image from "next/image";
import React from "react";

const page = () => {
  console.log("안녕?");

  return (
    <div>
      <h1>홈페이지다!! VER4444444</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default page;

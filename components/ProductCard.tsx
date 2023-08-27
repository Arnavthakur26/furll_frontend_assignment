import React from "react";
import Image from "next/image";
import shareIcon from "../public/share_icon.svg";
import wishlistIcon from "../public/bookmark_white.svg";
import { ProductProp } from "@/types/types";
import Link from "next/link";
import { RWebShare } from "react-web-share";

const ProductCard = (props: ProductProp) => {
  return (
    <div className="mt-4 mx-0.5">
      <div className="relative inline-block">
        <Link href={`/${props.productId}`}>
          <Image
            src={props.imageUrl}
            alt="product-image"
            width={190}
            height={190}
            className="h-[190px]"
          />
        </Link>
        <div className="flex flex-col absolute bottom-0 right-0 gap-2 mb-3">
          <RWebShare
            data={{
              text: props.title,
              url: `http://localhost:3000/${props.productId}`,
              title: props.title,
            }}
          >
            <div className="share-icon inline-block bg-[#4b5563] rounded-full p-1.5 self-end mr-2">
              <Image src={shareIcon} alt="share" width={18} height={18} />
            </div>
          </RWebShare>
          <div className="share-icon inline-block bg-[#4b5563] rounded-full p-1.5 self-end mr-2">
            <Image src={wishlistIcon} alt="share" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="product-meta mx-1">
        <div className="font-light text-[0.65rem] text-[#5c6b6b] mt-2"></div>
        <div className="text-[0.75rem] mt-0.5 ">
          {props.title.length > 30
            ? props.title.slice(0, 25) + "..."
            : props.title}
        </div>
        <div className="text-[0.65rem] flex gap-1 mt-0.5">
          <div>Rs. {props.furrlCheckoutPrice}</div>
          <div className="line-through">Rs. {props.furrlPrice}</div>
          <div className="text-[#7e59e7]">{props.furrlDiscountPercent} %</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

export const Avatar = ({ size = 'medium' }: Props) => {
  let sizeStyles: string=""
  switch (size) {
    case 'small':
      sizeStyles ="w-[24px] h-[24px]" ;
      break;
    case 'medium':
      sizeStyles ="w-[34px] h-[34px]" ;
      break;
    case 'large':
      sizeStyles ="w-[50px] h-[50px]" ;
      break;
    default:
      break;
  }

  return (
    <div className={clsx(sizeStyles,'bg-gray-400 rounded-full')}>
      {/* <Image
      src="/assets/images/avatar.webp"
      alt="Avatar de Bruce wayne"
      width={50}
      height={50}
      className="rounded-full"
      
      
      
      /> */}
      
    </div>
  );
};

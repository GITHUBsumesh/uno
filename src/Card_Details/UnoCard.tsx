import Image from "next/image";
import React from "react";
export interface CardProps {
  color?: string;
  value?: number;
  type?: string;
  back?: boolean;
  width: number;
  height: number;
}
const UnoCard = ({
  color,
  value,
  type,
  back = false,
  width,
  height,
}: CardProps) => {
  return (
    <>
      {type === "number" && color!=="Wild" && value ? (
        <Image
          src={`/Images/${color}- ${value}.svg`}
          alt={`${color}- ${value}`}
          width={width || 170}
          height={height || 280}
          priority
        />
      ) : type !== "number" && color!=="Wild" && !back  ? (
        <Image
          src={`Images/${color} ${type}.svg`}
          alt={`${color} ${type}`}
          width={width || 170}
          height={height || 280}
          priority
        />
      ) : color === "Wild" ? (
        <Image
          src={`Images/${type}.svg`}
          alt={`${type}`}
          width={width || 170}
          height={height || 280}
          priority
        />
      ) : back ? (
        <Image
          src="/Images/uno_back.png"
          alt={`uno_back`}
          width={width || 170}
          height={height || 280}
          priority
        />
      ) : (
        ""
      )}
    </>
  );
};

export default UnoCard;

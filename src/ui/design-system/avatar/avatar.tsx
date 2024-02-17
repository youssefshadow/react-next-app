import React from "react";

interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = 'medium' }: Props) => {
  let sizeLogo: number = 0;
  switch (size) {
    case 'very-small':
      sizeLogo = 20;
      break;
    case 'small':
      sizeLogo = 40;
      break;
    case 'medium':
      sizeLogo = 60;
      break;
    case 'large':
      sizeLogo = 80;
      break;
    default:
      break;
  }

  return (
    <div>
      <svg
        style={{ width: sizeLogo, height: sizeLogo }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        {/* Logo rond avec une icône de code source */}
        <circle cx="50" cy="50" r="45" fill="#6889A1" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#C53049" fontSize="20" fontWeight="bold">
          {"< / >"}
        </text>
      </svg>
    </div>
  );
};

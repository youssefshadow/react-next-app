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
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeLogo} height={sizeLogo} viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: sizeLogo, height: sizeLogo, borderRadius: "50%", backgroundColor: "#3498db" }}>
        
        <path d="M13.489,2.225a14.055,14.055,0,0,0-10.055,20c5.108,10.438,20.228,10.353,25.191-.142A14.058,14.058,0,0,0,13.489,2.225M15.179,6.4C20.365,7.437,25.715,9.06,25.9,9.649c.522,1.627.515,9.762-.009,10.752-.132.249-2.433-.025-4.189-.5l-.7-.19,0-.878c-.008-2.635-.276-5.13-.584-5.438-.353-.354-2.64-1.1-6.143-1.993l-2.229-.571-.029-.538a14.782,14.782,0,0,1,.467-4.213c.128-.159.635-.1,2.7.315m-7.53,5.155a25.251,25.251,0,0,1,3,.581l.36.1.061,1.982c.115,3.712.234,4.287,.954,4.609a68.947,68.947,0,0,0,7.29,2.137l.682.169-.02,1.314a12.388,12.388,0,0,1-.352,3.257L19.5,26l-.524-.061A90.469,90.469,0,0,1,7.77,23.2c-1.23-.412-1.528-.571-1.634-.874-.463-1.332-.461-9.877,0-10.746.107-.2.16-.2,1.51-.024" style={{ fill: "#fff", fillRule: "evenodd" }} />
      </svg>
    </div>
  );
};

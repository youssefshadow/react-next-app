import clsx from "clsx";

interface Props {
    size?: "small" |"medium" |"large" ;
    variant?:"primary" |"white";
}

export const Spinner = ({size="medium", variant="primary"}:Props) =>{
    let variantStyles:string="",sizeStyles:string="";
    switch (size) {
        case "small":
            sizeStyles = "w-5 h-5"
            break;
        case "medium"://default
            sizeStyles = "w-9 h-9"
            break;
        case "large":
            sizeStyles = "w-12 h-12"
            break;
    
        
            break;
    }

    switch (variant) {
        case "primary"://default
            variantStyles = ""
            break;
        case "white":
            variantStyles = ""
            break;
    }
    
    return (
        <svg
            className={clsx (sizeStyles,)}
            xmlns="http://www.w3.org/2000/svg"
           
            viewBox="0 0 24 24"
            >
            <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity="0.25"
            />
            <path
                fill="currentColor"
                d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                transform="rotate(360 12 12)"
            />
            </svg>

      );
      
      
          
      
      
};
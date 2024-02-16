import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";

interface Props {
    size?: "small" |"medium" |"large";
    variant?: "accent" |"secondary" |"outline" |"disabled"|"ico";
    icon?: IconProps;
    iconTheme?:"accent" |"secondary" |"gray";
    iconPosition?:"left" |"right";
    disabled?:boolean;
    isLoading?:boolean;
    children?:React.ReactNode;

}

export const Button  = ({
size ="medium",
variant ="accent",
icon,
iconTheme="accent",
iconPosition="right",
disabled,
isLoading,
children,
}: Props) => {
    let variantStyle:string = "",
    sizeStyle:string="",
    icoSize:number=0;

    switch (variant) {
        case "accent": //style par defaut
            variantStyle="bg-primary hover:bg-primary-400 text-white rounded"
            break;
        case "secondary": 
        variantStyle="bg-primary-200 hover:bg-primary-300/50 text-primary rounded"
            break;
        case "outline": 
            variantStyle="bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded "
            break;
        case "disabled": 
            variantStyle="bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
            break;
        case "ico": 
            if (iconTheme === "accent") {
                variantStyle="bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            if (iconTheme=== "secondary") {
                variantStyle="bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            }
            if (iconTheme==="gray") {
                variantStyle = "bg-gray-700 hover:bg-gray-600 text-white rounded-full"
            }
            break;
    
        default:
            break;
    }

    switch (size) {
        case "small":
            sizeStyle = `text-caption3 font-medium ${variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"}`;
            icoSize = 18;
            break;
        case "medium": //taille par défaut
            sizeStyle = `text-caption2 font-medium ${variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"}`;
            icoSize = 20;
            break;
        case "large":
            sizeStyle = `text-caption1 font-medium ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"}`;
            icoSize = 24;
            break;
        
        default:
            break;
    }
    return (<>
   <button
        type="button"
        className={clsx(variantStyle, icoSize, sizeStyle, "")}
        onClick={() => console.log('Clicked Button')}
        disabled={disabled}
        >
        {icon && variant === "ico" ? (
            <icon.icon size={icoSize} />
        ) : (
            <div className={clsx(icon && "flex items-center gap-1")}>

                {icon && iconPosition === "left"  &&(
                    <icon.icon size={icoSize} />
                )}
            {children}
                {icon && iconPosition === "right"  &&(
                    <icon.icon size={icoSize} />
                )}
            </div>
        )}
</button>

    
    </>);
}
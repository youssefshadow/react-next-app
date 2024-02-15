import clsx from "clsx";

interface Props {
    size?: "small" |"medium" |"large";
    variant?: "accent" |"secondary" |"outline" |"disabled"|"ico";
    icon?: any;
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
            variantStyle=""
            break;
    
        default:
            break;
    }

    switch (size) {
        case "small":
            sizeStyle="text-caption3 font-medium px-[14px] py-[12px]"
            break;
        case "medium"://taille par défaut
        sizeStyle="text-caption2 font-medium px-[18px] py-[15px]"
            break;
        case "large":
            sizeStyle="text-caption1 font-medium px-[22px] py-[18px]"
            break;
        
    
        default:
            break;
    }
    return (<>
    <button type="button"className={clsx(variantStyle,icoSize,sizeStyle,"")} onClick={()=>console.log('Clicked Button')}disabled={disabled}>
        {children}
    </button>
    
    </>);
}
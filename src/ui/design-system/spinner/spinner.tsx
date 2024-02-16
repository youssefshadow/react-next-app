interface Props {
    size?: "small" |"medium" |"large" ;
    variant?:"primary" |"white";
}

export const Spinner = ({size="medium", variant="primary"}:Props) =>{
    let variantStyles:string,sizeStyles:string;
    switch (size) {
        case "small":
            sizeStyles = ""
            break;
        case "medium":
            sizeStyles = ""
            break;
        case "large":
            sizeStyles = ""
            break;
    
        
            break;
    }
    return (
        <></>

    )
};
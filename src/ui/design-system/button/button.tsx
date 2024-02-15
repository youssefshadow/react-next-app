import clsx from "clsx";

interface Props {
    size?: "small" |"medium" |"large";
    variant?: "accent" |"secondary" |"outline" |"disable"|"ico";
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
    return (<>
    <button type="button"className={clsx("")} onClick={()=>console.log('Clicked Button')}disabled={disabled}>
        {children}
    </button>
    
    </>);
}
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { RiUser6Fill, RiUDiskFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
        <Seo title="Coding jungle" description="Description..."/>
       

        <div className="flex items-center gap-4 p-10">

              <Button>Accent</Button>
              <Button size="small" variant="secondary">Accent</Button>
              <Button size="small" variant="outline">Accent</Button>
              <Button size="small" variant="disabled" disabled>Accent</Button>
              <Button size="small" variant="ico" icon={{icon:RiUser6Fill}}/> 
              </div>



        <div className="flex items-center gap-4 p-10">
              <Button>Accent</Button>
              <Button variant="secondary">Accent</Button>
              <Button variant="outline">Accent</Button>
              <Button variant="disabled" disabled>Accent</Button>
              <Button  variant="ico" icon={{icon:RiUser6Fill}}/> 
        </div>
       
        <div className="flex items-center gap-4 p-10">

            <Button>Accent</Button>
            <Button size="large" variant="secondary">Accent</Button>
            <Button size="large" variant="outline">Accent</Button>
            <Button size="large" variant="disabled" disabled>Accent</Button>
            <Button size="large" variant="ico" icon={{icon:RiUser6Fill}}/> 
            <Button size="large" variant="ico" iconTheme="secondary" icon={{icon:RiUser6Fill}}/> 
            <Button size="large" variant="ico" iconTheme="gray" icon={{icon:RiUser6Fill}}/> 
        </div>





        {/*<div className="space-y-5">
        <Typography theme="primary" variant="h1" component="div" >
          Coding jungle
        </Typography>
        <Typography theme="secondary" variant="h1" component="div" >
          Coding jungle
        </Typography>
        <Typography variant="lead" component="div" >
          Coding jungle
        </Typography>
        <Typography variant="body-sm" component="div" >
          Coding jungle
        </Typography>
        <Typography variant="caption4" component="div" >
          Coding jungle
        </Typography>
        <Typography variant="caption4" weight="medium" component="div" >
          Coding jungle
        </Typography>
        
          
      </div>*/}
</>
  );
}

import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typoghraphy/typography";

export default function Home() {
  return (
    <>
    <Seo title="Coding field" description="Description..."/>
    <Typography variant="h1" component="h1" >
      Welcome to my app
    </Typography>
    <p>salut les codeur du futur</p>
      
    </>
  );
}

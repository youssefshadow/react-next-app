import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typoghraphy/typography";

export default function Home() {
  return (
    <div className="space-y-5">
    <Seo title="Coding field" description="Description..."/>
    <Typography variant="display" component="div" >
      Coding jungle
    </Typography>
    <Typography variant="h1" component="div" >
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
    
      
    </div>
  );
}

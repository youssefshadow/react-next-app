import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { RiUser6Fill, RiUDiskFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Coding jungle" description="Description..." />

      {/* Section 1 */}
      <div className="flex items-center gap-4 p-10 border border-gray-300">
        <Spinner size="small"></Spinner>
        <Spinner size="medium"></Spinner>
        <Spinner size="large"></Spinner>
      </div>

      {/* Section 2 */}
      <div className="flex items-center gap-4 p-5 border border-blue-300">
        <Button isLoading size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
          Accent
        </Button>
        <Button isLoading size="small">
          Accent
        </Button>
        <Button isLoading size="small" variant="outline">
          Accent
        </Button>
        <Button isLoading size="small" variant="disabled" disabled>
          Accent
        </Button>
        <Button isLoading size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      {/* Section 3 */}
      <div className="flex items-center gap-4 p-10 border border-green-300">
        <Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
          Accent
        </Button>
        <Button size="small" variant="secondary">
          Accent
        </Button>
        <Button size="small" variant="outline">
          Accent
        </Button>
        <Button size="small" variant="disabled" disabled>
          Accent
        </Button>
        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      {/* Section 4 */}
      <div className="flex items-center gap-4 p-10 border border-purple-300">
        <Button>Accent</Button>
        <Button variant="secondary">Accent</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disabled" disabled>
          Accent
        </Button>
        <Button variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      {/* Section 5 */}
      <div className="flex items-center gap-4 p-10 border border-yellow-300">
        <Button>Accent</Button>
        <Button size="large" variant="secondary">
          Accent
        </Button>
        <Button size="large" variant="outline">
          Accent
        </Button>
        <Button size="large" variant="disabled" disabled>
          Accent
        </Button>
        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
        <Button size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiUser6Fill }} />
        <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiUser6Fill }} />
      </div>

      {/* Section Typography */}
      <div className="space-y-5 p-10 border border-gray-300">
        <Typography theme="primary" variant="h1" component="div">
          Aventure dans le monde du code
        </Typography>
        <Typography theme="secondary" variant="h1" component="div">
          Découvertes infinies en programmation
        </Typography>
        <Typography variant="lead" component="div">
          Explorez les mystères du développement logiciel
        </Typography>
        <Typography variant="body-sm" component="div">
          Codez avec passion, créez avec ingéniosité
        </Typography>
        <Typography variant="caption4" component="div">
          Cet univers du code vous attend, prêt à être exploré
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          Écrivez votre propre histoire dans le langage binaire de la créativité
        </Typography>
      </div>
    </>
  );
}

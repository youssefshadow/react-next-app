import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
      <>
        <Seo title="Coding jungle" description="Description..." />
        <Navigation />
  
        <Container className="py-10 space-y-10 text-center">
          {/* Typography */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Typography
            </Typography>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
              <div className="pb-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Display
                </Typography>
                <Typography variant="display">Nothing is impossible</Typography>
              </div>
              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H1
                </Typography>
                <Typography variant="h1">
                  Nothing is impossible, the word itself says, I am possible!
                </Typography>
              </div>
              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium"> H2 </Typography>
                <Typography variant="h2">
                  Your time is limited, so do not waste it living someone else is life
                </Typography>
              </div>
            </div>
          </div>
          {/* Section logo */}
          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
            <Typography variant="caption2" weight="medium">Logo</Typography>
            <Logo size="very-small"/>
            <Logo size="small"/>
            <Logo/>
            <Logo size="large"/>
          </div>
  
          {/* Section Avatar */}
        <div className="space-y-2 mx-auto">
          <Typography variant="caption2" weight="medium">Avatar</Typography>
          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
            <Avatar size="small" src="/assets/images/avatar.webp" alt="avatar bruce wayne" />
            <Avatar src="/assets/images/avatar.webp" alt="avatar bruce wayne" />
            <Avatar size="large" src="/assets/images/avata2.avif" alt="avatar bruce wayne" />
            <Avatar size="large" src="/assets/images/dragon.webp" alt="avatar bruce wayne" />
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>

        {/* Section 2 */}
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
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
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
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
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
          <Button>Accent</Button>
          <Button variant="secondary">Accent</Button>
          <Button variant="outline">Accent</Button>
          <Button variant="disabled" disabled>
            Accent
          </Button>
          <Button variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>

        {/* Section 5 */}
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded mx-auto">
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
        </Container>
      </>
    );
  }
  
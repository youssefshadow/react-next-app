import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { RiUser6Fill } from "react-icons/ri";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Coding jungle" description="Description..." />
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}

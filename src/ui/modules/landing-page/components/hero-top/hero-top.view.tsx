import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="mx-w-lg">
          Rejoins Coding jungle !
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="mx-w-xl"
        >
          Embarquez pour une aventure où chaque accolade compte, où les erreurs
          sont des opportunités et où le succès se mesure en octets de progrès.
        </Typography>
        <div className=" space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        src="/assets/svg/rocket.svg"
        alt="illustration cosmo"
        width={810}
        height={580}
        className="absolute top-0 right-0 index-0"
      />
    </Container>
  );
};

import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import Image from "next/image";
import { features } from "process";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

export interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/diskette.svg",
    imageAlt: "illustration programmation",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    imagePath: "/assets/svg/joystick.svg",
    imageAlt: "illustration développement web",
    title: "Entrainement",
    description: "Entrain-toi à devenir meileurs et rtouve de l'inspiration",
  },
  {
    imagePath: "/assets/svg/loudspeaker.svg",
    imageAlt: "illustration informatique et hightech",
    title: "Visibilité",
    description: "Expose tes projets et crée-toi des opportunités !",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "Illustration code",
    title: "Relations",
    description: "Connecte-toi avec des devs et booste ta carrière !",
  },
];
export const Featured = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className=" relative w-[130px] h-[130px] rounded-full mb-6 p-10  overflow-hidden">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));
  return (
    <div className="bg-gray-300 ">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
        <div className="col-span-5">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'endroit parfait pour apprendre à coder
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              L'endroit parfait pour apprendre à coder
            </Typography>
            <Button
              variant="secondary"
              baseUrl="#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { Container } from "../container/container";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="py-40 bg-gray">
      <Container className="flex justify-between pt-16">
        <div className=" flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations Dev
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          <a href="#" target="_blank">
            <Image
              src="/assets/svg/youtube.svg"
              alt="Coding jungle"
              width={200}
              height={180}
            ></Image>
          </a>
        </div>

        <div className="">Liste de liens</div>
      </Container>
      <Container>
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            © 2024 Coding Jungle. All rights reserved.
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

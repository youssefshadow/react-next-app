import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerApplicationLinks.map((element) => (
    <div key={uuidv4()}>{element.label}</div>
  ));

  return (
    <div className=" bg-gray">
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

        <div className="">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`©  Coding Jungle ${currentYear}. All rights reserved.`}
            <a href="https://github.com/youssefshadow" target="_blank">
              Youssef Shadow
            </a>
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

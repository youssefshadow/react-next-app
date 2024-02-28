import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typoghraphy/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className=" w-full border-b-2 border-gray-400 ">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
            <div className="flex items-center gap-2.5">
              <Logo size="small" />
              <div className="flex flex-col">
                <div className="text-gray font-extrabold text-[24px]">
                  Coding Jungle
                </div>
                <Typography variant="caption4" theme="gray" component="span">
                  Plonge dans l&apos;univers de l&apos;inspiration tout en recevant des feedbacks
                </Typography>
              </div>
            </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography variant="caption3" component="div" className="flex items-center gap-7">
            <Link href="/design-system">Design system</Link>
            <span>Projets</span>
            <span>Projets</span>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small">Connexion</Button>
            <Button size="small" variant="secondary">Rejoindre</Button>


          </div>
          

        </div>
      </Container>
    </div>
  );
};

import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typoghraphy/typography";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className=" w-full border-b-2 border-gray-400">
      <Container className="">
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
      </Container>
    </div>
  );
};

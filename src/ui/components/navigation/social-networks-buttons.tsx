import React from "react";
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
//import { RiLinkedinBoxFill } from "react-icons/ri";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { CgLayoutGrid } from "react-icons/cg";

interface Props {
  theme?: "gray" | "secondary" | "accent";
  className?: string;
}

export const SocialNetworksButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
    />
  ));

  return (
    <div className={clsx((className = "flex item-center gap-2.5"))}>
      {icoList}
    </div>
  );
};

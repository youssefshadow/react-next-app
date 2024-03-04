import React from "react";
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiLinkedinBoxFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const SocialNetworksButtons = ({ className }: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme="gray"
      icon={{ icon: RiLinkedinBoxFill }}
    />
  ));

  return (
    <div className={clsx((className = "flex item-center gap-2.5"))}>
      {icoList}
    </div>
  );
};

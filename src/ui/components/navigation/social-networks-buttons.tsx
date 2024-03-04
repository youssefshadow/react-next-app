import React from "react";
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiLinkedinBoxFill } from "react-icons/ri";

export const SocialNetworksButtons = () => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme="gray"
      icon={{ icon: RiLinkedinBoxFill }}
    />
  ));

  return <div>{icoList}</div>;
};

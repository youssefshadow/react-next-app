import { Featured } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";

export const LandingPageView = () => {
  return (
    <>
      {" "}
      <HeroTopView />
      <Featured></Featured>
    </>
  );
};

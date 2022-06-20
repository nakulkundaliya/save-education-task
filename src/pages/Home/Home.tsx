import { HomeLanding } from "pages/Home/sections/HomeLanding";
import { HomeHiring } from "pages/Home/sections/HomeHiring";
import { HomeFeatures } from "pages/Home/sections/HomeFeatures";
import { HomeFooter } from "pages/Home/sections/HomeFooter";
import { Header } from "components";
import { HomeCandidates } from "pages/Home/sections/HomeCandidates";
import { HomeTalent } from "./sections/HomeTalent";

const Home = () => {
  return (
    <>
      <Header />
      <HomeLanding />
      <HomeHiring />
      <HomeTalent />
      <HomeCandidates />
      <HomeFeatures />
      <HomeFooter />
    </>
  );
};

export { Home };

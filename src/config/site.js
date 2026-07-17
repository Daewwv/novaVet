import theme from "./theme";
import seo from "./seo";

import content from "./content";
import about from "./about";
import branding from "./branding";
import services from "./services";
import stats from "./stats";
import team from "./team";
import portfolio from "./portfolio";
import process from "./process";
import testimonials from "./testimonials";
import faq from "./faq";
import trust from "./trust";
import modules from "./modules";
import cta from "./cta";

const site = {
  theme,
  seo,
  branding,

  company: content.company,

  hero: {
    ...content.hero,
    trust,
  },

  about,

  stats,

  services,

  team,

  portfolio,

  process,

  testimonials,

  faq,

  contact: content.contact,
  
  cta,

  modules,
};

export default site;
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ScienceIcon from "@mui/icons-material/Science";

import { ReactNode } from "react";

type Routes = Array<{
  header: null | string;
  items: Array<{
    name: string;
    icon: ReactNode;
  }>;
}>;

export const routes: Routes = [
  {
    header: null,
    items: [
      {
        name: "Home",
        icon: <HomeIcon />
      },
      {
        name: "Reports",
        icon: <BarChartIcon />
      },
      {
        name: "Contact",
        icon: <ContactMailIcon />
      }
    ]
  },
  {
    header: "External Links",
    items: [
      {
        name: "NextStrain Map",
        icon: <ScienceIcon />
      }
    ]
  }
];

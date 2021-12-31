import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactNode } from 'react';

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
        name: 'Dashboard',
        icon: <DashboardIcon />,
      },
      {
        name: 'Orders',
        icon: <ShoppingCartIcon />,
      },
      {
        name: 'Customers',
        icon: <PeopleIcon />,
      },
      {
        name: 'Reports',
        icon: <BarChartIcon />,
      },
      {
        name: 'Integrations',
        icon: <LayersIcon />,
      },
    ],
  },
  {
    header: 'Saved Reports',
    items: [
      {
        name: 'Current month',
        icon: <AssignmentIcon />,
      },
      {
        name: 'Last quarter',
        icon: <AssignmentIcon />,
      },
      {
        name: 'Year-end sale',
        icon: <AssignmentIcon />,
      },
    ],
  },
];

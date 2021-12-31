import { useLocation } from 'react-router';

export const usePathName = (): string => {
  const location = useLocation();
  const path = decodeURI(location.pathname.slice(1));
  const cleanPath = path.length === 0 ? 'dashboard' : path;
  const capitalize = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
  return capitalize;
};

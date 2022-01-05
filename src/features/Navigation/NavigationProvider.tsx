import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Configs } from "..";
import { AppBar } from "../../Components/UI/AppBar";
import { Drawer } from "../../Components/UI/Drawer";
import { Dashboard, NotFound } from "../../screens";

export const NavigationProvider = (): ReactElement => {
  return (
    <BrowserRouter basename={Configs.basename}>
      <AppBar />
      <Drawer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

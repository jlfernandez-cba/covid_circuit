import Alert from "@mui/material/Alert";
import { ReactElement } from "react";

type Props = {
  error: Error;
};

export const ErrorFallback = ({ error }: Props): ReactElement => {
  return <Alert severity="error">{error.message}</Alert>;
};

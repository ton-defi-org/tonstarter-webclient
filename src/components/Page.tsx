import React, { ReactNode } from "react";
import { Box, Fade } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <Fade in>
      <Box>{children}</Box>
    </Fade>
  );
}

export  {Page};

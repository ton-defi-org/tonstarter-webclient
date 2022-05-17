import React, { ReactNode } from "react";
import { Box, Fade } from "@mui/material";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

const StyledBox = styled(Box)({
  width:'100%',
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
});

const Page = ({ children }: Props) => {
  return (
    <Fade in>
      <StyledBox>{children}</StyledBox>
    </Fade>
  );
}

export  {Page};

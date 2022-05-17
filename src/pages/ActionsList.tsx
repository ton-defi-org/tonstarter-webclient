import styled from "@emotion/styled";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Page } from "components";
import { ACTIONS } from "consts";

const Item = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  height: "100px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const ActionsList = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Container>
        <Grid container spacing={2}>
          {ACTIONS.map((action) => {
            const { key, route } = action;
            return (
              <Grid item xs={6} sm={6} md={4} key={key}>
                <StyledLink to={route}>
                  <Item>
                    <Typography>{t([key])}</Typography>
                  </Item>
                </StyledLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
};

export { ActionsList };

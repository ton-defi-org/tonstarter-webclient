import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useContext, useState } from "react";
import { Context } from "context";
import styled from "@emotion/styled";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChinaLogo from "assets/china.png";
import UsLogo from "assets/usa.png";
import { useTranslation } from "react-i18next";
import { ACTIONS, ROUTES } from "consts";
import { Link, useLocation } from "react-router-dom";

//styled components
const Address = styled(Chip)(({
  color: "white",
  maxWidth: "200px",
  [`@media (max-width: 500px)`]:  {
    maxWidth:'100px'
  }
}));

const DisconnectButton = styled(Fab)(() => ({
  width: "40px",
  height: "40px",
}));

const StyledStackItem = styled(Paper)({
  background: "transparent",
  padding: "0px",
  textAlign: "center",
  boxShadow: "unset",
});

const AppBarMenu = styled(Box)({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledMenuList = styled(List)(() => ({
  width: "230px",
}));

const StyledMenuListLink = styled(Link)({
  textDecoration: "none",
  width: "100%",
  height: "100%",
  padding: '10px',
  color: 'black'
});

const StyledImage = styled.img(() => ({
  width: "30px",
  height: "30px",
}));

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <Stack direction="row">
      <StyledStackItem onClick={() => i18n.changeLanguage("cn")}>
        <IconButton aria-label="china">
          <StyledImage src={ChinaLogo} />
        </IconButton>
      </StyledStackItem>
      <StyledStackItem onClick={() => i18n.changeLanguage("en")}>
        <IconButton aria-label="usa">
          <StyledImage src={UsLogo} />
        </IconButton>
      </StyledStackItem>
    </Stack>
  );
};

interface HeaderDrawerProps {
  open: boolean;
  onClose: () => void;
}

const HeaderDrawer = ({ open, onClose }: HeaderDrawerProps) => {
  const { t } = useTranslation();
  const location = useLocation();  
  
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <StyledMenuList>
        {ACTIONS.map((action) => {
          const { key, route } = action;
          return (
            <ListItemButton sx={{padding: 0}} selected={location.pathname.indexOf(key) > 0} key={key}>
              <StyledMenuListLink to={route} onClick={onClose}>
                <ListItemText primary={t([key])} />
              </StyledMenuListLink>
            </ListItemButton>
          );
        })}
        <ListItemButton sx={{padding: 0}} selected={location.pathname === '/'}>
              <StyledMenuListLink to={ROUTES.actionsList} onClick={onClose}>
                <ListItemText primary={t(['actions list'])} />
              </StyledMenuListLink>
            </ListItemButton>
      </StyledMenuList>
    </Drawer>
  );
};

const Header = () => {
  const { address, updateAddress, isTelegram } = useContext(Context);
  const [openMenu, setOpenMenu] = useState(false);
  const showDrawerToggle = address && !isTelegram
  return (
      <AppBar position="fixed">
        <Toolbar>
          {showDrawerToggle && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setOpenMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <AppBarMenu>
            {address && (
              <>
                <DisconnectButton
                  onClick={() => updateAddress(null)}
                  color="primary"
                  aria-label="disconnect"
                >
                  <PowerSettingsNewIcon />
                </DisconnectButton>
                <Address label={address} variant="outlined" />
              </>
            )}
            <LanguageSelector />
          </AppBarMenu>
        </Toolbar>
        <HeaderDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
      </AppBar>
      
  );
};

export { Header };

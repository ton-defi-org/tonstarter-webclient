import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { connectWithExtension } from "helpers";
import ExtensionIcon from "@mui/icons-material/Extension";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Context } from "context";
import { useTranslation } from "react-i18next";
import { ROUTES } from "consts";
import { Page, Modal } from "components";

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: "40px",
}));

const AddressBox = styled(Box)(() => ({
  width: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
}));
const AddressBoxButtons = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent:'flex-end',
    gap: '20px'
  }));

const StyledInput = styled(Input)(() => ({
  height: "50px",
}));

const AddressBoxButton = styled(Button)(() => ({
  height: "50px",
  marginTop: "10px",
  paddingLeft:'30px',
  paddingRight:'30px'
}));

interface WalletsMenuProps {
  onConnectWithExtension: () => void;
  onConnectWithAddress: () => void;
}

function WalletsMenu(props: WalletsMenuProps) {
  const { t } = useTranslation();
  const { onConnectWithExtension, onConnectWithAddress } = props;
  return (
    <List>
      <ListItem>
        <ListItemButton onClick={onConnectWithExtension}>
          <StyledListItemIcon>
            <ExtensionIcon />
          </StyledListItemIcon>
          <ListItemText primary={t("web extension")} />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={onConnectWithAddress}>
          <StyledListItemIcon>
            <InsertLinkIcon />
          </StyledListItemIcon>
          <ListItemText primary={t("address")} />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={() => {}}>
          <ListItemText primary="Other" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

interface InsertAddressProps{
    onClick: (val: string) => void;
    onCancel: () => void;
}

const InsertAddress = ({ onClick, onCancel }: InsertAddressProps) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState("");

  const onSubmit = () => {
    onClick(address);
  };

  return (
    <AddressBox>
      <StyledInput
        fullWidth
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        placeholder={t("insert wallet address")}
      />
      <AddressBoxButtons>
        <AddressBoxButton
          variant="contained"
          disabled={!address}
          onClick={onSubmit}
        >
          {t("submit")}
        </AddressBoxButton>
        <AddressBoxButton
          variant="contained"
          onClick={onCancel}
        >
          {t("cancel")}
        </AddressBoxButton>
      </AddressBoxButtons>
    </AddressBox>
  );
};

const WalletConnect = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { address, updateAddress } = useContext(Context);
  const [showInsertAddress, setShowInsertAddress] = useState(false);

  useEffect(() => {
    if (address) {
      navigate(ROUTES.actionsList);
    }
  }, [address, navigate]);

  const onConnectWithExtension = async () => {
    try {
      const result = await connectWithExtension();
      updateAddress(result);
      setOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(t([error.message]));
      }
    }
  };

  const onConnectWithWalletAddressClick = async (value: string) => {
    updateAddress(value);
    setOpen(false);
  };

  const onCloseModal = () => {
    if (showInsertAddress) {
      setShowInsertAddress(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <Page>
      <Button onClick={() => setOpen(true)} variant="contained">
        {t("connect wallet")}
      </Button>
      <Modal open={open} onClose={onCloseModal}>
        {showInsertAddress ? (
          <InsertAddress onCancel={() => setShowInsertAddress(false)}   onClick={onConnectWithWalletAddressClick} />
        ) : (
          <WalletsMenu
            onConnectWithExtension={onConnectWithExtension}
            onConnectWithAddress={() => setShowInsertAddress(true)}
          />
        )}
      </Modal>
    </Page>
  );
};

export { WalletConnect };

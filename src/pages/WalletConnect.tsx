import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ExtensionIcon from "@mui/icons-material/Extension";
import { Context } from "context";
import { useTranslation } from "react-i18next";
import { ROUTES } from "consts";
import { Page, Modal } from "components";
import { connect, WalletConnectorType, walletConnnectors } from "helpers/wallet";

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: "40px",
}));

// const AddressBox = styled(Box)(() => ({
//   width: "100%",
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
// }));
// const AddressBoxButtons = styled(Box)(() => ({
//   width: "100%",
//   display: "flex",
//   justifyContent: "flex-end",
//   gap: "20px",
// }));

// const StyledInput = styled(Input)(() => ({
//   height: "50px",
// }));

// const AddressBoxButton = styled(Button)(() => ({
//   height: "50px",
//   marginTop: "10px",
//   paddingLeft: "30px",
//   paddingRight: "30px",
// }));

// interface InsertAddressProps {
//   onCancel: () => void;
// }

// const InsertAddress = ({ onCancel }: InsertAddressProps) => {
//   const { t } = useTranslation();
//   const [address, setAddress] = useState("");

//   const onSubmit = () => {};

//   return (
//     <AddressBox>
//       <StyledInput fullWidth onChange={(e) => setAddress(e.target.value)} value={address} placeholder={t("insert wallet address")} />
//       <AddressBoxButtons>
//         <AddressBoxButton variant="contained" disabled={!address} onClick={onSubmit}>
//           {t("submit")}
//         </AddressBoxButton>
//         <AddressBoxButton variant="contained" onClick={onCancel}>
//           {t("cancel")}
//         </AddressBoxButton>
//       </AddressBoxButtons>
//     </AddressBox>
//   );
// };

const WalletConnect = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { address, updateAddress } = useContext(Context);

  useEffect(() => {
    if (address) {
      navigate(ROUTES.actionsList);
    }
  }, [address, navigate]);

  const connectWallet = async (type: WalletConnectorType) => {
    try {
      const { address } = await connect(type);
      updateAddress(address);
    } catch (error) {
      if (error instanceof Error) {
        alert(t([error.message]));
      }
    }
  };





  return (
    <Page>
      <Button onClick={() => setOpen(true)} variant="contained">
        {t("connect wallet")}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <List>
          {walletConnnectors.map((connector, index) => {
            const { text, type, isSupported } = connector;
            return (
              <ListItem key={index}>
                <ListItemButton disabled={!isSupported} onClick={() => connectWallet(type)}>
                  <StyledListItemIcon>
                    <ExtensionIcon />
                  </StyledListItemIcon>
                  <ListItemText primary={t([text])} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Modal>
    </Page>
  );
};

export { WalletConnect };

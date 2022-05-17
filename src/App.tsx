import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "layouts/Header";
import { Context } from "context";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import { ROUTES } from "consts";
import { WalletConnect, ActionsList, Deposit, Withdraw, TransferOwnership, Decrement, Increment } from "./pages";

const StyledContainer = styled(Container)({
  paddingTop: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

function App() {
  const { address } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!address) {
      navigate(ROUTES.connect);
    }
  }, [address, navigate]);


  return (
    <StyledContainer>
      <Header />
      <Routes>
        <Route path={ROUTES.connect} element={<WalletConnect />} />
        <Route path={ROUTES.actionsList} element={<ActionsList />} />
        <Route path={ROUTES.deposit} element={<Deposit />} />
        <Route path={ROUTES.withdraw} element={<Withdraw />} />
        <Route
          path={ROUTES.transferOwnership}
          element={<TransferOwnership />}
        />
        <Route path={ROUTES.decrement} element={<Decrement />} />
        <Route path={ROUTES.increment} element={<Increment />} />
      </Routes>
    </StyledContainer>
  );
}

export default App;

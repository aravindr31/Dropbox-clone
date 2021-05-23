import React from "react";
import styled from "styled-components";
import { useStateProviderValue } from "../StateProvider";
import AppContent from "./AppContent";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashBoard() {
  const [{ User }] = useStateProviderValue();
  console.log(User);
  return !User ? (
    <Login />
  ) : (
    <Dashboard>
      <DashboardSidebar>
        <Sidebar />
      </DashboardSidebar>
      <DashboardBody>
        <Header />
        <AppContent />
      </DashboardBody>
    </Dashboard>
  );
}

export default DashBoard;

const Dashboard = styled.div`
  display: flex;
  width: 100%;
`;

const DashboardSidebar = styled.div`
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  @media (max-width: 639px) {
    display: none;
  }
`;
const DashboardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

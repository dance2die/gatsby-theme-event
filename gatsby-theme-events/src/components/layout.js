import React from "react";
import { Layout as ThemeLayout, Main, Header, Container } from "theme-ui";

const Layout = ({ children }) => (
  <ThemeLayout>
    <Header>
      <h1>Gatsby Events Theme?</h1>
    </Header>
    <Main>
      <Container>{children}</Container>
    </Main>
  </ThemeLayout>
);

export default Layout;

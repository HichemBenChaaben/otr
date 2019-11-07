import React, { useState } from "react";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import css from "@emotion/css/macro";
import theme from "./styles/theme";
import globalStyles from "./styles/global";
import Container from "./atoms/Container";
import Header from "./atoms/Header";
import NavBar from "./organisms/NavBar";
import Card from "./organisms/Card/Card";
import NavMenu from "./organisms/NavMenu";
import Flex from "./atoms/Flex/Flex";
import cardImage from "./images/WOMEN_2240x10003.jpg";
import lookbook from "./images/lookbook.jpg";
import Drawer from "./atoms/Drawer";
import NavMenuVertical from "./organisms/NavMenuVertical";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={css(globalStyles)} />
      <Header>
        <NavBar onClick={toggleDrawer} />
      </Header>
      <Drawer
        isOpen={isOpen}
        onClose={closeDrawer}
        toggleOpen={toggleDrawer}
        closeLabel="Close"
      >
        <NavMenuVertical />
      </Drawer>
      <Container mt={5}>
        <NavMenu />
        <Flex flexWrap="wrap">
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Shop now"
            cardLogo={lookbook}
          />
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Shop now"
            cardLogo={lookbook}
          />
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Shop now"
            cardLogo={lookbook}
          />
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Show now"
            cardLogo={lookbook}
          />
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Shop now"
            cardLogo={lookbook}
          />
          <Card
            label="up to 65% off"
            img={cardImage}
            btnLabel="Shop now"
            cardLogo={lookbook}
          />
        </Flex>
      </Container>
    </ThemeProvider>
  );
}

export default App;

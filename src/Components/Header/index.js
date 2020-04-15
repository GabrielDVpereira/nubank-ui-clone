import React from "react";
import { Container, Top, Title, Logo } from "./styles";

import logo from "../../assets/Nubank_Logo.png";

import { Icon } from "react-native-elements";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Diego</Title>
      </Top>
      <Icon name="chevron-down" type="font-awesome" size={20} color="#fff" />
    </Container>
  );
}

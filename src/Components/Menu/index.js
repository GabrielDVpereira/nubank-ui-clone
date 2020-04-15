import React from "react";
import { Icon } from "react-native-elements";

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutText,
} from "./styles";

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <Icon name="qrcode" type="font-awesome" size={100} color="#fff" />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" type="material" size={20} color="#fff" />
          <NavText>Me ajuda </NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" type="material" size={20} color="#fff" />
          <NavText>Perfil </NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" type="material" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" type="material" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutText>Sair do App</SignOutText>
      </SignOutButton>
    </Container>
  );
}

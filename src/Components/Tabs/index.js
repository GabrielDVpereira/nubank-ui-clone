import React from "react";
import { Container, TabContainer, TabItem, TabText } from "./styles";
import { Icon } from "react-native-elements";

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: "clamp",
        }),
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <TabContainer>
        <TabItem>
          <Icon name="person-add" type="material" color="#fff" size={24} />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="chat-bubble-outline"
            type="material"
            color="#fff"
            size={24}
          />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" type="material" color="#fff" size={24} />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" type="material" color="#fff" size={24} />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" type="material" color="#fff" size={24} />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabContainer>
    </Container>
  );
}

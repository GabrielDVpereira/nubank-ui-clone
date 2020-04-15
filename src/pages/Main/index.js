import React from "react";
import { Icon } from "react-native-elements";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
} from "./styles";
import Header from "../../Components/Header";
import Tabs from "../../Components/Tabs";
import Menu from "../../Components/Menu";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-35, 0, 380],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Icon
                name="attach-money"
                type="material"
                color="#666"
                size={28}
              />
              <Icon
                name="visibility-off"
                type="material"
                color="#666"
                size={28}
              />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 recebida de Diego schell Fernandes
                hoje às 6:00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}

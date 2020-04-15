import React from "react";
import Main from "./pages/Main";
import { StatusBar } from "react-native";

export default function Root() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Main />
    </>
  );
}

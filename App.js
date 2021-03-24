import React, { Component } from "react";
import { SafeAreaView, View, Button, Image } from "react-native";
import Logo from "./assets/logo.png";

export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isToggleOn: !this.state.isToggleOn,
      };
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          title={this.state.isToggleOn ? "關閉圖片" : "打開圖片"}
          onPress={this.handleClick}
        />
        <View style={{ flex: 1 }}>
          {this.state.isToggleOn ? (
            <Image source={Logo} style={{ height: "100%" }} />
          ) : (
            <View />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
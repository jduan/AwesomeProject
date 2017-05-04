import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Rexxar"/>
        <Greeting name="Jaina"/>
        <Greeting name="Valeera"/>
      </View>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true}
    // Toggle the state every second
    setTimeout(() => {
      setInterval(() => {
        this.setState({showText: !this.state.showText});
      }, 4000);
    }, props.delay)
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" delay={1000}/>
        <Blink text="Yes blinking is so great" delay={2000}/>
        <Blink text="Why did they ever take this out of HTML" delay={3000}/>
        <Blink text="Look at me look at me look at me" delay={4000}/>
      </View>
    );
  }
}

class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{left: 10, top: 50, width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);

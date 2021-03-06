import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

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

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Just red</Text>
        <Text style={styles.bigblue}>Just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor:'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor:'steelblue'}}/>
      </View>
    )
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor:'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor:'steelblue'}}/>
      </View>
    )
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

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

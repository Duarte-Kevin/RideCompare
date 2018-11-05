import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import {connect} from 'react-redux'
import { Constants, Location, Permissions } from "expo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startAdress: "",
      endAddress: ""
    };
    this.getGeo = this.getGeo.bind(this);
    // this._getLocationAsync = this._getLocationAsync.bind(this)
  }
  getGeo(loaction) {
    this._getLocationAsync(loaction);
  }
  _getLocationAsync = async state => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let lat = location.latitude;
    let long = longitude.longitude;
    // this.setState({ location });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require("../assets/background.png")}
        />
        <View style={styles.center}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Starting Address"
              onChangeText={startAdress => this.setState({ startAdress })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={e => {
                this.getGeo("start");
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/ping.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Ending Address"
              onChangeText={startAdress => this.setState({ startAdress })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={e => {
                this.getGeo("end");
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/ping.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.submitbutton}>
            <TouchableOpacity style={styles.submit} onPress={this.getGeo}>
              <Text style={{ textAlign: "center" }}> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null,null)(App)

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    resizeMode: "cover"
  },
  center: {
    position: "absolute",
    top: "40%",
    width: "100%",
    height: "20%",
    display: "flex",
    textAlign: "center",
    justifyContent: "space-around"
  },
  inputs: {
    backgroundColor: "white",
    position: "relative",
    left: "40%",
    display: "flex",
    flexDirection: "row",
    width: "70%",
    borderRadius: 10
  },
  input: {
    flex: 8
  },
  img: {
    width: 30,
    height: 30
  },
  button: {
    flex: 1
  },
  submit: {
    position: "relative",
    width: 100,
    left: "35%",
    backgroundColor: "red"
  }
});

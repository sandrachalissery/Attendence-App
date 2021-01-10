import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/Appheader.js';
import db from '../config.js';

export default class Homescreen extends React.Component {
  goToSubmitScreen = () => {
  this.props.navigation.navigate('SubmitScreen');
  };

  sandb = () => {
    var dbs = db.ref('/01/Sandra');
    dbs.update({
      present: true,
    });
  };
  seldb = () => {
    var dbs = db.ref('/02/Selena');
    dbs.update({
      present: true,
    });
  };
  kirdb = () => {
    var dbs = db.ref('/03/Kiran');
    dbs.update({
      present: true,
    });
  };
  seadb = () => {
    var dbs = db.ref('/04/Sean');
    dbs.update({
      present: true,
    });
  };
  sindb = () => {
    var dbs = db.ref('/05/Sina');
    dbs.update({
      present: true,
    });
  };
  anjdb = () => {
    var dbs = db.ref('/06/Anjali');
    dbs.update({
      present: true,
    });
  };
  rohdb = () => {
    var dbs = db.ref('/07/Rohini');
    dbs.update({
      present: true,
    });
  };
  josdb = () => {
    var dbs = db.ref('/08/Josh');
    dbs.update({
      present: true,
    });
  };
  nickdb = () => {
    var dbs = db.ref('/09/Nick');
    dbs.update({
      present: true,
    });
  };
  samdb = () => {
    var dbs = db.ref('/names/ Samantha');
    dbs.update({
      present: true,
    });
  };

  robdb = () => {
    var dbs = db.ref('/10/ Robert');
    dbs.update({
      absent: true,
    });
  };
  bobdb = () => {
    var dbs = db.ref('/11/Bobby');
    dbs.update({
      absent: true,
    });
  };
  saddb = () => {
    var dbs = db.ref('/12/ Sadie');
    dbs.update({
      absent: true,
    });
  };
  beldb = () => {
    var dbs = db.ref('/13/Bella');
    dbs.update({
      absent: true,
    });
  };
  leodb = () => {
    var dbs = db.ref('/14/Leo');
    dbs.update({
      absent: true,
    });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Sandra </Text>
          <TouchableOpacity style={styles.button} onPress={this.sandb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.seldb}>
            <Text style={styles.absentText}>P</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Kiran </Text>
          <TouchableOpacity style={styles.button} onPress={this.kirdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.badb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Cheteshwar Pujara </Text>
          <TouchableOpacity style={styles.button} onPress={this.cpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.cadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Dinesh Karthik </Text>
          <TouchableOpacity style={styles.button} onPress={this.dpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.dadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> G Gambhir </Text>
          <TouchableOpacity style={styles.button} onPress={this.gpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.gadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Mahendra Sing Dhoni </Text>
          <TouchableOpacity style={styles.button} onPress={this.mpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.madb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Virat Kholi </Text>
          <TouchableOpacity style={styles.button} onPress={this.vpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.vadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Sachin Tendulkar </Text>
          <TouchableOpacity style={styles.button} onPress={this.spdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.sadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Rohit Sharma </Text>
          <TouchableOpacity style={styles.button} onPress={this.rpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.radb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <Text style={styles.buttonText}> Hardik Pandya </Text>
          <TouchableOpacity style={styles.button} onPress={this.hpdb}>
            <Text style={styles.presentText}>P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.hadb}>
            <Text style={styles.absentText}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bg}>
          <TouchableOpacity style={styles.sub} onPress={this.goToSubmitScreen}>
            <Text style={styles.subText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 8,
    borderRadius: 1,
    marginTop: 10,
    width: 100,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  presentText: {
    textAlign: 'center',
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  absentText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    },
    bg: {
    backgroundColor: '',
  },
  sub: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 15,
    marginTop: 50,
    marginBottom: 30,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  subText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '',
  },
});

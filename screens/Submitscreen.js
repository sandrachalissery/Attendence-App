import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/Appheader';
import db from '../config.js';

export default class SubmitScreen extends React.Component {
constructor() {
super();
this.state = {
na: [],
np: [],
};
}

namepresentfunction = () => {
var dbs = db.ref('names/');
var namelist = [];
dbs.on('value', (data) => {
var namesp = data.val();
for (var name in namesp) {
if (namesp[name]['present'] === true) {
namesp[name]['name'] = name;
namelist.push(namesp[name]);
}
}
console.log(namelist);
this.setState({
np: namelist,
});
});
};

nameabsentfunction = () => {
var dbs = db.ref('names/');
var namelista = [];
dbs.on('value', (data) => {
var namesa = data.val();
for (var name in namesa) {
if (namesa[name]['absent'] === true) {
namesa[name]['name'] = name;
namelista.push(namesa[name]);
}
}
console.log(namelista);
this.setState({
na: namelista,
});
});
};
componentDidMount() {
this.namepresentfunction();
this.nameabsentfunction();
}
render() {
return (
<View style={styles.bg}>
<AppHeader />
<Text style={styles.presentText}>PRESENT</Text>
{this.state.np.map((name) => (
<View style={styles.bg}>
  <Text style={styles.buttonText}>{name.name}</Text>
</View>
))}

<Text style={styles.absentText}>ABSENT</Text>
{this.state.na.map((name) => (
<View style={styles.bg}>
  <Text style={styles.buttonText}> {name.name}</Text>
</View>
))}
</View>
);
}
}

const styles = StyleSheet.create({
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
marginTop: 20,
},
bg: {
backgroundColor: 'rgb(251, 228, 133)',
},
});

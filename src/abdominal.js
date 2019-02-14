import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

//////////////////////////////////////////////////////////////////////////////////////////////// ABDOMINAL SCREENS
class AbdominalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Is Patient > 16 years old?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('Q1')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title="No"
                onPress={() => this.props.navigation.navigate('Cancel')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}


class Q1Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>

        <Text style={styles.titleText}>Are there ANY of the following:</Text>

        <Text style={styles.listText}>• Hemodynamic instability (relative to age)</Text>
        <Text style={styles.listText}>• Injury occurred > 24 hours before presentation</Text>
        <Text style={styles.listText}>• Signs of penetrating trauma</Text>
        <Text style={styles.listText}>• Preexisting neurologic disorder that impedes a reliable physical exam</Text>
        <Text style={styles.listText}>• Evidence of acute alcohol or drug intoxication</Text>
        <Text style={styles.listText}>• Pregnancy</Text>
        <Text style={styles.listText}>• Concern for non-accidental trauma</Text>
        
        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('Cancel')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title="No"
                onPress={() => this.props.navigation.navigate('Q2Setting')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}

class Q2SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>

        <Text style={styles.titleText}>Is there any evidence of either:</Text>

        <Text style={styles.listText}>• Abdominal wall trauma/seatbelt sign</Text>
        <Text style={styles.listText}>• GCS less than 14 w/ blunt abdomen trauma</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('Q2SettingGCS')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title="No"
                onPress={() => this.props.navigation.navigate('Q3Abd')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}
class Q2SettingGCSScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Consult Pediatric Trauma team.</Text>
        <Text style={styles.baseText}>Obtain IV access.</Text>
        <Text style={styles.baseText} onPress={() => this.props.navigation.navigate('Labs')}>Send labs  <Ionicons name="ios-information-circle-outline" style={styles.linkText}></Ionicons></Text>
        <Text></Text>
        <Text style={styles.baseText}>What is the patients mental status?</Text>


        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="GCS less than 14"
              onPress={() => this.props.navigation.navigate('Q2SettingGCSUnder')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="GCS 14 or 15"
              onPress={() => this.props.navigation.navigate('Q2SettingGCSOver')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class LabsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Labs to order:</Text>
        <Text style={styles.listText}>• CBC</Text>
        <Text style={styles.listText}>• CMP</Text>
        <Text style={styles.listText}>• Lipase</Text>
        <Text style={styles.listText}>• UA (when available, patient does not have to be catheterized in ED to obtain)</Text>

      </View>
    );
  }
}
class Q2SettingGCSOverScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Consider CT abd/pelvis with IV contrast depending on labs/judgement.</Text>
        <Text style={styles.baseText}>If CT obtained, is there evidence of grade 3 or higher kidney injury? </Text>


        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
        
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('Q2SettingKidney')}>
            </Button>

          </View>
          <View style={{flex:1}} >

            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('Q2SettingNoKidney')}>
            </Button>

          </View>
        </View>

      </View>
    );
  }
}
class Q2SettingGCSUnderScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain CT abd/pelvis with IV contrast.</Text>
        <Text style={styles.baseText}>Is there evidence of grade 3 or higher kidney injury on CT? </Text>


        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
        
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('Q2SettingKidney')}>
            </Button>

          </View>
          <View style={{flex:1}} >

            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('Q2SettingNoKidney')}>
            </Button>

          </View>
        </View>


      </View>
    );
  }
}
class Q2SettingKidneyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain delayed CT Urogram </Text>
        <Text style={styles.baseText}>(10 to 15 mins post IV contrast)</Text>
      </View>
    );
  }
}
class Q2SettingNoKidneyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>No further imaging required </Text>
      </View>
    );
  }
}
class Q3AbdScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
       <Text style={styles.titleText}>Low risk of intra-abdominal injury requiring intervention.</Text>
        <Text style={styles.baseText}>If patient is at risk for multi-system trauma (based on mechanism), consider: </Text>
        <Text style={styles.baseText}>obersvation in the ED vs 
          <Text style={styles.baseText} onPress={() => this.props.navigation.navigate('Labs')}> screening labs <Ionicons name="ios-information-circle-outline" style={styles.linkText}></Ionicons></Text>
        </Text>
      </View>
    );
  }
}


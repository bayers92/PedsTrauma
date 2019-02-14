import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import { Container, Header, Title, Left, Right, Body, Icon } from 'native-base';


class LogoTitle extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      // <TouchableHighlight onPress= {() => this.props.navigation.navigate('Home')}>
      <Image
        source={require('./header_logo.png')}
        style={{ width: 200, height: 30 }}
      ></Image>
      // </TouchableHighlight>
    );
  }
}


class HomeScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image
        source={require('./sandy_small.gif')}
        style={{ }}
      ></Image>
        <Text style={styles.titleText}>Peds Trauma Imaging</Text>
        <Text style={styles.baseText}>Choose which body part is hurt:</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Head"
                onPress={() => this.props.navigation.navigate('Head')}>
              </Button>

              <Button
                title="Spine"
                onPress={() => this.props.navigation.navigate('Spine')}>
              </Button>

              <Button
                title="Chest"
                onPress={() => this.props.navigation.navigate('Chest')}>
              </Button>

              <Button
                title="Abdomen"
                onPress={() => this.props.navigation.navigate('Abdomen')}>
              </Button>

          </View>
        </View>

      </View>
    );
  }
}





//////////////////////////////////////////////////////////////////////////////////////////////// ABDOMINAL SCREENS
class AbdominalScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Ambdominal Trauma</Text>
        <Text style={styles.baseText}>Is Patient under 16 years old?</Text>

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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>No further imaging required </Text>
      </View>
    );
  }
}
class Q3AbdScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
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



//////////////////////////////////////////////////////////////////////////////////////////////// SHARED SCREENS
class CancelScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Do not use algorithm. </Text><Text>Consider Pediatric Trauma team consultation.</Text>
      </View>
    );
  }
}




/////////////////////////////////////////////////////////////////////////////////////////////////// HEAD SCREENS
class HeadScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.titleText}>Head Trauma</Text>
        <Text style={styles.baseText}>How old is the patient?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="<2 yo"
                onPress={() => this.props.navigation.navigate('HeadQ1Under')}>
              </Button>

          </View>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="2-16 yo"
                onPress={() => this.props.navigation.navigate('HeadQ1Over')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title=">16 yo"
                onPress={() => this.props.navigation.navigate('Cancel')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}
class HeadQ1UnderScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Does the patient have any of the following?</Text>
        <Text style={styles.baseText}>GCS under 15 </Text>
        <Text style={styles.baseText}>Palpable skull fracture </Text>
        <Text style={styles.baseText}>Other signs of altered mental status (AMS): </Text>
        <Text style={styles.listText}>• Agitation</Text>
        <Text style={styles.listText}>• Somnolence </Text>
        <Text style={styles.listText}>• Repetitive questioning </Text>
        <Text style={styles.listText}>• Slow response to verbal communication </Text>



        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('HeadCTnoncon')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('HeadQ2Under')}>
            </Button>
          </View>
        </View>

      </View>
    );
  }
}
class HeadCTnonconScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain CT head without IV contrast</Text>
      </View>
    );
  }
}
class HeadQ2UnderScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Presence of predictors of head/brain injury</Text>
        <Text style={styles.baseText}>Occipital, parietal or temporal scalp hematoma</Text>
        <Text style={styles.baseText}>History of LOC of >= 5 seconds</Text>
        <Text style={styles.baseText}>Not acting normally per parents </Text>
        <Text style={styles.baseText}>Severe mechanism of injury: </Text>
        <Text style={styles.listText}>• MVC if ejected, death of passenger, rollover </Text>
        <Text style={styles.listText}>• Pedestrian or bicyclist without helmet struck by motor vehicle </Text>
        <Text style={styles.listText}>• Falls more than 3 feet</Text>
        <Text style={styles.listText}>• Head struck by high-impact object</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('HeadClinicalJudgeUnder')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('HeadNoCT')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class HeadNoCTScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>CT Head not recommended</Text>
      </View>
    );
  }
}
class HeadClinicalJudgeUnderScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Observation vs CT on basis of:</Text>
        <Text style={styles.baseText}>Physician experience</Text>
        <Text style={styles.baseText}>Multiple vs isolated findings:</Text>
        <Text style={styles.listText}>• Isolated LOC, headache, or vomiting </Text>
        <Text style={styles.listText}>• Isolated scalp hematomas in infants older than 3 months</Text>
        <Text style={styles.baseText}>Worsening symptoms/signs after observation</Text>
        <Text style={styles.baseText}>Age younger than 3 months</Text>
        <Text style={styles.baseText}>Parental preference</Text>
      </View>
    );
  }
}

class HeadQ1OverScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Does the patient have any of the following?</Text>
        <Text style={styles.baseText}>GCS under 15 </Text>
        <Text style={styles.baseText}>Signs of basiar skull fracture </Text>
        <Text style={styles.baseText}>Other signs of altered mental status (AMS): </Text>
        <Text style={styles.baseText}>Agitation</Text>
        <Text style={styles.baseText}>Somnolence </Text>
        <Text style={styles.baseText}>Repetitive questioning </Text>
        <Text style={styles.baseText}>Slow response to verbal communication </Text>



        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('HeadCTnoncon')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('HeadQ2Over')}>
            </Button>
          </View>
        </View>

      </View>
    );
  }
}
class HeadQ2OverScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Presence of predictors of head/brain injury</Text>
        <Text style={styles.baseText}>History of LOC </Text>
        <Text style={styles.baseText}>History of vomiting </Text>
        <Text style={styles.baseText}>Severe headache </Text>
        <Text style={styles.baseText}>Severe mechanism of injury: </Text>
        <Text style={styles.listText}>• MVC if ejected, death of passenger, rollover </Text>
        <Text style={styles.listText}>• Pedestrian or bicyclist without helmet struck by motor vehicle </Text>
        <Text style={styles.listText}>• Falls more than 5 feet</Text>
        <Text style={styles.listText}>• Head struck by high-impact object</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('HeadClinicalJudgeOver')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('HeadNoCT')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class HeadClinicalJudgeOverScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Observation vs CT on basis of:</Text>
        <Text style={styles.baseText}>Physician experience</Text>
        <Text style={styles.baseText}>Multiple vs isolated findings:</Text>
        <Text style={styles.listText}>• Isolated LOC, headache, or vomiting </Text>
        <Text style={styles.listText}>• Isolated scalp hematomas in infants older than 3 months</Text>
        <Text style={styles.baseText}>Worsening symptoms/signs after observation</Text>
        <Text style={styles.baseText}>Parental preference</Text>
      </View>
    );
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////// SPINE SCREENS
class SpineScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Spine Trauma</Text>
        <Text style={styles.baseText}>Is Patient under 16 years old?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('SpineQ1')}>
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
class SpineQ1Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Are ANY of the following present:</Text>
        <Text style={styles.listText}>• Altered mental status (AMS)</Text>
        <Text style={styles.listText}>• GCS under 14</Text>
        <Text style={styles.listText}>• Intoxication</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('SpineAMS')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('SpineNeuro')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class SpineNeuroScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Is there a history of/current focal neurologic deficits?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Hx of deficits"
              onPress={() => this.props.navigation.navigate('SpineXRS2')}>
            </Button>
          </View>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Present on Exam"
              onPress={() => this.props.navigation.navigate('SpineCT2')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="No deficits"
              onPress={() => this.props.navigation.navigate('SpineNeck')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpineCT2Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain c-spine CT with recons</Text>
        <Text style={styles.titleText}>Consult spine surgery</Text>
      </View>
    );
  }
}
class SpineXRS2Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain C-spine X-ray series :</Text>
        <Text style={styles.baseText}>(C-spine X-Ray series includes AP and lateral films)</Text>
        <Text style={styles.baseText}>The findings are:</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Normal"
              onPress={() => this.props.navigation.navigate('SpineChoice')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="Abnormal"
              onPress={() => this.props.navigation.navigate('SpineConsult')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpineChoiceScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Discharge Home:</Text>
        <Text style={styles.baseText}>Place in Aspen collar, follow-up in 2 weeks with spine surgery</Text>
        <Text style={styles.titleText}>Hospital Admission:</Text>
        <Text style={styles.baseText}>Cont c-spine precautions, consult spine surgery</Text>
        <Text style={styles.titleText}>Operating Room:</Text>
        <Text style={styles.baseText}>Cont c-spine precautions, consult spine surgery</Text>
      </View>
    );
  }
}
class SpineNeckScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>On physical exam, is there either:</Text>
        <Text style={styles.listText}>• Neck pain</Text>
        <Text style={styles.listText}>• Limited ROM</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('SpineXRS2')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('SpineInjury')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpineInjuryScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Are ANY of the following present:</Text>
        <Text style={styles.listText}>• Torso injury</Text>
        <Text style={styles.listText}>• High speed MVC</Text>
        <Text style={styles.listText}>• Driving injury</Text>
        <Text style={styles.listText}>• Any other mechanism concerning for c-spine injury (fall from significant height, etc)</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('SpineXRS1')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('SpineDC')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpineXRS1Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain C-spine X-ray series :</Text>
        <Text style={styles.baseText}>(C-spine X-Ray series includes AP and lateral films)</Text>
        <Text style={styles.baseText}>The findings are:</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Normal"
              onPress={() => this.props.navigation.navigate('SpineDC')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="Abnormal"
              onPress={() => this.props.navigation.navigate('SpineConsult')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpineConsultScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Consult Spine Surgery</Text>
        <Text style={styles.baseText}>Continue c-spine precautions</Text>
        <Text style={styles.baseText}>Imaging per spine surgery</Text>
      </View>
    );
  }
}
class SpineDCScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Discontinue c-spine precautions </Text>
      </View>
    );
  }
}
class SpineAMSScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Is the AMS significant and/or the patient is intubated?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('SpineCT')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('SpineXRS3')}>
            </Button>
          </View>
        </View>

      </View>
    );
  }
}
class SpineCTScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain c-spine CT with recons</Text>
        <Text style={styles.baseText}>Are the findings:</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Normal"
              onPress={() => this.props.navigation.navigate('SpineDC')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="Abnormal"
              onPress={() => this.props.navigation.navigate('SpineConsult')}>
            </Button>
          </View>
        </View>

      </View>
    );
  }
}
class SpineXRS3Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain C-spine X-ray series :</Text>
        <Text style={styles.baseText}>(C-spine X-Ray series includes AP and lateral films)</Text>
        <Text style={styles.baseText}>The findings are:</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Normal"
              onPress={() => this.props.navigation.navigate('SpinePain')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="Abnormal"
              onPress={() => this.props.navigation.navigate('SpineConsult')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class SpinePainScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>On physical exam, is there either:</Text>
        <Text style={styles.listText}>• Neck pain</Text>
        <Text style={styles.listText}>• Limited ROM</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('SpineChoice')}>
            </Button>
          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('SpineDC')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////// THORACIC SCREENS
class ThoracicScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Thoracic Trauma</Text>
        <Text style={styles.baseText}>Is Patient under 16 years old?</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('ThoracicMech')}>
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
class ThoracicMechScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Mechanism of Potential Chest Injury</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Blunt"
                onPress={() => this.props.navigation.navigate('ThoracicHemo')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title="Penetrating"
                onPress={() => this.props.navigation.navigate('Cancel')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}
class ThoracicHemoScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Patient Hemodynamics</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
              <Button
                title="Stable"
                onPress={() => this.props.navigation.navigate('ThoracicQ1')}>
              </Button>

          </View>
          <View style={{flex:1}} >
                      <Button
                title="Unstable"
                onPress={() => this.props.navigation.navigate('ThoracicUnstable')}>
              </Button>
          </View>
        </View>

      </View>
    );
  }
}
class ThoracicQ1Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Are ANY of the following present:</Text>
        <Text style={styles.listText}>• Rapid deceleration (Fall > 10ft, MVC > 25mph)</Text>
        <Text style={styles.listText}>• Other significant mechnism of injury or provider concern</Text>
        <Text style={styles.listText}>• Shortness of breath, labored breathing, or new O2 requirements</Text>
        <Text style={styles.listText}>• Chest wall tenderness to palpation</Text>
        <Text style={styles.listText}>• Subcutaneous emphysema</Text>
        <Text style={styles.listText}>• Altered mental status/intoxication</Text>
        <Text style={styles.listText}>• Distracting injury</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('ThoracicCXR')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('ThoracicQ2')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class ThoracicQ2Screen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>On exam, is there concern for thoracic spine injury based on:</Text>
        <Text style={styles.listText}>• Neurologic deficit</Text>
        <Text style={styles.listText}>• Significant tenderness</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('ThoracicCTchest')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('ThoracicNone')}>
            </Button>
          </View>
        </View>


      </View>
    );
  }
}
class ThoracicNoneScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>No further chest imaging</Text>
      </View>
    );
  }
}
class ThoracicUnstableScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Level 1 Pediatric Trauma Activation</Text>
        <Text style={styles.baseText}>Activate trauma team</Text>
        <Text style={styles.baseText}>Consider FAST</Text>
        <Text style={styles.baseText}>Obtain CXR</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Continue"
              onPress={() => this.props.navigation.navigate('ThoracicCXR')}>
            </Button>

          </View>
        </View>


      </View>
    );
  }
}
class ThoracicCXRScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain CXR</Text>
        <Text style={styles.baseText}>Is there concern for ANY:</Text>
        <Text style={styles.listText}>• Widened mediastinum</Text>
        <Text style={styles.listText}>• Thoracic spine injury</Text>

        <View style={{flexDirection: 'row', marginTop:20}}>
          <View style={{flex:1 , marginRight:10}} >
              
            <Button
              title="Yes"
              onPress={() => this.props.navigation.navigate('ThoracicCTchest')}>
            </Button>

          </View>
          <View style={{flex:1}} >
            <Button
              title="No"
              onPress={() => this.props.navigation.navigate('ThoracicQ2')}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
class ThoracicCTchestScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.titleText}>Obtain CT Chest w/ IV Contrast</Text>
        <Text style={styles.baseText}>If there is concern for thoracic spine injury and a CT is being ordered to evaluate the T spine, it is okay to order CT chest with spine recons as the radiation increment is negligible.</Text>
        <Text style={styles.baseText} onPress={() => this.props.navigation.navigate('ThoracicInfo')}>See more info <Ionicons name="ios-information-circle-outline" style={styles.linkText}></Ionicons></Text>
      </View>
    );
  }
}
class ThoracicInfoScreen extends React.Component {
    static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', marginRight:10, marginLeft:20}}>
        <Text style={styles.baseText}>In general, the chest CT is primarily useful to evaluate for a traumatic aortic injury. If there is concern for this based on the mechanism of injury, hemodynamics, different BPs in upper extremities, or CXR findings - a CT with IV contrast should be obtained to assess for aortic injury</Text>
      </View>
    );
  }
}





/////////////////////////////////////////////////////////////////////////////////////////////////// stack variables
const HomeStack = StackNavigator({
  Home: { screen: HomeScreen}
});

const AbdominalStack = StackNavigator({
  Abdomen: { screen: AbdominalScreen },
  Cancel: { screen: CancelScreen },
  Q1: { screen: Q1Screen },
  Q2Setting: { screen: Q2SettingScreen },
  Q2SettingGCS: { screen: Q2SettingGCSScreen},
  Q2SettingGCSUnder: { screen: Q2SettingGCSUnderScreen},
  Q2SettingGCSOver: { screen: Q2SettingGCSOverScreen},
  Q2SettingKidney: { screen: Q2SettingKidneyScreen},
  Q2SettingNoKidney: { screen: Q2SettingNoKidneyScreen},
  Labs: { screen: LabsScreen},
  Q3Abd: { screen: Q3AbdScreen}
});

const HeadStack = StackNavigator({
  Head: { screen: HeadScreen },
  Cancel: { screen: CancelScreen },
  HeadQ1Under: { screen: HeadQ1UnderScreen},
  HeadQ2Under: { screen: HeadQ2UnderScreen},
  HeadCTnoncon: { screen: HeadCTnonconScreen},
  HeadNoCT: { screen: HeadNoCTScreen},
  HeadClinicalJudgeUnder: { screen: HeadClinicalJudgeUnderScreen},
  HeadQ1Over: { screen: HeadQ1OverScreen},
  HeadQ2Over: { screen: HeadQ2OverScreen},
  HeadClinicalJudgeOver: { screen: HeadClinicalJudgeOverScreen}
});

const SpineStack = StackNavigator({
  Spine: { screen: SpineScreen },
  Cancel: { screen: CancelScreen },
  SpineQ1: {screen: SpineQ1Screen},
  SpineNeuro: {screen: SpineNeuroScreen},
  SpineNeck: {screen: SpineNeckScreen},
  SpineInjury: {screen: SpineInjuryScreen},
  SpineDC: {screen: SpineDCScreen},
  SpineXRS1: {screen: SpineXRS1Screen},
  SpineConsult: {screen: SpineConsultScreen},
  SpineXRS2: {screen: SpineXRS2Screen},
  SpineCT2: {screen: SpineCT2Screen},
  SpineChoice: {screen: SpineChoiceScreen},
  SpineAMS: {screen: SpineAMSScreen},
  SpineXRS3: {screen: SpineXRS3Screen},
  SpineCT: {screen: SpineCTScreen},
  SpinePain: {screen: SpinePainScreen}
});

const ThoracicStack = StackNavigator({
  Chest: { screen: ThoracicScreen },
  Cancel: { screen: CancelScreen },
  ThoracicMech: { screen: ThoracicMechScreen },
  ThoracicHemo: { screen: ThoracicHemoScreen },
  ThoracicQ1: {screen: ThoracicQ1Screen },
  ThoracicQ2: {screen: ThoracicQ2Screen},
  ThoracicNone: {screen: ThoracicNoneScreen},
  ThoracicUnstable: {screen: ThoracicUnstableScreen},
  ThoracicCXR: {screen: ThoracicCXRScreen},
  ThoracicCTchest: {screen: ThoracicCTchestScreen},
  ThoracicInfo: {screen: ThoracicInfoScreen}
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Head: { screen: HeadStack },
    Spine: { screen: SpineStack },
    Chest: { screen: ThoracicStack },
    Abdomen: { screen: AbdominalStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Abdomen') {
          iconName = `ios-walk${focused ? '' : '-outline'}`;
        } else if (routeName === 'Head') {
          iconName = `ios-sad${focused ? '' : '-outline'}`;
        } else if (routeName === 'Spine') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Chest') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);



/////////////////////////////////////////////////// Stylesheets

const styles = StyleSheet.create({
  baseText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom:5
  },
  centerText:{
    textAlign:"center",
    textAlignVertical:"center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    lineHeight: 30
  },
  listText: {
    textAlign:'left',
    lineHeight: 25
  },
  linkText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom:5,
    color:"#007AFF"
  }
});

import React from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';
import HealthSlider from './Slider';


class HealthTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = ({
      fatigue: 1,
      stress: 1,
      aches: 1
    });
  }

  getMorningEvening() {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 12) {
      return "Evening"
    } else {
      return "Morning"
    }
  }
  
  handleSubmit(e) {
    // todo, send to svc
    console.log(this.state);
  }
  
  handleValueChange(name, value) {
    if (name == "sliderFatigue") {
      this.setState({fatigue: value});
    } else if (name == "sliderStress") {
      this.setState({stress: value});
    } else if (name == "sliderAches") {
      this.setState({aches: value});
    }
    console.log(name);
    console.log(value);
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>Good {this.getMorningEvening()}, Chris!</Text>
        <Text style={styles.text}>On a scale of 1 - 10, 1 being horrible, 10 being great, rank the following.</Text>
        
        <View>
          <Text style={styles.text}>What is your fatigue level?</Text>
          <HealthSlider name="sliderFatigue" value={this.state.fatigue} minimumValue={1} maximumValue={10} step={1.00} onChange={this.handleValueChange} />
        </View>

        <View>
          <Text style={styles.text}>What is your stress level?</Text>
          <HealthSlider name="sliderStress" value={this.state.stress} minimumValue={1} maximumValue={10} step={1.00} onChange={this.handleValueChange} />
        </View>

        <View>
          <Text style={styles.text}>What is your aches/pains level?</Text>
          <HealthSlider name="sliderAches" value={this.state.aches} minimumValue={1} maximumValue={10} step={1.00} onChange={this.handleValueChange} />
        </View>
        <Button title="submit" onPress={this.handleSubmit}></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default HealthTracker;
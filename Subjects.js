//Subjects.js 
 
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addSubject } from './SubjectsActions';

class Subjects extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Select Subjects Below!</Text>
        {
          this.props.subjects.all_subjects.map((subject, index) => (
            <Button
              key={ subject }
              title={ `Add ${ subject }` }
              onPress={() =>
                this.props.dispatch(addSubject(index))
              }
            />
          ))
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>      
    )
  }
}

const mapStateToProps = (state) => {
    const { subjects } = state
    return { subjects }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
 
// ...
export default connect(mapStateToProps)(Subjects);
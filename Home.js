//Home.js 
 
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
 
class Home extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>You have {this.props.subjects.current.length} subjects</Text>
            {
                this.props.subjects.current.map((subject, index) => (
                    <Text key={subject}>{ `${index + 1}` + '. ' + `${subject[0]}` }</Text>
                ))
            }
            <Button
                title="Select more subjects"
                onPress={()=> 
                    this.props.navigation.navigate('Subjects') 
                }
            />
      </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {subjects} = state;
    console.log(state);
    return {subjects};
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

// ...
export default connect(mapStateToProps)(Home);
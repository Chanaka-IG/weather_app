import React from 'react'
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, } from 'react-native';

export default class App extends React.Component {
  state = {
    search: '',
  };
  

  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
        const { search } = this.state;
        console.log(search)
    return (
     <View style={styles.searchContainer}>   
      <SearchBar 
        lightTheme= {true}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        autoCapitalize="none"
      />
     </View> 
    );
   
  }

}


const styles = StyleSheet.create({
    searchContainer: {
     marginTop: 200,
     padding: 40
    },
  });
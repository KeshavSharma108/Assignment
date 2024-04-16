import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";

const GemStone = () => {
  const [apigem, setApigem] = useState("");

  const getAPIgem = async () => {
    const url = "http://192.168.1.3:3000/gemstones";
    let resultsgem = await fetch(url);
    resultsgem = await resultsgem.json();
    setApigem(resultsgem);
    //console.warn(resultsgem);
  };
  useEffect(() => {
    getAPIgem();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.heading}</Text>
      <View>
 
         
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>LIFE</Text>
            </View>
      

      </View>
<View style={{flexDirection:'row'}}>
      <View style={styles.containerValues}>
        <View>
          <Text>
            {Object.keys(item.data.LIFE).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
        </View>
        <View style={styles.containerValues}>

        <View>
          <Text>
            {Object.values(item.data.LIFE).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>BENEFIC</Text>
            </View>
      <View style={{flexDirection:'row'}}>

      <View style={styles.containerValues}>
        <View>
          <Text>
            {Object.keys(item.data.BENEFIC).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
        </View>
        <View style={styles.containerValues}>
        <View>
          <Text>
            {Object.values(item.data.BENEFIC).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
        </View>
</View>
<View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>LUCKY</Text>
            </View>


<View style={{flexDirection:'row'}}>
      <View style={styles.containerValues}>
        <View>
          <Text>
            {Object.keys(item.data.LUCKY).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
        </View>

        <View style={styles.containerValues}>

        <View>
          <Text>
            {Object.values(item.data.LUCKY).map((key) => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </Text>
        </View>
        </View>
        </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={apigem}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GemStone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: "red",
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
 containerValues:{
  flexDirection:'row',
  width:180,
  marginBottom:20,
  borderWidth:1
 }
});

import React, { useEffect, useState } from "react";
import { View, Text, SectionList, StyleSheet, StatusBar } from "react-native";

const Housecusps = () => {
  const [api, setApi] = useState("");

  const getAPIHouse = async () => {
    const url = "http://192.168.1.3:3000/houseCuspsAndSandhi";
    let results = await fetch(url);
    results = await results.json();
    setApi(results);
    // console.warn(results);
  };
  useEffect(() => {
    getAPIHouse();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.item}>
        <Text style={styles.title}>{item.house}</Text>
        <Text style={styles.title}>{item.degree}</Text>
        <Text style={styles.title}>{item.sign}</Text>
        <Text style={styles.title}>{item.sign_lord}</Text>
        <Text style={styles.title}>{item.start_lord}</Text>
        <Text style={styles.title}>{item.sub_lord}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.containerMain}>
      <SectionList
        sections={api}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { data } }) => (
          <View
            style={styles.header}
          >
            {Object.keys(data[0]).map((key) => (
              <View>
                <Text style={styles.headerText}>{key}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default Housecusps;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,

  },
  item: {
    height: 50,
    width: "100%",
    backgroundColor: "#f9c2ff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    marginVertical:10
  },
  headerText: {
    fontSize: 15,
    color: "white",
  },
  title: {
    fontSize: 14,

  },header:{
    height: 50,
    width: "100%",
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
});

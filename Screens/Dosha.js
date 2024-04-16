import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Dosha = () => {
  const [data, setData] = useState("");

  const getAPIDosha = async () => {
    const url = "http://192.168.1.3:3000/dosha";
    let resultDosha = await fetch(url);
    resultDosha = await resultDosha.json();
    setData(resultDosha);
    console.warn(resultDosha);
  };
  useEffect(() => {
    getAPIDosha();
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        {data[item].map((item) => {
          return (
            <View style={styles.container}>
              <Text style={styles.headingText}>{item.heading}</Text>
              <View style={{ flexDirection: "row" }}>
                {item.type === "KEY_PARAGRAPH" ? (
                  <View style={styles.headerTextContainer}>
                    {Object.keys(item.data).map((key) => (
                      <View>
                        <Text>{key}</Text>
                      </View>
                    ))}
                  </View>
                ) : null}
                {item.type === "KEY_PARAGRAPH" ? (
                  <View style={styles.headerValueContainer}>
                    {Object.values(item.data).map((key) => (
                      <View>
                        <Text>{key.toString()}</Text>
                      </View>
                    ))}
                  </View>
                ) : null}
                {item.type === "PARAGRAPH" ? (
                  <View>
                    <Text>
                      <View style={styles.headerTextParagraph}>
                        <Text>{item.data}</Text>
                      </View>
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <FlatList data={Object.keys(data)} renderItem={renderItem} />
    </View>
  );
};

export default Dosha;

const styles = StyleSheet.create({
  dataText: {
    width: 150,
    borderWidth: 1,
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerValueContainer: {
    width: "50%",
  },
  headerTextContainer: {
    width: "50%",
    marginHorizontal: 10,
  },
  headingText: {
    backgroundColor: "pink",
    color: "blue",
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  headerTextParagraph: {
    width: 350,
  },
});

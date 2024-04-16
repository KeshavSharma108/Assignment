import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const Report = () => {
  const [data, setData] = useState("");

  const getAPIData = async () => {
    const url = "http://192.168.1.3:3000/report";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    //  console.warn(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        {data[item].map((item) => {
          return (
            <View style={styles.container}>
              <Text style={styles.headingText}>{item.heading}</Text>
              {
                item.type === 'KEY_VALUE' ?        <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={styles.keyContainer}>
                  <Text style={{fontSize:20, color:'blue',borderBottomWidth:1}}>Keys</Text>
                  <Text>
                    {Object.keys(item.data).map((key) => (
                      <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>{key}</Text>
                      </View>
                    ))}
                  </Text>
                </View>
                <View style={styles.keyContainer}>
                  <Text style={{fontSize:20, color:'blue',borderBottomWidth:1}}>Values</Text>
                  <Text>
                    {Object.values(item.data).map((key) => (
                      <View style={styles.headerTextContainer}>
                        <Text  style={styles.headerTextValue}>{key}</Text>
                      </View>
                    ))}
                  </Text>
                </View>
              </View>:null
              }
       
       {item.type === "PARAGRAPH" ? (
                  <View >
                    <Text>
                      <View style={styles.headerTextParagraph}>
                        <Text>{item.data}</Text>
                      </View>
                    </Text>
                  </View>
                ) : null}
           
<View style={{width:"100%",marginBottom:10}}>
{/* {item.type === "KEY_PARAGRAPH" ? (
                  <View style={styles.headerTextContainer}>
             
                      {Object.keys(item.data).map((key) => (
                        <View>
                          <Text >{key}</Text>
                        </View>
                      ))}
                 
                  </View>
                ) : null} */}

</View>



<View style={{width:"100%",marginBottom:10,marginHorizontal:10,justifyContent:'space-evenly'}}>
                {item.type === "KEY_PARAGRAPH" ? (
                  <View style={styles.headerTextContainer}>
             
                      {Object.entries(item.data).map((values) => (
                        <View>
                          <Text >{values}</Text>
                        </View>
                      ))}
                 
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
    <SafeAreaView>
      <FlatList data={Object.keys(data)} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  dataText: {
    width: 150,
    borderWidth: 1,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  headingText: {
    backgroundColor: "pink",
    color: "blue",
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  keyContainer: {
    width: 150,
    borderWidth: 1,
    alignItems: "center",
    marginHorizontal: 2,
  },

  headerText: {
fontSize:15,
marginHorizontal:10,
marginBottom:10,

  },
  headerTextContainer: {
    width: "100%",
    alignItems:'center',
    flexDirection:'column',
  },headerTextValue:{
    fontSize:14,
    width:80,
    marginHorizontal:10,
    marginBottom:7,
  },  headerTextParagraph: {
    width:350
  },
});

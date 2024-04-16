import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { TabBar } from 'react-native-tab-view/src/TabBar';
import { Dosha, GemStone, Housecusps, Report } from '../Screens';

const renderScene = SceneMap({
  first: Report,
  second: Housecusps,
  third: Dosha,
  fourth: GemStone,
});

const Tabview=()=> {
 
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Report' },
    { key: 'second', title: 'HouseCupsAndSandhi' },
    { key: 'third', title: 'Dosha' },
    { key: 'fourth', title: 'Gemstones' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
       renderTabBar={Tabbar}       
    />
    

   
  );

}

const Tabbar =(props)=>(
  <TabBar
  {...props}
  indicatorStyle={{ backgroundColor: 'orange',}}
  style={{ backgroundColor: '#FFFFFF' ,}}
  labelStyle={{color:'#7B7D82',fontSize:12}}
  pressColor='orange'
  tabStyle={{borderRightWidth:1,borderRightColor:'#E6E6E6',}}
 
 />
)

export default Tabview


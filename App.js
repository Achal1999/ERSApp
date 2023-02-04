// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Text, View,Image, flexWrap,TouchableOpacity,FlatList,ScrollView,SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 //import {createStackNavigator} from '@react-navigation/stack';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import  steps  from './components/steps';
 import material from './components/material';
 import Books from './components/material_buttons/Books';
 import General from './components/General';
 import Glossary from './components/Glossary';
 import resize from './resize'

const Stack=createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ERS" screenOptions={{headerShown:false}}>
        <Stack.Screen name="ERS" component={Ers} />
         <Stack.Screen name="Step" component={steps} />
 
         <Stack.Screen name="Material" component={material} />
        <Stack.Screen name="General" component={General} />
        <Stack.Screen name="Glossary" component={Glossary} /> 



        {/* <Stack.Screen name="Book" component={Books} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


function Ers({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#a62236'}}>
    <View style={styles.border}>

        <View style={styles.border2}> 
        <StatusBar backgroundColor='#a62236'/>
           <Logo/>
           <Heading/>
           <Button navigationObject={navigation}/>
           <Footer/>
             

        </View>
         </View>
    </SafeAreaView>
  );
}

function Logo()
{
  return(
  <View style={{flexDirection:'row',width:'100%', height:'20%'}}>
  <Image source={require('./assets/logoersn.png')} style={styles.img}/>
    <View style={{flexDirection:'column',flex:2}}>
    <Text style={styles.txt}>foundation{"\n"}for advancement{"\n"}in conservation</Text>
    <Text style={{fontWeight:'bold',flexWrap:'wrap',flex:1,marginTop:'5%',marginLeft:'5%'}}>Protecting Cultural{"\n"}Heritage</Text>
  </View>
  </View>
  );
}

function Heading()
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text  style={styles.head}>  EMERGENCY{"\n"}  RESPONSE &{"\n"}SALVAGE GUIDE</Text>
    </View>
  );
}

function Button({navigationObject})
{
  return(
    <View style={{flexDirection:'column',flex:2,alignItems:'center',margin:10}}>
      <View style={{flexDirection:'row', flex:1}}>
        <TouchableOpacity  onPress={()=>navigationObject.navigate("Step")} style={{backgroundColor:'#a62236',justifyContent:'center',flex:1,padding:'5%',margin:'3%'}}><Text style={styles.buttontxt}>Step-{"\n"}By-Step{"\n"}Guide</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigationObject.navigate("Material")} style={{backgroundColor:'#004967',justifyContent:'center',flex:1,padding:'5%',margin:'3%'}}><Text style={styles.buttontxt}>Material-{"\n"}Specific{"\n"}Salvage</Text></TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row',flex:1}}>
      <TouchableOpacity onPress={()=>navigationObject.navigate("General")} style={{backgroundColor:'#598599',justifyContent:'center',flex:1,padding:'5%',margin:'3%'}}><Text style={styles.buttontxt}>General{"\n"}Salvage{"\n"}Techniques</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigationObject.navigate("Glossary")} style={{backgroundColor:'#d98d3a',justifyContent:'center',flex:1,padding:'5%',margin:'3%'}}><Text style={styles.buttontxt}>Glossary</Text></TouchableOpacity>
      </View>
   </View>
  );
}

function Buttons()
{
 const [data,setdata]=useState([
    {id:'1', name:'Step-By-Step Guide',backgroundColor:'#a62236'},
    {id:'2', name:'Material-Specific Salvage',backgroundColor:'#004967'},
    {id:'3', name:'General Salvage Techniques', backgroundColor:'#598599'},
    {id:'4', name:'Glossary', backgroundColor:'#d98d3a'}
  ])
  return(
    <View style={{flex:2  }}>   
    
       <FlatList style={styles.flatlist}
      data={data} numColumns={2} renderItem={({item})=><View style={{flex:1, margin:10,justifyContent:'space-between'
      }}>
        <TouchableOpacity style={{backgroundColor:item.backgroundColor,justifyContent:'center',flex:1}}><Text style={{color:'white',textAlign:'center',fontSize:18,margin:10}}>{item.name}</Text></TouchableOpacity></View>}
    />
   
    </View>
   
  );
}

function Footer()
{
  return(
     <View style={{flexDirection:'column',flex:1,alignItems:'center'}}>
       <Text style={{paddingBottom:'5%',fontSize:16,textAlign:'center'}}>© FOUNDATION FOR ADVANCEMENT{"\n"}IN CONSERVATION{"\n"}CREATIVE COMMONS LICENSE X</Text>
       <TouchableOpacity style={{backgroundColor:'#a62236',width:'70%',alignItems:'center'}} onPress={()=>alert('Call NHR clicked')}><Text style={{color:'white',fontSize:20}}>CALL NHR</Text></TouchableOpacity>

     </View>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border:
    {
      borderColor:'#a62236',
    borderWidth:30,
    flex:1,
    flexDirection:'column'
    },
    border2:
        {
            borderColor:'black', 
            borderWidth:2,
            maxWidth:'100%',
            flex:1,
            backgroundColor:'#f5e8ea',
            flexDirection:'column',
           
        },
    img:
    {
      height:'60%',
      marginLeft:'5%',
      marginTop:'5%',
      flex:1,
      resizeMode:'contain'
    },
      txt:
      {
        marginLeft:'5%',
        marginTop:'20%',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexWrap:'wrap'
      },
      head:
      {
       flex:1,
       fontWeight:'bold',
       fontSize:35,
       
      },
      buttontxt:
      {
       padding:'2%',
       fontWeight:'bold',
       color:'white',fontSize:17,
       textAlign:'center',
       margin:5  
      },
      flatlist:
      {
        flex:1
      }
});















////////////////////////////////////////////////////////////////////////////////////////////////

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer}  from '@react-navigation/native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { HomeScreen } from './Screens/HomeScreen';
// import {Profile} from './Screens/Profile';


// const Stack = createNativeStackNavigator();

// export default function App() {

  
//   return (

//    <NavigationContainer> 
//       <Stack.Navigator  >
         
//           <Stack.Screen name="Home" component={HomeScreen}/>
//           <Stack.Screen name="Prof" component={Profile}/>


//       </Stack.Navigator>  
//     </NavigationContainer> 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

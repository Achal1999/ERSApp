
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, FlexDirection, TouchableOpacity, Alert, fontWeight, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function material ({navigation})
{
    return(
<SafeAreaView style={{flex:1, backgroundColor:'#616164'}}>       
<View style={styles.border}>
    <View style={styles.border2} >
    <StatusBar backgroundColor='#616164'/>

  <Logo3/>
  <Screen navigationObject={navigation}/>

  
  </View>
</View>
<Navigation navigationObject={navigation}/>
</SafeAreaView>
    );
};

function Logo3()
{
    return(
 <View style={{flexDirection:'row',width:'100%',flex:1}}>
  <Image source={require('../assets/logoersn.png')} style={styles.img}/>
    <View style={{flex:2}}>
      <Text style={styles.txt}>EMERGENCY{"\n"}RESPONSE &{"\n"}SALVAGE GUIDE</Text>
    </View>
 </View>
    );
}

function Screen({navigationObjectt})
{
    const [buttons,setbuttons]=useState([
        {id:'1', name:'Books',backgroundColor:'#a62236', navigate:"Book"},
        {id:'2', name:'Ceramics',backgroundColor:'#004967', navigate:"Book"},
        {id:'3', name:'eRecords', backgroundColor:'#598599', navigate:"Book"},
        {id:'4', name:'Furniture', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'5', name:'Framed Art', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'6', name:'Metals', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'7', name:'Organics', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'8', name:'Photographs', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'9', name:'Stone', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'10', name:'Natural History', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'11', name:'Techniques', backgroundColor:'#d98d3a', navigate:"Book"},
        {id:'12', name:'Textiles', backgroundColor:'#d98d3a', navigate:"Book"},



    ])

    return(
        <View style={{flex:2}}>   
        
        <FlatList style={styles.flatlist}
       data={buttons} numColumns={3} renderItem={({item})=><View style={{flex:1, margin:10,justifyContent:'space-between'
       }}><TouchableOpacity onPress={()=>navigationObjectt.navigate("Book")} style={{backgroundColor:item.backgroundColor,justifyContent:'center',flex:1}}><Text style={{color:'black',textAlign:'center',fontSize:18,margin:10}}>{item.name}</Text></TouchableOpacity></View>}
     />
     </View>
    );
}

function Navigation({navigationObject})
{

  return(
    <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'flex-end',maxHeight:'11%'}}>
        <TouchableOpacity  onPress={()=>navigationObject.navigate("Step")} style={{backgroundColor:'#a62236',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>Step-{"\n"}By-Step{"\n"}Guide</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigationObject.navigate("Material")} style={{backgroundColor:'#004967',justifyContent:'center',flex:1}}><Text style={styles.buttontxts}>Material-{"\n"}Specific{"\n"}Salvage</Text></TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigationObject.navigate("General")} style={{backgroundColor:'#d98d3a',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>General{"\n"}Salvage{"\n"}Techniques</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigationObject.navigate("Glossary")} style={{backgroundColor:'#598599',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>Glossary</Text></TouchableOpacity>
   </View>


  );
}



export default material;

const styles=StyleSheet.create({
   border:
    {borderColor:'#616164',
    // borderBottomColor:'#eeeeef',
    borderBottomWidth:0,
    borderWidth:30,
    flex:5,
    flexDirection:'column'},
    border2:
        {
            borderColor:'black', 
            borderBottomColor:'#eeeeef',
            borderWidth:2,
            maxWidth:'100%',
            flex:1,
            backgroundColor:'#eeeeef',
            flexDirection:'column',
           
        },
    button:
    {
        padding:'10%',
        width:  '40%',
        height:'20%'
    },
    img:
    {
    height:'60%',
    marginLeft:'5%',
    marginTop:'4%',
    flex:1,
    resizeMode:'contain'
    },
    txt:
    {
      marginLeft:'8%',
      marginTop:'11%',
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      flexWrap:'wrap',
      fontWeight:'bold',
      fontSize:25
    },
    flatlist:
    {
        flex:1   
    },
        buttontxt:
      {
       
        // textAlign:'center',
       
       textAlignVertical:'center',
       textAlign:'center',
        
        
       minHeight:'100%',
       color:'white',
       fontSize:17
      
       
        
      },
      buttontxts:
      {
        textAlignVertical:'center',
        textAlign:'center',
      
     
        
       minHeight:'160%',
       color:'white',
       fontSize:17
      
       
        
      }


})

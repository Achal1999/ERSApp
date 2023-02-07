
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, FlexDirection, TouchableOpacity, Alert, fontWeight, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Books from './material_buttons/Books';

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

function Screen({navigationObject})
{
    const [buttons,setbuttons]=useState([
        {id:'1', name:'Books', navigate:"Book",src:require('../assets/10.png')},
        {id:'2', name:'Ceramics', navigate:"Book",src:require('../assets/11.png')},
        {id:'3', name:'eRecords', navigate:"Book",src:require('../assets/12.png')},
        {id:'4', name:'Furniture', navigate:"Book",src:require('../assets/13.png')},
        {id:'5', name:'Framed Art', navigate:"Book",src:require('../assets/14.png')},
        {id:'6', name:'Metals',  navigate:"Book",src:require('../assets/15.png')},
        {id:'7', name:'Organics',  navigate:"Book",src:require('../assets/17.png')},
        {id:'8', name:'Photographs',  navigate:"Book",src:require('../assets/18.png')},
        {id:'9', name:'Stone', navigate:"Book",src:require('../assets/19.png')},
        {id:'10', name:'Natural History',  navigate:"Book",src:require('../assets/16.png')},
        {id:'11', name:'Techniques', navigate:"Book",src:require('../assets/7.png')},
        {id:'12', name:'Textiles',  navigate:"Book",src:require('../assets/20.png')},

      ])

    return(
        <View style={{flex:2}}>   
        
        <FlatList style={styles.flatlist}
       data={buttons} numColumns={3} renderItem={({item})=>
       <View style={{flex:1, margin:'6%',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap', flexDirection:'row' }}>
         <TouchableOpacity onPress={()=>navigationObject.navigate(item.navigate)} style={{justifyContent:'center',flex:1}}>
           <Image source={item.src} style={{alignContent:'center',justifyContent:'center',width:50,height:50,resizeMode:'contain'}}/>
           <Text  style={{color:'black',fontSize:'9%',marginTop:15,textAlign:'left'}}>
            {item.name}
           </Text>
       </TouchableOpacity>
       
       </View>}
     />
        {/* <FlatList style={styles.flatlist}
       data={buttons} numColumns={3} renderItem={({item})=><View style={{flex:1, margin:10,justifyContent:'space-between'
       }}><TouchableOpacity onPress={()=>navigationObjectt.navigate("Book")} style={{backgroundColor:item.backgroundColor,justifyContent:'center',flex:1}}><Text style={{color:'black',textAlign:'center',fontSize:18,margin:10}}>{item.name}</Text></TouchableOpacity></View>}
     /> */}
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
      
     
        paddingTop:'50%',

       minHeight:'145%',
       color:'white',
       fontSize:17
      
       
        
      }


})

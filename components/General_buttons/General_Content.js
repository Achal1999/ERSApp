
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, FlexDirection, TouchableOpacity, Alert, fontWeight, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHtml from "react-native-render-html";



function General_Content ({navigation})
{
    return(
<SafeAreaView style={{flex:1, backgroundColor:'#616164'}}>       
  <View style={styles.border}>
    <View style={styles.border2} >
      <StatusBar backgroundColor='#616164'/>
     
      <ScrollView >
        <Logo3/>
        <BtnLogo/>
        <Screentext/>
        </ScrollView>
        
     </View>
  </View>
<Navigation navigationObject={navigation}/>
</SafeAreaView>
    );
};

function Logo3()
{
    return(
 <View style={{flexDirection:'row',width:'100%',flex:1.5}}>
  <Image source={require('../../assets/logoersn.png')} style={styles.img}/>
    <View style={{flex:1.5}}>
      <Text style={styles.txt}>EMERGENCY{"\n"}RESPONSE &{"\n"}SALVAGE GUIDE</Text>
    </View>
 </View>
    );
}


function BtnLogo()
{
    return(
 <View style={{flexDirection:'row',minHeight:'5%',width:'100%',flex:1,marginTop:'20%'}}>
   <Image source={require('../../assets/10.png')} style={styles.imgs}/>
   <View style={{flex:1.5}}>
      <Text style={styles.txts}>General Salvage Techniques</Text>
      </View>
 </View>
    );
}

function Screentext()
{
  const html = `

<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c5{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c1{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c2{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c2 doc-content"><p class="c3"><span class="c5">Books:</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">&middot; If rinsing is necessary, hold book closed.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">&middot; Partially wet or damp: stand on top or bottom edge with</span></p><p class="c3"><span class="c1">&nbsp; covers opened to 90-degree angle; air dry.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">&middot; Very wet: lay flat on clean surface; interleave less than</span></p><p class="c3"><span class="c1">&nbsp; 20% of book with absorbent material; replace</span></p><p class="c3"><span class="c1">&nbsp; interleaving when damp.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">&middot; If too many books to air dry in 48 hours:</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">1. Wrap in freezer or waxed paper.</span></p><p class="c3"><span class="c1">2. Pack spine down in sturdy containers.</span></p><p class="c3"><span class="c1">3. Freeze.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c5">Paper:</span></p><p class="c0"><span class="c5"></span></p><p class="c3"><span class="c1">&middot; Air dry flat as individual sheets or small piles up to &frac14;&rdquo;.</span></p><p class="c3"><span class="c1">&nbsp; Interleave; replace interleaving when damp.</span></p><p class="c3"><span class="c1">&middot; Do not unfold or separate individual, wet sheets.</span></p><p class="c3"><span class="c1">&middot; If too many items for air drying:</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">1. Interleave (by groups or individually) with</span></p><p class="c3"><span class="c1">&nbsp; &nbsp; freezer or waxed paper.</span></p><p class="c3"><span class="c1">2. Pack papers or files supported and standing</span></p><p class="c3"><span class="c1">&nbsp; &nbsp; up in sturdy containers; pack containers only</span></p><p class="c3"><span class="c1">&nbsp; &nbsp; 90% full.</span></p><p class="c3"><span class="c1">3. Freeze.</span></p><p class="c0"><span class="c4"></span></p></body></html>
          `;
  return(
    <View style={{flex:1}}>
     <View >
       
               <RenderHtml source={{ html }} />
       </View>
     </View>  
 
  );
}


function Navigation({navigationObject})
{

  return(
    <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'flex-end',maxHeight:'11%'}}>
    <TouchableOpacity  onPress={()=>navigationObject.navigate("Step")} style={{backgroundColor:'#a62236',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>Step-{"\n"}By-Step{"\n"}Guide</Text></TouchableOpacity>
    <TouchableOpacity  onPress={()=>navigationObject.navigate("Material")} style={{backgroundColor:'#004967',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>Material-{"\n"}Specific{"\n"}Salvage</Text></TouchableOpacity>
  
  <TouchableOpacity onPress={()=>navigationObject.navigate("General")} style={{backgroundColor:'#d98d3a',justifyContent:'center',flex:1}}><Text style={styles.buttontxts}>General{"\n"}Salvage{"\n"}Techniques</Text></TouchableOpacity>
  <TouchableOpacity onPress={()=>navigationObject.navigate("Glossary")} style={{backgroundColor:'#598599',justifyContent:'center',flex:1}}><Text style={styles.buttontxt}>Glossary</Text></TouchableOpacity>
</View>


  );
}



export default General_Content;

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
    height:'100%',
    marginLeft:'3%',
    marginTop:'5%',
    flex:1,
    resizeMode:'contain'
    },
    txt:
    {
      marginLeft:'6%',
      marginTop:'11%',
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      flexWrap:'wrap',
      fontWeight:'bold',
      fontSize:22
    },
    txts:
    {
      marginLeft:'1%',
      
      alignItems:'center',
      justifyContent:'center',
      flex:2,
      fontWeight:'bold',
      fontSize:'25%'
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
      
       
        
      },
      imgs:
      {
      height:'80%',
      marginLeft:'1%',
     
      flex:1,
      resizeMode:'contain'
      },


})

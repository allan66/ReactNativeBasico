import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Button} from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {consumido:0, status:'Ruim', pct:'0%'}
    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
 }
 atualizar(){
   let s = this.state;
   s.pct= Math.floor((s.consumido/2000)*100);
   if(s.pct >=100){
    s.status = "Bom"
   }else {
     s.status="Ruim"
   }
   s.pct+="%"
   this.setState(s);
 }
 addCopo(){
 let s = this.state;
 s.consumido+=200;
 this.setState(s);
 this.atualizar();
 }

  render(){
    return (
      <View style ={styles.body}> 
      <ImageBackground source= {require('./waterbg.png')}  style={styles.bgimage}> 
      <View>
      <View style={styles.infoArea}>
<View style={styles.area}>
      <Text style={styles.areaTitulo}> Meta diária </Text>
      <Text style={styles.areaDado}> 2000ML </Text>
      </View>
<View style={styles.area}>
      <Text style={styles.areaTitulo}> Consumido </Text>
      <Text style={styles.areaDado}>{this.state.consumido}ML  </Text>
      </View>
<View style={styles.area}>
      <Text style={styles.areaTitulo}> Status </Text>
      <Text style={styles.areaDado}> {this.state.status} </Text>
      </View>
      </View>
      <View style={styles.pctArea}> 
      <Text style={styles.pctText}>{this.state.pct}</Text>
      </View>
      </View>
      <View style={styles.btnArea}>
      <Button title="Beber 250ML" onPress={this.addCopo}/>
      </View>
      </ImageBackground>
      </View>
     
    );
  }
  }

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:20
  },
  bgimage:{
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:50,
  },
  area:{
    flex:1,
    alignItems:'center',

  },
  areaTitulo:{
    color:'#45b2fc',
  },
  areaDado:{
    color:'#2b4274',
    fontSize:15,
    fontWeight:'bold',
  },
  pctArea:{
      marginTop:150,
      alignItems:'center',
    
  },
  pctText:{
    fontSize:80,
    color:'white',
    backgroundColor:'transparent',
  },
  btnArea:{
    marginTop:30,
    alignItems:'center',
  },
});

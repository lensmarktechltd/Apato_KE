import { useState } from "react";
import { SafeAreaView,Text, TouchableOpacity, View   } from "react-native";
import ApartmentListing from "../Screens/ApartmentListing"
import FontAwsome from "@expo/vector-icons/FontAwesome"
import ClientDash from "./ClientDash";

export default function Dashboard(){
    /*choices */
    const[choices,showChoices]=useState(true)
    const[listing,setListing]=useState(true)
    const[clientDashboard,setClientDashboard]=useState(false)
    /*choices */


    return(
        <SafeAreaView style={{
            height:"100%",
            width:"100%",
            backgroundColor:"white"
        }}>
            <View
        style={{
          height: '7%',
          width: '100%',
          borderColor: 'paleturquoise',
          borderStyle:"solid",
          borderWidth:1.5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
      
        <TouchableOpacity style={{
          marginTop: '3%',
          marginLeft: 10,
        }} >
        <FontAwsome
          name="bars"
          size={30}
          style={{
            color: 'paleturquoise',
            
          }}
        />
        </TouchableOpacity>
        <Text
          style={{
            color: 'brown',
            fontSize: 20,
            marginTop: '3%',
            fontWeight: 800,
            
          }}
        >
          {' '}
          APATO KENYA
        </Text>
        <TouchableOpacity style={{
          marginTop: '3%',
          marginRight: 10,
        }} >
        <FontAwsome
          name="bell"
          size={30}
          style={{
            
            color: 'paleturquoise',
          }}
        />
        </TouchableOpacity>
      </View>
            {choices&&(<View style={{
                height:"7%",
                width:"100%",
                backgroundColor:"white",
                display:"flex",
                flexDirection:"row",
                marginTop:5,
                
            }}>
                <TouchableOpacity style={listing?{
                    
                    width:"50%",
                    backgroundColor:"brown",
                    borderColor:'paleturquoise',
                    borderWidth:2,
                    borderRadius:20,
                }:{
                    
                    width:"50%",
                    backgroundColor:"paleturquoise",
                    borderWidth:1.5,
                    borderRadius:20,
                    borderColor:"brown",
                    
                }} onPress={()=>{
                    setListing(true)
                    setClientDashboard(false)
                }}>
                    <Text style={listing?{
                        textAlign:"center",
                        marginTop:12,
                        color:"paleturquoise"
                        
                    }:{
                        textAlign:"center",
                        marginTop:12,
                        color:"brown"
                        
                    }}>Listed Apartments</Text>
                </TouchableOpacity >
                <TouchableOpacity style={clientDashboard?{
                    
                    width:"50%",
                    backgroundColor:"brown",
                    borderColor:'paleturquoise',
                    borderWidth:2,
                    borderRadius:20,
                }:{
                    
                    width:"50%",
                    backgroundColor:"paleturquoise",
                    borderWidth:1.5,
                    borderRadius:20,
                    borderColor:"brown",
                    
                }} onPress={()=>{
                    setListing(false)
                    setClientDashboard(true)
                }}>
                    <Text style={clientDashboard?{
                        textAlign:"center",
                        marginTop:12,
                        color:"paleturquoise"
                        
                    }:{
                        textAlign:"center",
                        marginTop:12,
                        color:"brown"
                        
                    }}>My Apartment</Text>
                </TouchableOpacity>
            </View>)}

            {listing&&(
                <View style={{
                    height:"76%"
                }}>
                    <ApartmentListing/>
                </View>
            )}
            {clientDashboard &&(
                <View style={{
                    height:"100%"
                }}>
                    <ClientDash/>
                </View>
            )}
        </SafeAreaView>
    )
}
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
            backgroundColor:"red"
        }}>
            <View style={{
                height:"7%",
                width:"100%",
                backgroundColor:"black",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
            }}>
                <FontAwsome name="bars" size={30} style={{
                    color:"white",
                    marginTop:"3%",
                    marginLeft:10
                }} />
                <Text style={{
                    color:"white",
                    fontSize:20,
                    marginTop:"3%",
                }}> Apato KE</Text>
                <FontAwsome name="bell" size={30} style={{
                    marginTop:"3%",
                    marginRight:10,
                    color:"white",
                }} />

            </View>
            {choices&&(<View style={{
                height:"7%",
                width:"100%",
                backgroundColor:"white",
                display:"flex",
                flexDirection:"row",

            }}>
                <TouchableOpacity style={listing?{
                    
                    width:"50%",
                    backgroundColor:"grey",
                    borderBottomColor:"black",
                    borderBottomWidth:1.5,
                }:{
                    
                    width:"50%",
                    backgroundColor:"white",
                    
                    
                }} onPress={()=>{
                    setListing(true)
                    setClientDashboard(false)
                }}>
                    <Text style={{
                        textAlign:"center",
                        marginTop:20,
                        
                    }}>House Listing</Text>
                </TouchableOpacity >
                <TouchableOpacity style={clientDashboard?{
                    
                    width:"50%",
                    backgroundColor:"grey",
                   
                    borderBottomColor:"black",
                    borderBottomWidth:1.5,
                   
                }:{
                    
                    width:"50%",
                    backgroundColor:"white",
               
                }} onPress={()=>{
                    setListing(false)
                    setClientDashboard(true)
                }}>
                    <Text style={{
                        textAlign:"center",
                        marginTop:20,
                        
                    }}>Client Dashboard</Text>
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
                    height:"76%"
                }}>
                    <ClientDash/>
                </View>
            )}
        </SafeAreaView>
    )
}
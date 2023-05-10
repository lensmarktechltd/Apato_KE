import { useState } from "react";
import { SafeAreaView,Text, View   } from "react-native";

export default function ClientDash(){
    //info section
    const[info,showInfo]=useState(true)

    //billing board
    const[billing,showBilling]=useState(true)

    //last segment
    const[last,showLast]=useState(true)
    return(
        <SafeAreaView>
            
            {info&&(
                <View style={{
                   height:100,
                    backgroundColor:"blue",
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <View style={{
                        height:50,
                        backgroundColor:'black'
                    }}>
                        <Text>vi</Text>
                        <Text></Text>
                    </View>
                    <View style={{
                        backgroundColor:'grey',
                        height:50,
                    }}>
                        <Text>Li</Text>
                    </View>
                </View>
            )}
            {billing&&(<View style={{
                height:"40%",
                backgroundColor:"white",

            }}>
                <Text>
                    aksjkhdie
                </Text>
            </View>)}
            {last&&(<View style={{
                height:"50%",
                backgroundColor:"green",
            }}>
                <Text>gahsd</Text>
            </View>)}

        </SafeAreaView>
    )
}
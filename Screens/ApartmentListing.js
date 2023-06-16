import { SafeAreaView,ScrollView,Text,TouchableOpacity,View   } from "react-native";
import {list} from "../MockData/listinginfo"

export default function ApartmentListing(){

    return(
        <SafeAreaView>
            <Text style={{
                textAlign:"center",
            }} >Apartment Listing</Text>
            <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
            }}>
                <Text>Name</Text>
                <Text>located at</Text>
                <Text>status</Text>
                <Text>rooms</Text>
            </View>
            <ScrollView>
            {list.map(item=>(
                <TouchableOpacity key={item.id} style={{
                    display:"flex",
                    flexDirection:"row",
                    height:50,
                    marginTop:5,
                    backgroundColor:"white",
                    width:"96%",
                    marginLeft:"2%",
                    justifyContent:"space-between",
                    borderColor:'paleturquoise',
                    borderWidth:2,
                    borderRadius:20,
                }} >
                    <Text style={{
                        marginTop:15,
                        marginLeft:5,
                        color:"brown"
                    }}>{item.name}</Text>
                    <Text style={{
                        marginTop:15,
                        color:"brown"
                    }}>{item.location}</Text>
                    <Text style={{
                        marginTop:15,
                    }}>{item.status}</Text>
                    <Text style={{
                        marginTop:15,
                        marginRight:10,
                        color:"brown"
                    }}>{item.emptyRooms}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}
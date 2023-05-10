import { SafeAreaView,ScrollView,Text,TouchableOpacity,View   } from "react-native";
import {list} from "../MockData/listinginfo"

export default function ApartmentListing(){

    return(
        <SafeAreaView>
            <Text style={{
                textAlign:"center",
            }} >Apartment Listing</Text>
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
                }} >
                    <Text style={{
                        marginTop:15,
                        marginLeft:5
                    }}>{item.name}</Text>
                    <Text style={{
                        marginTop:15,
                    }}>{item.location}</Text>
                    <Text style={{
                        marginTop:15,
                    }}>{item.status}</Text>
                    <Text style={{
                        marginTop:15,
                        marginRight:10,
                    }}>{item.emptyRooms}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}
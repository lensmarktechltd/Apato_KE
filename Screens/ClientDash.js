import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function ClientDash() {
  const [numMonthsDisplayed, setNumMonthsDisplayed] = useState(2); // initially show 2 months, change as needed

  // define a function to handle the "View More" button press
  const handleViewMorePress = () => {
    setNumMonthsDisplayed(numMonthsDisplayed + 2); // show 2 more months each time the button is pressed
  };

  const handleViewLessPress = () => {
  setNumMonthsDisplayed (2); // reset the number of months displayed to the initial value
};

const handleScroll = event => {
  const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
  const isScrolledToBottom =
    layoutMeasurement.height + contentOffset.y >= contentSize.height;
  if (isScrolledToBottom ) {
   
  }
};

  return (
    <SafeAreaView
      style={{
        height: '88%',
        width: '100%',
        backgroundColor: 'whitesmoke',
      }}
    >
      

      <ScrollView style={{ height: '100%' }}
      contentContainerStyle={{ paddingVertical: 20 }}
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}>
      <Card
        style={{
          marginHorizontal: 10,
          marginTop: 0,
          margin: 10,
          borderRadius: 20,
          borderColor:'brown',
          borderWidth:1.5,
        }}
      >
        <Card.Content>
          <Title style={{ textAlign: 'center', fontWeight: 800 ,color:"brown" }}>ABARDEEN APARTMENTS</Title>
          <Paragraph style={{ textAlign: 'center', fontWeight: 600 }}>House No.2B</Paragraph>
        </Card.Content>
      </Card>

      <Card
  style={{
    marginHorizontal: 5,
    marginTop: 5,
    borderColor: 'paleturquoise',
    borderWidth:1.5,
    borderStyle:"solid",
  }}
>
  <Card.Content>
    <Title style={{ textAlign: 'center', fontWeight: 800 }}>Water Bill</Title>
    <Paragraph>Status: Unpaid</Paragraph>
  </Card.Content>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
    <Text style={{ fontWeight: 'bold' }}>Month</Text>
    <Text style={{ fontWeight: 'bold' }}>Unit</Text>
    <Text style={{ fontWeight: 'bold' }}>Cost</Text>
    <Text style={{ fontWeight: 'bold' }}>Pay</Text>
  </View>

  {/* map over an array of months to show the desired number */}
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(0, numMonthsDisplayed).map((month, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>{month}</Text>
            <Text>50</Text>
            <Text>5000 KES</Text>
            <TouchableOpacity
              style={{ backgroundColor: 'green', padding: 5, alignItems: 'center' }}
              onPress={() => alert(`You paid for ${month}!`)}
            >
              <Text style={{ color: 'white' }}>Pay</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* show the "View More" button if there are more months to display */}
         {/* show the "View More" and "View Less" buttons */}
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    {numMonthsDisplayed > 3 && (
      <TouchableOpacity
        style={{ backgroundColor: 'paleturquoise', padding: 10, alignItems: 'center' }}
        onPress={handleViewLessPress}
      >
        <Text style={{ color: 'black' }}>View Less</Text>
      </TouchableOpacity>
    )}
    {numMonthsDisplayed < 12 && (
      <TouchableOpacity
        style={{ backgroundColor: 'paleturquoise', padding: 10, alignItems: 'center' }}
        onPress={handleViewMorePress}
      >
        <Text style={{ color: 'black' }}>View More</Text>
      </TouchableOpacity>
    )}
  </View>
      </Card>

      <Card style={{
  marginHorizontal: 5,
  marginTop: 7,
  borderColor: 'palegreen',
  borderWidth:1.5,
}}>
  <Card.Content>
    <Title style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Rental Payments</Title>
    <Paragraph style={{ fontSize: 18 }}>Status: Unpaid</Paragraph>
  </Card.Content>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Month</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cost</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Due Date</Text>
  </View>

  {/* map over an array of months to show the desired number */}
  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(0, numMonthsDisplayed).map((month, index) => (
    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text style={{ fontSize: 16 }}>{month}</Text>
      <Text style={{ fontSize: 16 }}>5000 KES</Text>
      <TouchableOpacity
        style={{ backgroundColor: '#228B22', padding: 5, alignItems: 'center', borderRadius: 5 }}
        onPress={() => alert(`You paid for ${month}!`)}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Pay</Text>
      </TouchableOpacity>
    </View>
  ))}

  {/* show the "View More" and "View Less" buttons */}
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
    {numMonthsDisplayed > 3 && (
      <TouchableOpacity
        style={{ backgroundColor: 'palegreen', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={handleViewLessPress}
      >
        <Text style={{ color: 'black', fontSize: 16 }}>View Less</Text>
      </TouchableOpacity>
    )}
    {numMonthsDisplayed < 12 && (
      <TouchableOpacity
        style={{ backgroundColor: 'palegreen', padding: 10, alignItems: 'center', borderRadius: 5 }}
        onPress={handleViewMorePress}
      >
        <Text style={{ color: 'black', fontSize: 16 }}>View More</Text>
      </TouchableOpacity>
    )}
  </View>
</Card>

<Card style={{
  marginHorizontal: 20,
  marginTop: 20,
  borderColor: '#00FFFF',
  borderWidth:1.5,
}}>
  <Card.Content>
    <Title style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 , color:"brown" }}>Available Services</Title>
  </Card.Content>
</Card>

<Card
  style={{
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: '#00FFFF',
    borderWidth:1.5,
    marginBottom: 60,
  }}
>
  <Card.Content>
    <Title style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24 , color:"brown"}}>
      Make Report & Issues
    </Title>
  </Card.Content>
</Card>

      </ScrollView>
    </SafeAreaView>
  );
}

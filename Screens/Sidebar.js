import {DrawerLayoutAndroid, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator ();

function MyDrawer () {
  return (
    <Drawer.Navigator>
      {/* your sidebar items */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function HomeScreen () {
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      renderNavigationView={() => (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text>Sidebar content goes here</Text>
        </View>
      )}
    >
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* your main screen content goes here */}
        <Card
          style={{marginHorizontal: 5, marginTop: 7, backgroundColor: 'brown'}}
        >
          {/* your card content goes here */}
        </Card>
        <Card
          style={{marginHorizontal: 20, marginTop: 20, backgroundColor: 'cyan'}}
        >
          {/* your card content goes here */}
        </Card>
        <Card
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: 'cyan',
            marginBottom: 60,
          }}
        >
          {/* your card content goes here */}
        </Card>
      </View>
    </DrawerLayoutAndroid>
  );
}

function SettingsScreen () {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* your settings screen content goes here */}
    </View>
  );
}

export default function App () {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

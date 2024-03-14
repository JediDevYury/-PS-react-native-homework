import {Tabs} from "expo-router";

export default function CatalogLayout() {
  return (
   <Tabs screenOptions={{
     tabBarActiveTintColor: 'blue',
     headerShown: false,
   }}>
    <Tabs.Screen
      name="index"
      options={{
        href: null,
      }}
    />
     <Tabs.Screen
      name="main"
      options={{
        title: 'Main',
      }}
     />
     <Tabs.Screen
      name="order"
      options={{
        title: 'Order',
      }}
     />
   </Tabs>
  );
}

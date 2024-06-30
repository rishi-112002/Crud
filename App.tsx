import { NavigationContainer } from "@react-navigation/native";
// import AppNavigation from "./AppNavigation";
import Login from "./src/authenticate/Login";
import React from "react";
import AppNavigation from "./AppNavigation";


function App() {

  return (
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>

  )
}
export default App;
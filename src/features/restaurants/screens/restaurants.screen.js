import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info-cards.components";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

// styled Components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`} ;
`;

const SearchContainer = styled.View`
padding:${(props) => props.theme.sizes[1]};
background-color:transparent;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
  background-color:black;
    
`;
export const RestaurantsScreen = () => (
  <SafeArea >
    <SearchContainer >
      <Searchbar  placeholder="search restaurants"  style={{ backgroundColor: "white" }}  barStyle="light-content"/>
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantInfo />      
    </RestaurantListContainer>

  </SafeArea>
);


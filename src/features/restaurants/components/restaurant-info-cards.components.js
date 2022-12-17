import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';


// this bexomes a css styled component
// Styled Components

const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom:${(props) => props.theme.sizes[0]};
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.sizes[0]};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.sizes[0]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Subtitle = styled(Text)`
  padding-left: ${(props) => props.theme.sizes[0]};
  padding-bottom:  ${(props) => props.theme.sizes[0]};
  font-family: ${(props) => props.theme.fonts.body};
  color: grey;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
// 

export const RestaurantInfo = ( {restaurant = {}} ) => 
{
    const {
           name = "Karanji Restaurant",
           icon,
           photos = [
            "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
            "https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg"


            ],
           address = "100 street USA", 
           isOpenNow = true,
           rating = 5,
           isClosedTemporarily,

    } = restaurant;

return (
    <>  
    <RestaurantCard elevation={5}>
        
        <RestaurantCardCover key={name} source={{ uri: photos[0]}}/>
        <Title >{name}</Title>
        <Subtitle>{address}</Subtitle>

    </RestaurantCard>

    <RestaurantCard elevation={5}>
        
        <RestaurantCardCover key={name} source={{ uri: photos[1]}}/>
        <Title >{name}</Title>
        <Subtitle>{address}</Subtitle>

    </RestaurantCard>   
    </>
    );
};



    



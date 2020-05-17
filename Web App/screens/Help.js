import React, { Component } from "react";
import Faq from "react-faq-component";
import HeaderBar from "../components/HeaderBar";
import { Text, View, Image } from "react-native";

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What Was Your Inspiration For Making This App?",
            content: `7ds.`,
        },
        {
            title: "What Does it Do?",
            content:
                "dasdles.",
        },
        {
            title: "How We Built Obsidion",
            content: `dsme odssed Uipath to webscdss`,
        },
        
        {
            title: "Challenges We Ran Into",
            content: ".",
        },
        {
          title: "What Is Next For Obsidion",
          content: `W.`,
      },
    ],
};
 
const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "dark blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};
 
export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <HeaderBar pageName={"FAQ"} />

            <div>
                <Faq data={data} styles={styles} />
            </div>
            </View>
        );
    }
}
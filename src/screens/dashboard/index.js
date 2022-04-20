import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import WelcomeScreen from "../welcome-screen";
import DetailsScreen from "../detailScreen";
import Home from "../bottomTabScreens/home";
import Orders from "../bottomTabScreens/order";
import Search from "../bottomTabScreens/search";
import Wishlist from "../bottomTabScreens/wishlist";
import Account from "../bottomTabScreens/account";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const Tab = createMaterialBottomTabNavigator();


const Dashboard = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="black"
            labeled={true}
            barStyle={{ backgroundColor: 'white', height: 80 }}
            shifting={false}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Ionicons name="home-outline" size={24} />
                ),
            }} />
            <Tab.Screen name="Orders" component={Orders} options={{
                tabBarLabel: 'Orders',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="note-text-outline" size={24} />
                ),
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarLabel: 'Search',
                tabBarIcon: () => (
                    <Feather name="search" size={24} />
                ),
            }} />
            <Tab.Screen name="Wishlist" component={Wishlist}
                options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="cards-heart-outline" size={24} />
                    ),
                }} />
            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account-circle-outline" size={24} />
                    ),
                }} />
        </Tab.Navigator >
    );
};

export default Dashboard;
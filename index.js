// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Import a library to create a componentt
import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';

//Create a component 
const App = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </SafeAreaView>
);

//Render it to the device 
AppRegistry.registerComponent('albums',() => App)
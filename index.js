import {Navigation} from "react-native-navigation";
import {YellowBox} from 'react-native';
import startApp from './App';

YellowBox.ignoreWarnings(["Remote debugger is in a background tab"]);

Navigation.events().registerAppLaunchedListener(() => startApp());

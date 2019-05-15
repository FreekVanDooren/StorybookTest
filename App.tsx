import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Button, StyleSheet, Text, View} from 'react-native';
import StorybookUI from './storybook';

interface Props {
    componentId: string;
}

class StartScreen extends React.Component<Props> {
    toStoryBook() {
        Navigation.push(this.props.componentId,
            {
                component: {
                    name: 'storybook.app.book',
                    options: {
                        topBar: {
                            title: {
                                text: 'Storybook'
                            }
                        }
                    }
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Storybook" onPress={() => this.toStoryBook()}/>
                <Text>Well this works</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

Navigation.registerComponent('storybook.app.start', () => StartScreen);
Navigation.registerComponent('storybook.app.book', () => StorybookUI);
export default function () {
    Navigation.setDefaultOptions({
        topBar: {
            background: {
                color: '#039893'
            },
            title: {
                color: 'white',
            },
            backButton: {
                title: '', // Remove previous screen name from back button
                color: 'white'
            },
            buttonColor: 'white',
        },
        statusBar: {
            style: 'light'
        },
        layout: {
            orientation: ['portrait']
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysHide'
        },
        bottomTab: {
            textColor: 'gray',
            selectedTextColor: 'black',
            iconColor: 'gray',
            selectedIconColor: 'black',
        }
    });
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'storybook.app.start'
                        }
                    }
                ]
            }
        }
    });
};

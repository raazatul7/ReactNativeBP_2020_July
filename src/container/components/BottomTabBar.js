import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
//Icons
import inActiveBusiness from '../../assets/bussiness.png';
import activeBusiness from '../../assets/bussiness_active.png';
import inActiveEvents from '../../assets/event.png';
import activeEvents from '../../assets/event_active.png';
import inActiveHome from '../../assets/home.png';
import activeHome from '../../assets/home_active.png';
import inActiveMembership from '../../assets/membership.png';
import activeMembership from '../../assets/membership_active.png';
import inActiveQuiz from '../../assets/quiz.png';
import activeQuiz from '../../assets/quiz_active.png';

import fontFam from '../../common/Fonts';

const icon_width = wp('6%');
const icon_height = wp('6%');
const styles = StyleSheet.create({ iconStyle: { width: icon_width, height: icon_height, resizeMode: 'contain' } });

class BottomTabBar extends Component {

    constructor() {
        super()
        this.state = {
            routeNameSelected: 'Home'
        }
    }

    getActiveImage(routeName) {
        switch (routeName) {
            case 'Home':
                return activeHome
            case 'Events':
                return activeEvents
            case 'Quiz':
                return activeQuiz
            case 'Business':
                return activeBusiness
            case 'Membership':
                return activeMembership
        }
    }

    getInActiveImage(routeName) {
        switch (routeName) {
            case 'Home':
                return inActiveHome
            case 'Events':
                return inActiveEvents
            case 'Quiz':
                return inActiveQuiz
            case 'Business':
                return inActiveBusiness
            case 'Membership':
                return inActiveMembership
        }
    }

    activeColor(routeName) {
        switch (routeName) {
            case 'Home':
                return '#1ab6af'
            case 'Events':
                return '#6147b6'
            case 'Quiz':
                return '#005353'
            case 'Business':
                return '#30588d'
            case 'Memberships':
                return '#00796b'
        }
    }

    onPressTab(routeName) {
        this.props.jumpTo(routeName)
        this.setState({
            routeNameSelected: routeName
        })
    }

    render() {
        const { navigation } = this.props;
        const { routes } = navigation.state;
        return (
            <View style={{
                borderTopWidth: 0.5,
                borderTopColor: 'grey', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('10%'), width: wp('100%')
            }}>
                {routes && routes.map((route, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.onPressTab(route.routeName)}
                        >
                            <View style={{ justifyContent: 'center', width: wp('20%'), height: hp('10%') }}>
                                {navigation.state.index === index &&
                                    <View style={{ backgroundColor: 'white', height: hp('10%'), alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderColor: 'brown' }}>
                                        <Image source={this.getActiveImage(route.routeName)} style={[styles.iconStyle]} />
                                        <Text style={{ fontSize: hp('1.4%'), fontFamily: fontFam.medium, color: this.activeColor(route.routeName) }}>{route.routeName}</Text>
                                    </View>
                                }
                                {navigation.state.index !== index &&
                                    <View style={{ backgroundColor: 'white', height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={this.getInActiveImage(route.routeName)} style={styles.iconStyle} />
                                        <Text style={{ fontSize: hp('1.4%'), fontFamily: fontFam.medium }}>{route.routeName}</Text>
                                    </View>
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    );



                })}

            </View>
        )
    }
}

export default BottomTabBar;
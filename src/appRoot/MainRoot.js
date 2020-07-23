import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import fontFam from '../common/Fonts';

//tab icons
import inActiveBusiness from '../assets/bussiness.png';
import activeBusiness from '../assets/bussiness_active.png';
import inActiveEvents from '../assets/event.png';
import activeEvents from '../assets/event_active.png';
import inActiveHome from '../assets/home.png';
import activeHome from '../assets/home_active.png';
import inActiveMembership from '../assets/membership.png';
import activeMembership from '../assets/membership_active.png';
import inActiveQuiz from '../assets/quiz.png';
import activeQuiz from '../assets/quiz_active.png';
//drawer icons
import about from '../assets/menu_icons/about.png';
import contact from '../assets/menu_icons/contact.png';
import settings from '../assets/menu_icons/setting.png';
import sponsors from '../assets/menu_icons/sponsor.png';
import bookings from '../assets/menu_icons/my_booking.png';
import home from '../assets/menu_icons/home.png';
import news from '../assets/menu_icons/news.png';
import team from '../assets/menu_icons/our_team.png';
import donate from '../assets/menu_icons/donate.png';
import coupon from '../assets/menu_icons/coupon.png';
import gallery from '../assets/menu_icons/gallery.png';
import poll from '../assets/menu_icons/opinion.png';
// Screens
import Business from '../container/screen/main/business/Business';
import Events from '../container/screen/main/events/Events';
import Home from '../container/screen/main/Home';
import Membership from '../container/screen/main/memberships/Memberships';
import DrawerContent from '../container/components/DrawerContent';
import BottomTabBar from '../container/components/BottomTabBar';
import About from '../container/screen/main/drawer/About';
import ContactSamaj from '../container/screen/main/drawer/ContactSamaj';
import Settings from '../container/screen/main/drawer/settings/Settings';
import OpinionList from '../container/screen/main/drawer/polls/OpinionList';
import News from '../container/screen/main/drawer/news/News';
import MyBookings from '../container/screen/main/drawer/myBookings/MyBookings';
import OurTeam from '../container/screen/main/drawer/OurTeam';
import Sponsors from '../container/screen/main/drawer/Sponsors';
import Gallery from '../container/screen/main/drawer/Gallery';
import Coupons from '../container/screen/main/drawer/Coupons';
import Donate from '../container/screen/main/drawer/Donate';
import Profile from '../container/screen/main/drawer/profile/Profile';
import Quiz from '../container/screen/main/quiz/Quiz';

const icon_width = wp('6%');
const icon_height = wp('6%');
const styles = StyleSheet.create({
  iconStyle: {
    width: icon_width,
    height: icon_height,
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
    resizeMode: 'contain',
  },
});

const EventsStack = createStackNavigator(
  {
    Events: Events,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
);
const BusinessStack = createStackNavigator(
  {
    Business: Business,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const QuizStack = createStackNavigator(
  {
    Quiz: Quiz,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const MembershipStack = createStackNavigator(
  {
    Membership: Membership,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Image
            style={[styles.iconStyle]}
            source={focused ? activeHome : inActiveHome}
          />
        ),
      },
    },
    Events: {
      screen: EventsStack,
      navigationOptions: ({navigation}) => ({
        tabBarVisible:
          navigation.state.routes[navigation.state.index].routeName === 'PayPal'
            ? false
            : true,
        tabBarLabel: 'Events',
        tabBarIcon: ({focused}) => (
          <Image
            style={[styles.iconStyle]}
            source={focused ? activeEvents : inActiveEvents}
          />
        ),
      }),
    },

    Business: {
      screen: BusinessStack,
      navigationOptions: {
        tabBarLabel: 'Business',
        tabBarIcon: ({focused}) => (
          <Image
            style={[styles.iconStyle]}
            source={focused ? activeBusiness : inActiveBusiness}
          />
        ),
      },
    },
    Membership: {
      screen: MembershipStack,
      navigationOptions: ({navigation}) => ({
        tabBarVisible:
          navigation.state.routes[navigation.state.index].routeName ===
          'PaypalMembership'
            ? false
            : true,
        tabBarLabel: 'Membership',
        tabBarIcon: ({focused}) => (
          <Image
            style={[styles.iconStyle]}
            source={focused ? activeMembership : inActiveMembership}
          />
        ),
      }),
    },
    Quiz: {
      screen: QuizStack,
      navigationOptions: ({navigation}) => ({
        tabBarVisible: navigation.state.index > 0 ? false : true,
        tabBarLabel: 'Quiz',
        tabBarIcon: ({focused}) => (
          <Image
            style={[styles.iconStyle]}
            source={focused ? activeQuiz : inActiveQuiz}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
        showLabel: true,
        activeTintColor: null,
        inactiveTintColor: null,
        labelStyle: {
          marginTop: hp('2%'),
          fontFamily: fontFam.medium,
          fontSize: hp('1.4%'),
        },
        tabStyle: {
          backgroundColor: 'white',
        },
      },
      tabBarComponent: BottomTabBar,
      tabBarButtonComponent: (props) => (
        <BottomTabBar routeName={navigation.state.routeName} {...props} />
      ),
    }),
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const MyBookingsStack = createStackNavigator(
  {
    MyBookings: MyBookings,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const NewsStack = createStackNavigator(
  {
    News: News,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);
const OpinionStack = createStackNavigator(
  {
    OpinionList: OpinionList,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      swipeEnabled: false,
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={home} />
        ),
      },
    },
    MyBookings: {
      screen: MyBookingsStack,
      navigationOptions: {
        drawerLabel: 'My Bookings',
        drawerIcon: () => (
          <Image
            style={{height: wp('8%'), width: wp('8%')}}
            source={bookings}
          />
        ),
      },
    },
    OurTeam: {
      screen: OurTeam,
      navigationOptions: {
        drawerLabel: 'Our Team',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={team} />
        ),
      },
    },
    Sponsors: {
      screen: Sponsors,
      navigationOptions: {
        drawerLabel: 'Sponsors',
        drawerIcon: () => (
          <Image
            style={{height: wp('8%'), width: wp('8%')}}
            source={sponsors}
          />
        ),
      },
    },
    Coupons: {
      screen: Coupons,
      navigationOptions: {
        drawerLabel: 'Coupons',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={coupon} />
        ),
      },
    },
    OpinionList: {
      screen: OpinionStack,
      navigationOptions: {
        drawerLabel: 'Vote / Opinion Poll',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={poll} />
        ),
      },
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: {
        drawerLabel: 'Gallery',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={gallery} />
        ),
      },
    },
    News: {
      screen: NewsStack,
      navigationOptions: {
        drawerLabel: 'News',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={news} />
        ),
      },
    },
    Donate: {
      screen: Donate, //Dummy screen, for action goto DrawerContent.js
      navigationOptions: {
        drawerLabel: 'Donate',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={donate} />
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        drawerLabel: 'About',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={about} />
        ),
      },
    },
    Contact: {
      screen: ContactSamaj,
      navigationOptions: {
        drawerLabel: 'Contact',
        drawerIcon: () => (
          <Image style={{height: wp('8%'), width: wp('8%')}} source={contact} />
        ),
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: () => (
          <Image
            style={{height: wp('8%'), width: wp('8%')}}
            source={settings}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => {
        return {
          drawerLabel: () => null,
        };
      },
    },
  },
  {
    drawerPosition: 'left',
    drawerLockMode: 'locked-closed',
    drawerType: 'slide',
    unmountInactiveRoutes: true,
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width - 90,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
    },
  },
);
export default MainRoot = () => DrawerNavigator;

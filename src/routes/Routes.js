import React, {lazy} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from '../screens/loginView/LoginForm';
import RegisterForm from '../screens/registerView/RegisterView';
import Home from '../screens/home/Home';
import Start from '../screens/start/start/Start';
import Welcome from '../screens/welcome/Welcome';
import NoteView from '../screens/noteView/NoteView';
import NotesViews from '../screens/noteViews/NotesView';
import { useSelector } from 'react-redux';



const Stack = createNativeStackNavigator()

const routes = [
    {
        name: 'Login',
        component: LoginForm,
        options: {title: "Login",
            headerShown: false
        }
    },
    {
        name: 'Register',
        component: RegisterForm,
        options: {title: "Register",
            headerShown: false
        }
    },
    {
        name: 'Home',
        component: Home,
        options: {title: "Home",
            headerShown: false
        }
    },
    {
        name: 'Start',
        component: Start,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Welcome',
        component: Welcome,
        options: {
            headerShown: false
        }
    },
    {
        name: 'NotesView',
        component: NotesViews,
        options: {
            headerShown: false 
        }
    },
    {
        name: 'NoteView',
        component: NoteView,
        options: {
            headerShown: false
        }
    }
]


const Routes = () => {

    const {user, token} = useSelector((state) => state.account)

    const auth = Boolean(user) && Boolean(token)

    console.log('auth ==>', auth)

    return(
            <Stack.Navigator initialRouteName={"Welcome"} >
                
                {
                    routes.map(route => {
                        const name = route.name;
                        const Component = route.component; 
                        const options = route.options
                
                        return (
                            <Stack.Screen 
                                key={name}
                                name={name}
                                component={Component}
                                options={options}
                            />
                        )
                    })
                }
            </Stack.Navigator>
    )
}

export default Routes
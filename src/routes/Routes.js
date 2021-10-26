import React, {lazy} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../screens/loginView/LoginForm';
import RegisterForm from '../screens/registerView/RegisterView';
import Home from '../screens/home/Home';
import Start from '../screens/start/start/Start';



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
        options: {title: "Welcome",
            headerStyle: {
                backgroundColor: '#ef9b0f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: false
        }
    }
]


const Routes = () => {



    return(
            <Stack.Navigator initialRouteName={"Start"} >
                
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
import React, {lazy} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../screens/loginView/LoginForm';
import RegisterForm from '../screens/registerView/RegisterView';
import Home from '../screens/home/Home';



const Stack = createNativeStackNavigator()

const routes = [
    {
        name: 'Login',
        component: LoginForm,
        options: {title: "Login",
            headerStyle: {
                backgroundColor: '#ef9b0f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },}
    },
    {
        name: 'Register',
        component: RegisterForm,
        options: {title: "Register",
            headerStyle: {
                backgroundColor: '#ef9b0f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },}
    },
    {
        name: 'Home',
        component: Home,
        options: {title: "Home",
            headerStyle: {
                backgroundColor: '#ef9b0f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },}
    }
]


const Routes = () => {



    return(
            <Stack.Navigator initialRouteName={"Login"} >
                
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
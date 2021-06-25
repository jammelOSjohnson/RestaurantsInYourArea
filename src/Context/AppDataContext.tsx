import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//Import Address Api
import fetchAddressApi from '../Apis/fetchAddressApi';

const defaultState = undefined
export type Action = 'get_address';
export type Dispatch = (action: Action) => void;
export type value = typeof defaultState; 
//Create Context
export var AppDataContext = createContext<any>(undefined);



export function useAppData () {
    return useContext(AppDataContext);
}


//create reducer
function appDataReducer(state, action){
    switch(action.type){
        
        case "get_address":
            console.log("dispatching address:");
            console.log(action.payload.Address);
            return{
                ...state,
                Address: action.payload.Address
            };
        default:
            return state;
    }
}


//create provider
export default function AppDataProvider({ children }: { children: ReactNode}) {
    var Address = undefined;
    //Get Address
    var getAddress = function getAddress(currentState: { Address: string; }){

        var addressResult = ""; 

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            console.log(position);
            fetchAddressApi.get('',{
                params: {
                    "lat": position.coords.latitude.toString(),
                    "lon": position.coords.longitude.toString(),
                    "format": "json",
                    "accept-language": "en",
                    "polygon_threshold": "0.0"
                }
            })
            .then(response =>{
                let {data} = response;
                let {address} = data;
                console.log(data);
                addressResult = `${address.road}, ${address.postcode}, ${address.country_code.toUpperCase()}`;
                currentState.Address = addressResult;
                dispatch({
                    type: "get_address",
                    payload: currentState
                })
            }).catch(function(err){
                console.log(err);
                currentState.Address = "Enter Your Address";
                dispatch({
                    type: "get_address",
                    payload: currentState
                })
            })
        });

       
    }

    const [value, dispatch] = useReducer(appDataReducer, {
        Address,
        getAddress
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};


import * as types from './mutation-types'

const cardTemplate = {
    key: 'newyork',
    label: 'New York, NY',
    currently: {
        time: 1453489481,
        summary: 'Clear',
        icon: 'partly-cloudy-day',
        temperature: 52,
        apparentTemperature: 74.34,
        precipProbability: 0.20,
        humidity: 0.77,
        windBearing: 125,
        windSpeed: 1.52
    },
    daily: {
        data: [
            {icon: 'clear-day', temperatureMax: 55, temperatureMin: 34},
            {icon: 'rain', temperatureMax: 55, temperatureMin: 34},
            {icon: 'snow', temperatureMax: 55, temperatureMin: 34},
            {icon: 'sleet', temperatureMax: 55, temperatureMin: 34},
            {icon: 'fog', temperatureMax: 55, temperatureMin: 34},
            {icon: 'wind', temperatureMax: 55, temperatureMin: 34},
            {icon: 'partly-cloudy-day', temperatureMax: 55, temperatureMin: 34}
        ]
    }
}

const cities = {
    'newyork': 'New York, NY',
    'austin': 'Austin, TX',
    'boston': 'Bostan, MA',
    'chicago': 'Chicago, IL',
    'portland': 'Portland, OR',
    'sanfrancisco': 'San Francisco, CA',
    'seattle': 'Seattle, WA'
}


// adds a card (async)
export const addCard = ({commit}, name) => {
    commit(types.TOGGLE_SPINNER, true)
    return new Promise(resolve => {
        setTimeout(() => {
            commit(types.ADD_CARD, Object.assign({}, cardTemplate, {key:name,label:cities[name]}))
            commit(types.TOGGLE_SPINNER, false)
            resolve()
        }, 1000)
    })
}


export const openCityDialog = ({commit}) => {
    return new Promise(resolve => {
        commit(types.OPEN_CITY_DIALOG)
        resolve()
    })
}
export const closeCityDialog = ({commit}) => {
    return new Promise(resolve => {
        commit(types.CLOSE_CITY_DIALOG)
        resolve()
    })
}

import React from 'react'
import { StyleSheet, Text,Image, View } from 'react-native'
import moment from 'moment-timezone'

const FutureForecast = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>

            {
                data && data.length > 0 ? 

                data.map((data, idx) => (

                    idx !== 0 &&  <FutureForecastItem key={idx} forecastItem={data}/>
                ))

                :

                <View/>
            }
          
            

        </View>
    )
}

const FutureForecastItem = ({forecastItem}) => {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
    return (
        <View  style={styles.futurefocast}>
            <Text  style={styles.date}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>

        </View>
    )
}

export default FutureForecast


const styles = StyleSheet.create({

    image:{
        height:100,
        width:100
    },
    futurefocast:{
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth:1, 
        padding: 20,
        marginLeft:5,
        flex:1

    },  
    date : {
        fontSize:  20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: '200',
        marginBottom: 15
    },
    temp:{
        fontSize: 15,
        fontWeight: '100',
        color: 'white',
        textAlign: 'center'

    },  

})

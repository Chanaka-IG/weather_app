
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment-timezone'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WeatherItems = ({title, value, unit, sys}) => {
    return (
        <View style={styles.weatherItemContainer} >
            <Text style={styles.weathetItemTitle} >{title}</Text>
            <Text style={styles.weathetItemValue} >{value}{unit}</Text>
        </View>
    )
}

const DataTime = ({sys,current,city, lat, lon,timezone}) => {


    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        setInterval(() => {
        const time= new Date();
        const month = time.getMonth();
        const date =time.getDate();
        const day =time.getDay();
        const hour =time.getHours();
        const hoursIn12HrFormat = hour >= 13 ? hour %12 : hour;
        const minutes = time.getMinutes();
        const ampm = hour >= 12 ? 'AM' : 'PM';

        setTime (( hoursIn12HrFormat < 10? '0' + hoursIn12HrFormat : 
            hoursIn12HrFormat) + ':' + (minutes < 10? '0' + minutes: minutes)
       + ' ' + ampm)
       setDate(days[day] + ', ' + date+ ' ' + months[month])
      },1000);
    }, [])

    return (
        
       <View style={styles.container}> 
           <View>
               <View>
                   <Text style={styles.heading} >{time}</Text>
               </View>
               <View>
                   <Text style={styles.subheading} >{date}</Text>
               </View>

               <View style={styles.weatherItems}>
                  <WeatherItems title="humidity" value={current? current.humidity : ""} unit ="%" />
                  <WeatherItems title="preasure" value={current? current.pressure : ""} unit ="hPA" />
                  <WeatherItems title="sun-rise" value={sys? moment.tz(sys.sunrise * 19800, timezone ).format('HH:mm'): ""} unit ="AM" />
                  <WeatherItems title="sun-set" value={sys? moment.tz(sys.sunset * 19800, timezone ).format('HH:mm') : ""} unit ="PM" />
            
               </View>
               
           </View>
                <View style={styles.country} >
                   <Text style={styles.timezone}>{timezone}</Text>
               </View>
     

     </View>   
    )
}

export default DataTime;

const styles = StyleSheet.create({
    container : {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 60,
         flex:1.5,
         flexDirection: 'row',
         justifyContent: 'space-between'
     },
     heading:{
         fontSize: 25,
         color: 'white',
         fontWeight: '100'
     },
     subheading:{
        fontSize: 25,
        color: "white",
        fontWeight: '300', 
     },
     country:{
         textAlign: 'right',
         marginTop:7
     },
     timezone:{
        fontSize: 20,
        color: 'white',
     },
     area:{
        fontSize: 15,
        color: 'white',
        fontWeight: '700'
     },
     weatherItems:{
         backgroundColor: '#18181b99',
         borderRadius: 10,
         padding: 10,
         marginTop: 10
     },
     weatherItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
     },
     weathetItemTitle:{
        color: 'white',
         fontSize:14,
         fontWeight: '100'
     },
     weathetItemValue:{
        color: 'white',
        fontSize:14,
        fontWeight: '100'
     }


})

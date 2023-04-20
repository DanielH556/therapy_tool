import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Heading } from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';
import api from '../services/api';

export default function Test() {
   const [patient, setPatient] = useState({})

   useEffect(() => {
      const fetchPatient = async () => {
         try {
            const patientData = await api.get(`paciente`)
            setPatient(patientData.data)
            return patientData.data
         } catch (error) {
            console.log(`An error has ocurred: ${error}`)
         }
      }
      console.log(patient)
      fetchPatient()
   }, [])
   
   return(
      <View>
         <Heading>Test Screen</Heading>
         <Text>Patient: {JSON.stringify(patient)}</Text>
      </View>
   );
}
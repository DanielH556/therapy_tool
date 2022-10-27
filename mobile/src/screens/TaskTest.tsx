import { PropertyDescriptorParsingType } from 'html2canvas/dist/types/css/IPropertyDescriptor';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskProps {
   text: string;
}

export default function Task({text}: TaskProps) {
   return(
      <View style={styles.item}>
         <View style={styles.itemLeft}>
            <Text style={styles.itemText}>{text}</Text>
         </View>
      </View>
   )

}

const styles = StyleSheet.create({
   item: {
      backgroundColor: "#FFF",
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
   },
      itemLeft: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
   },
      itemText: {
      maxWidth: "80%",
   },
})
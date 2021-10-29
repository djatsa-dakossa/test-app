import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    console.log('value ==>', value)
    if(value !== null) {
      // value previously stored
      return value
    }
  } catch(e) {
    // error reading value
    console.log("e  ====>", e)
  }
}

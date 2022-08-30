import {
    DeviceEventEmitter,
    NativeModules,
    Platform
} from 'react-native'

const JCoreModule = NativeModules.JCoreModule


export default class JCore {

 static setAuth(auth) {
    if (Platform.OS == "android") {
        JCoreModule.setAuth(auth)
     }
 }
 static testCountryCode(params) {
   if (Platform.OS == "android") {
      JCoreModule.testCountryCode(params)
   }
 }

}

import {Dimensions, PixelRatio, Platform} from 'react-native'


/** /
 * This is to get the Dimensions of window
 */
export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
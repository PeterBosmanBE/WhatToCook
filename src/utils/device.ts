import { isIE as usingIE, isWearable, osName } from 'react-device-detect';

export const isSmartWatch = isWearable

export const isDeviceLinux = osName === 'Linux'
export const isDeviceMacOS = osName === 'Mac OS'
export const isDeviceWindows = osName === 'Windows'

export const isLinux = isDeviceLinux
export const isMacOS = isDeviceMacOS
export const isWindows = isDeviceWindows

export const isIE = usingIE
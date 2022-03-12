/* telemok.com/patterns/pattern4503599627370718/ */
import {telemokPatternsData as data4503599627370512} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370512.data.js';/*OrderOnOffAndOthers*/
import {telemokPatternsData as data4503599627370546} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370546.data.js';/*BurnAlgorithm*/
import {telemokPatternsData as data4503599627370711} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370711.data.js';/*RelayFunction*/
export var telemokPatternsData = new Map([
	...data4503599627370512, 
	...data4503599627370546, 
	...data4503599627370711,
	[4503599627370718,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 112,
    "patternName": "OrdersOnetime",
    "patternDescription": "\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440 \\u0440\\u0430\\u0437\\u043e\\u0432\\u043e\\u0433\\u043e \\u043f\\u043e\\u043b\\u0443\\u0447\\u0435\\u043d\\u0438\\u044f \\u043f\\u0440\\u0438\\u043a\\u0430\\u0437\\u0430 \\u0432 \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u0443\\u044e \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0443. \\u041f\\u0440\\u0438\\u043a\\u0430\\u0437\\u044b \\u043f\\u0440\\u0438\\u043c\\u0435\\u043d\\u044f\\u044e\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0440\\u0430\\u0437\\u0440\\u0435\\u0448\\u0435\\u043d\\u043e, \\u0438 \\u043f\\u043e\\u0442\\u043e\\u043c \\u043d\\u0435 \\u0441\\u043e\\u0445\\u0440\\u0430\\u043d\\u044f\\u044e\\u0442\\u0441\\u044f.",
    "structItems": [
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370512,
            "structItemCount": 1,
            "structItemVarName": "orderStart",
            "structItemPatternType": "enum",
            "structItemPatternName": "OrderOnOffAndOthers",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043a\\u0430\\u0437 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c\\u0441\\u044f \\u0438\\u043b\\u0438 \\u0432\\u044b\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c\\u0441\\u044f.",
            "structItemDefault": "INACT",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "burnAlgorithmChange",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "1 - \\u0441\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u0430\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f, 0 - \\u043d\\u0435\\u0442.",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370546,
            "structItemCount": 1,
            "structItemVarName": "burnAlgorithm",
            "structItemPatternType": "enum",
            "structItemPatternName": "BurnAlgorithm",
            "structItemDescription": "\\u0412\\u044b\\u0431\\u0440\\u0430\\u0442\\u044c \\u0430\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f.",
            "structItemDefault": "T_ROOM_SMOOTH",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "targetSupplyPercents",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 1-100 \\u0438\\u043b\\u0438 0, \\u0435\\u0441\\u043b\\u0438 \\u0432\\u044b\\u043a\\u043b.",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "targetFluidCelsius",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0442\\u0435\\u043f\\u043b\\u043e\\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f \\u0433\\u0440\\u0430\\u0434\\u0443\\u0441\\u043e\\u0432 1-100 \\u0438\\u043b\\u0438 127.",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "targetRoomCelsius",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u044b \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b 5-40 \\u0438\\u043b\\u0438 0.",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "Reserved555",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "Boolean native value",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "Reserved444",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "Boolean native value",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "rejillaStart",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043a\\u0430\\u0437\\u0430\\u0442\\u044c \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u043e\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044c \\u0432\\u0441\\u0451 \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a\\u043e\\u043c",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "startBootloaderIfNotBurning",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0417\\u0430\\u043f\\u0443\\u0441\\u0442\\u0438 \\u0431\\u0443\\u0442\\u043b\\u043e\\u0430\\u0434\\u0435\\u0440, \\u0435\\u0441\\u043b\\u0438 \\u043d\\u0435 \\u043f\\u0440\\u043e\\u0438\\u0441\\u0445\\u043e\\u0434\\u0438\\u0442 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u0435 \\u0438 \\u043f\\u043e\\u0437\\u0432\\u043e\\u043b\\u044f\\u044e\\u0442 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0438 \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u043e\\u0441\\u0442\\u0438",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "disableOtgSecondsPow2",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041d\\u0430 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434 \\u043e\\u0442\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c OTG \\u043f\\u0438\\u043d\\u0433\\u0438\\u043d\\u0433. \\u041d\\u0430\\u043f\\u0440\\u0438\\u043c\\u0435\\u0440, \\u043f\\u0435\\u0440\\u0435\\u0434 \\u0432\\u0445\\u043e\\u0434\\u043e\\u043c \\u0432 \\u043c\\u0435\\u043d\\u044e Wi-Fi, \\u0447\\u0442\\u043e\\u0431\\u044b \\u043e\\u043d\\u043e \\u043d\\u0435 \\u0437\\u0430\\u043a\\u0440\\u044b\\u043b\\u043e\\u0441\\u044c OTG.",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ashRemoverStart",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043a\\u0430\\u0437\\u0430\\u0442\\u044c \\u0437\\u0430\\u043f\\u0443\\u0441\\u0442\\u0438\\u0442\\u044c \\u043d\\u0430 \\u0432\\u0440\\u0435\\u043c\\u044f \\u0432\\u044b\\u043d\\u043e\\u0441 \\u043f\\u0435\\u043f\\u043b\\u0430",
            "structItemDefault": "0",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370512,
            "structItemCount": 1,
            "structItemVarName": "refillFuelUntilJam",
            "structItemPatternType": "enum",
            "structItemPatternName": "OrderOnOffAndOthers",
            "structItemDescription": "\\u0414\\u043e\\u0437\\u0430\\u0441\\u044b\\u043f\\u043a\\u0430 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u0434\\u043e \\u0437\\u0430\\u0442\\u043e\\u0440\\u0430, \\u043a\\u043e\\u0433\\u0434\\u0430 \\u043f\\u0430\\u0442\\u0440\\u0443\\u0431\\u043e\\u043a \\u0431\\u0443\\u043d\\u043a\\u0435\\u0440\\u0430 \\u043f\\u0443\\u0441\\u0442\\u043e\\u0439.",
            "structItemDefault": "INACT",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshEnabled_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0430 \\u043b\\u0438 \\u0430\\u0432\\u0442\\u043e\\u043c\\u0430\\u0442\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u0440\\u0430\\u0431\\u043e\\u0442\\u0430 \\u0440\\u0435\\u043b\\u0435.",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshFunction_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 4503599627370711,
            "structItemCount": 1,
            "structItemVarName": "relayAshFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayFunction",
            "structItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0437\\u043e\\u043b\\u043e\\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u044f \\u0438\\u043b\\u0438 \\u043f\\u043e \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0435",
            "structItemDefault": "ALWAYS_DISABLED",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshCustom0_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0440\\u0435\\u043b\\u0435 \\u0437\\u043e\\u043b\\u043e\\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u044f",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayShnekEnabled_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayShnekEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayShnekFunction_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 4503599627370711,
            "structItemCount": 1,
            "structItemVarName": "relayShnekFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayFunction",
            "structItemDescription": "",
            "structItemDefault": "ALWAYS_DISABLED",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayShnekCustom0_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayShnekCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayFanEnabled_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayFanEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayFanFunction_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 4503599627370711,
            "structItemCount": 1,
            "structItemVarName": "relayFanFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayFunction",
            "structItemDescription": "",
            "structItemDefault": "ALWAYS_DISABLED",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayFanCustom0_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayFanCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayPumpEnabled_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayPumpEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayPumpFunction_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 4503599627370711,
            "structItemCount": 1,
            "structItemVarName": "relayPumpFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayFunction",
            "structItemDescription": "",
            "structItemDefault": "ALWAYS_DISABLED",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayPumpCustom0_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayPumpCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayTenEnabled_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayTenEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayTenFunction_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 4503599627370711,
            "structItemCount": 1,
            "structItemVarName": "relayTenFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayFunction",
            "structItemDescription": "",
            "structItemDefault": "ALWAYS_DISABLED",
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayTenCustom0_change",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041f\\u0440\\u0438\\u043c\\u0435\\u043d\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0439\\u043a\\u0443",
            "structItemDefault": "0",
            "structItemMerge": "or",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayTenCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        }
    ]
}`}]]);
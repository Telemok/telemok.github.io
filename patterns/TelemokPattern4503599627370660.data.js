/* telemok.com/patterns/pattern4503599627370660/ */
import {telemokPatternsData as data4503599627370513} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370513.data.js';/*OrderPercent*/
export var telemokPatternsData = new Map([
	...data4503599627370513,
	[4503599627370660,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 26,
    "patternName": "OrdersTemp",
    "patternDescription": "\\u0412\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u044b\\u0439 \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440 \\u043f\\u043e\\u043b\\u0443\\u0447\\u0435\\u043d\\u0438\\u044f \\u043f\\u0440\\u0438\\u043a\\u0430\\u0437\\u0430 \\u0432 \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u0443\\u044e \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0443. \\u041f\\u0440\\u0438\\u043a\\u0430\\u0437 \\u0440\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043f\\u0440\\u0438\\u043c\\u0435\\u0440\\u043d\\u043e 30 \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434, \\u0430 \\u043f\\u043e\\u0442\\u043e\\u043c \\u043e\\u0442\\u043c\\u0435\\u043d\\u044f\\u0435\\u0442\\u0441\\u044f. \\u0421\\u0446\\u0435\\u043d\\u0430\\u0440\\u0438\\u0439: \\u043f\\u043b\\u0430\\u043d\\u0448\\u0435\\u0442 \\u0435\\u0436\\u0435\\u0441\\u0435\\u043a\\u0443\\u043d\\u0434\\u043d\\u043e \\u043e\\u0431\\u043d\\u043e\\u0432\\u043b\\u044f\\u0435\\u0442 \\u044d\\u0442\\u043e\\u0442 \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440 \\u0432 \\u043f\\u043e\\u0434\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0435.",
    "structItems": [
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 4503599627370513,
            "structItemCount": 1,
            "structItemVarName": "targetSupplyPercentsTemp",
            "structItemPatternType": "singular",
            "structItemPatternName": "OrderPercent",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 1-100 \\u0438\\u043b\\u0438 127",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 4503599627370513,
            "structItemCount": 1,
            "structItemVarName": "targetFanPercents",
            "structItemPatternType": "singular",
            "structItemPatternName": "OrderPercent",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430 1-100 \\u0438\\u043b\\u0438 127",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "targetFullSupplyCycleSecOr0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0417\\u0430\\u0434\\u0430\\u0442\\u044c \\u0432\\u0440\\u0435\\u043c\\u044f \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u043d\\u043e\\u0433\\u043e \\u0446\\u0438\\u043a\\u043b\\u0430 \\u0432 \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434\\u0430\\u0445 \\u0438\\u043b\\u0438 0",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "enablePlug3pinsNow",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041a\\u0440\\u0430\\u0442\\u043a\\u043e\\u0441\\u0440\\u043e\\u0447\\u043d\\u043e \\u0432\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u0440\\u0430\\u0437\\u044a\\u0451\\u043c",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "disableDisplayBacklightNow",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0412\\u044b\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u043f\\u043e\\u0434\\u0441\\u0432\\u0435\\u0442\\u043a\\u0443 \\u043f\\u0440\\u0438 \\u043f\\u043e\\u0434\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0438\\u0438 \\u043a \\u043f\\u043b\\u0430\\u043d\\u0448\\u0435\\u0442\\u0443",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "enableFuelRefilling",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u043d\\u0430\\u043f\\u043e\\u043b\\u043d\\u0435\\u043d\\u0438\\u0435 \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442 \\u0438\\u0437 \\u0441\\u043a\\u043b\\u0430\\u0434\\u0430 \\u0432 \\u0431\\u0443\\u043d\\u043a\\u0435\\u0440",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fanB4enable",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440 B4, \\u0433\\u0434\\u0435 \\u0432\\u0435\\u0442\\u0440\\u043e\\u0434\\u0443\\u0439\\u043a\\u0430 \\u0438 \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440 \\u043a\\u043e\\u0442\\u0435\\u043b\\u044c\\u043d\\u043e\\u0439",
            "structItemDefault": 0
        }
    ]
}`}]]);
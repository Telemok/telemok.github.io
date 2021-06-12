/* telemok.com/patterns/pattern4503599627370601/ */
import {telemokPatternsData as data4503599627370552} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370552.data.js';/*AccessLevel*/
import {telemokPatternsData as data4503599627370551} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370551.data.js';/*EndMessageChars*/
export var telemokPatternsData = new Map([
	...data4503599627370552, 
	...data4503599627370551,
	[4503599627370601,{json:`{
    \"patternType\": \"struct\",
    \"patternVersion\": 1,
    \"patternBits\": 34,
    \"patternName\": \"SettingsExchange\",
    \"patternDescription\": \"\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0435\\u043a \\u0432\\u043d\\u0435\\u0448\\u043d\\u0435\\u0433\\u043e \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u044f. \\u041e\\u043d \\u0434\\u043e\\u0441\\u0442\\u0443\\u043f\\u0435\\u043d \\u0442\\u043e\\u043b\\u044c\\u043a\\u043e \\u0434\\u043b\\u044f \\u0447\\u0442\\u0435\\u043d\\u0438\\u044f.\",
    \"structItems\": [
        {
            \"structItemPatternBits\": 8,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"UBRRL\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0421\\u043a\\u043e\\u0440\\u043e\\u0441\\u0442\\u044c USART \\u0432\\u043e \\u0432\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0445 \\u0437\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u044f\\u0445. 9600 = 2000000\\/211\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 2,
            \"structItemPatternId\": 4503599627370552,
            \"structItemCount\": 1,
            \"structItemVarName\": \"accessLevel\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"AccessLevel\",
            \"structItemDescription\": \"\\u0423\\u0440\\u043e\\u0432\\u0435\\u043d\\u044c \\u0434\\u043e\\u0441\\u0442\\u0443\\u043f\\u0430 \\u043a \\u0443\\u0441\\u0442\\u0440\\u043e\\u0439\\u0441\\u0442\\u0432\\u0443. \\u041f\\u043e\\u0437\\u0432\\u043e\\u043b\\u044f\\u0435\\u0442 \\u0432\\u043b\\u0430\\u0434\\u0435\\u043b\\u044c\\u0446\\u0443 \\u0443\\u0441\\u0442\\u0440\\u043e\\u0439\\u0441\\u0442\\u0432\\u0430 \\u043e\\u0433\\u0440\\u0430\\u043d\\u0438\\u0447\\u0438\\u0442\\u044c \\u043a \\u043d\\u0435\\u043c\\u0443 \\u0434\\u043e\\u0441\\u0442\\u0443\\u043f \\u0434\\u043e \\u043e\\u043f\\u0440\\u0435\\u0434\\u0435\\u043b\\u0451\\u043d\\u043d\\u043e\\u0433\\u043e \\u0443\\u0440\\u043e\\u0432\\u043d\\u044f.\",
            \"structItemDefault\": \"INVISIBLE\"
        },
        {
            \"structItemPatternBits\": 3,
            \"structItemPatternId\": 4503599627370551,
            \"structItemCount\": 1,
            \"structItemVarName\": \"endMessageChars\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"EndMessageChars\",
            \"structItemDescription\": \"Add to end of string to compatible with AT, Telemok and other protocols. \",
            \"structItemDefault\": \"NONE\"
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowStartAndStop\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u0437\\u0430\\u043f\\u0443\\u0441\\u043a \\u0438\\u043b\\u0438 \\u043e\\u0441\\u0442\\u0430\\u043d\\u043e\\u0432\\u043a\\u0443 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowWriteAllSettings\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u043b\\u0438 \\u0437\\u0430\\u043f\\u0443\\u0441\\u044c \\u0432\\u0441\\u0435\\u0445 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0435\\u043a. \\u041f\\u043e-\\u0443\\u043c\\u043e\\u043b\\u0447\\u0430\\u043d\\u0438\\u044e \\u0437\\u0430\\u043f\\u0440\\u0435\\u0449\\u0435\\u043d\\u043e.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"shiftFanDownPercents\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041d\\u0430 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442\\u043e\\u0432 \\u0440\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u043f\\u043e\\u043d\\u0438\\u0436\\u0430\\u0442\\u044c \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440 \\u0434\\u043b\\u044f \\u043f\\u043e\\u0432\\u044b\\u0448\\u0435\\u043d\\u0438\\u044f \\u041a\\u041f\\u0414. \\u0421\\u0438\\u043b\\u044c\\u043d\\u043e\\u0435 \\u043f\\u043e\\u043d\\u0438\\u0436\\u0435\\u043d\\u0438\\u0435 \\u043c\\u043e\\u0436\\u0435\\u0442 \\u043f\\u0440\\u0438\\u0432\\u0435\\u0441\\u0442\\u0438 \\u043a \\u043f\\u043e\\u0436\\u0430\\u0440\\u0443.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowChangeTargets\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043c\\u0435\\u043d\\u044f\\u0442\\u044c \\u0430\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f \\u0438 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowChangeBurnMode\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"Boolean native value\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowChangeAlgorithmSettings\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u043b\\u0438 \\u043c\\u0435\\u043d\\u044f\\u0442\\u044c \\u0442\\u0430\\u0431\\u043b\\u0438\\u0446\\u0443 \\u043d\\u0430\\u0441\\u0442\\u0440\\u043e\\u0435\\u043a \\u0430\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c\\u0430 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f \\u0448\\u043d\\u0435\\u043a \\u0438 \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440 \\u043c\\u0438\\u043d\\u0438\\u043c\\u0443\\u043c, \\u043e\\u043f\\u0442\\u0438\\u043c\\u0443\\u043c, \\u043c\\u0430\\u043a\\u0441\\u0438\\u043c\\u0443\\u043c.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"shiftFuelDeliveringPercents\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"0-99 \\u043d\\u0430 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u043c\\u043e\\u0436\\u043d\\u043e \\u0441\\u0434\\u0432\\u0438\\u0433\\u0430\\u0442\\u044c \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0443, \\u0435\\u0441\\u043b\\u0438 \",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowControl3pinExternal\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u043b\\u0438 \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u044f\\u0442\\u044c \\u0438\\u0437\\u0432\\u043d\\u0435 \\u043a\\u043e\\u043d\\u0442\\u0430\\u043a\\u0442\\u043e\\u043c \\u0422\\u042d\\u041d, \\u043d\\u0430\\u0441\\u043e\\u0441\\u0430. \\u0412\\u043d\\u0435\\u0448\\u043d\\u0435\\u0435 \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u0435 \\u0433\\u043b\\u0430\\u0432\\u043d\\u0435\\u0435 \\u0432\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0435\\u0433\\u043e.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"allowStartBotloaderIfNoBurning\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"Boolean native value\",
            \"structItemDefault\": 0
        }
    ]
}`}]]);
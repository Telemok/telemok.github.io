/* telemok.com/patterns/pattern4503599627370611/ */
import {telemokPatternsData as data4503599627370630} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370630.data.js';/*Ds18b20_12bits*/
import {telemokPatternsData as data4503599627370500} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370500.data.js';/*BatteryVoltage*/
import {telemokPatternsData as data4503599627370496} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370496.data.js';/*BurningStatus*/
import {telemokPatternsData as data4503599627370501} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370501.data.js';/*IgnitionStatus*/
import {telemokPatternsData as data4503599627370539} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370539.data.js';/*EmergencyBurning*/
import {telemokPatternsData as data4503599627370541} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370541.data.js';/*ThermocoupleMAX6675*/
import {telemokPatternsData as data4503599627370542} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370542.data.js';/*UiChapter*/
import {telemokPatternsData as data4503599627370546} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370546.data.js';/*BurnAlgorithm*/
import {telemokPatternsData as data4503599627370593} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370593.data.js';/*ErrorCodes*/
import {telemokPatternsData as data4503599627370563} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370563.data.js';/*MoveDirection*/
export var telemokPatternsData = new Map([
	...data4503599627370630, 
	...data4503599627370500, 
	...data4503599627370496, 
	...data4503599627370501, 
	...data4503599627370539, 
	...data4503599627370541, 
	...data4503599627370542, 
	...data4503599627370546, 
	...data4503599627370593, 
	...data4503599627370563,
	[4503599627370611,{json:`{
    \"patternType\": \"struct\",
    \"patternVersion\": 1,
    \"patternBits\": 279,
    \"patternName\": \"ContinuousReport\",
    \"patternDescription\": \"\\u0415\\u0436\\u0435\\u0441\\u0435\\u043a\\u0443\\u043d\\u0434\\u043d\\u0430\\u044f \\u0442\\u0435\\u043b\\u0435\\u043c\\u0435\\u0442\\u0440\\u0438\\u044f \\u0441 \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438. \\u041f\\u043e\\u043b\\u043d\\u0430\\u044f \\u0438\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u044f \\u043e \\u0441\\u043e\\u0441\\u0442\\u043e\\u044f\\u043d\\u0438\\u0438 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f.\",
    \"structItems\": [
        {
            \"structItemPatternBits\": 32,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"upTimeSec\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0412\\u0440\\u0435\\u043c\\u044f \\u0432 \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434\\u0430\\u0445 \\u043e\\u0442 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0438\\u044f \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fanSpeedPercentsNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043a\\u0443\\u0449\\u0430\\u044f \\u0441\\u043a\\u043e\\u0440\\u043e\\u0441\\u0442\\u044c \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430 \\u043d\\u0430\\u0434\\u0434\\u0443\\u0432\\u0430 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fireSensorPercents\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0421\\u0438\\u043b\\u0430 \\u043f\\u043b\\u0430\\u043c\\u0435\\u043d\\u0438 \\u0432 \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442\\u0430\\u0445 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"jamSensorPercents\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0414\\u0430\\u0442\\u0447\\u0438\\u043a \\u0437\\u0430\\u0442\\u043e\\u0440\\u0430 \\u0432 \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442\\u0430\\u0445 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370630,
            \"structItemCount\": 1,
            \"structItemVarName\": \"celsiusOut\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"Ds18b20_12bits\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043e\\u0431\\u0440\\u0430\\u0442\\u043a\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370630,
            \"structItemCount\": 1,
            \"structItemVarName\": \"celsiusIn\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"Ds18b20_12bits\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370630,
            \"structItemCount\": 1,
            \"structItemVarName\": \"celsiusBody\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"Ds18b20_12bits\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u0440\\u043f\\u0443\\u0441\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370630,
            \"structItemCount\": 1,
            \"structItemVarName\": \"celsiusRoom\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"Ds18b20_12bits\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370630,
            \"structItemCount\": 1,
            \"structItemVarName\": \"celsiusStreet\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"Ds18b20_12bits\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0443\\u043b\\u0438\\u0446\\u044b.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 10,
            \"structItemPatternId\": 4503599627370500,
            \"structItemCount\": 1,
            \"structItemVarName\": \"batteryVoltage\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"BatteryVoltage\",
            \"structItemDescription\": \"\\u0412\\u043e\\u043b\\u044c\\u0442\\u0430\\u0436 \\u0431\\u0430\\u0442\\u0430\\u0440\\u0435\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 3,
            \"structItemPatternId\": 4503599627370496,
            \"structItemCount\": 1,
            \"structItemVarName\": \"burningStatus\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"BurningStatus\",
            \"structItemDescription\": \"\\u0420\\u043e\\u0437\\u0436\\u0438\\u0433, \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u0435, \\u0442\\u0443\\u0448\\u0435\\u043d\\u0438\\u0435, \\u043d\\u0435\\u0440\\u043e\\u0437\\u0436\\u0438\\u0433, \\u043e\\u0436\\u0438\\u0434\\u0430\\u043d\\u0438\\u0435.\",
            \"structItemDefault\": \"WAITING\"
        },
        {
            \"structItemPatternBits\": 8,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fuelDeliveringSecondsTime\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0411\\u044b\\u0441\\u0442\\u0440\\u043e\\u043f\\u0435\\u0440\\u0435\\u043f\\u043e\\u043b\\u043d\\u044f\\u0435\\u043c\\u044b\\u0439 \\u0442\\u043e\\u0447\\u043d\\u044b\\u0439 \\u0441\\u0447\\u0451\\u0442\\u0447\\u0438\\u043a \\u0440\\u0430\\u0431\\u043e\\u0442\\u044b \\u0448\\u043d\\u0435\\u043a\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 8,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"lastBlowMinutes\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0412\\u0440\\u0435\\u043c\\u044f \\u043e\\u0442 \\u043f\\u0440\\u043e\\u0434\\u0443\\u0432\\u043a\\u0438 \\u0432 \\u043c\\u0438\\u043d\\u0443\\u0442\\u0430\\u0445.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fuelDeliveringPercentNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0439 \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u043b\\u0432\\u0430 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fuelDeliveringPercentTarget\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0416\\u0435\\u043b\\u0430\\u0435\\u043c\\u044b\\u0439 \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u043b\\u0432\\u0430 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fanSpeedPercentsTarget\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0416\\u0435\\u043b\\u0430\\u0435\\u043c\\u0430\\u044f \\u0441\\u043a\\u043e\\u0440\\u043e\\u0441\\u0442\\u044c \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430 \\u043d\\u0430\\u0434\\u0434\\u0443\\u0432\\u0430 \\u043e\\u0442 0 \\u0434\\u043e 100.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 3,
            \"structItemPatternId\": 4503599627370501,
            \"structItemCount\": 1,
            \"structItemVarName\": \"ignitionStatus\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"IgnitionStatus\",
            \"structItemDescription\": \"\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0439 \\u0441\\u0442\\u0430\\u0442\\u0443\\u0441 \\u0440\\u043e\\u0437\\u0436\\u0438\\u0433\\u0430. \\u0410\\u043a\\u0442\\u0443\\u0430\\u043b\\u044c\\u043d\\u043e \\u043f\\u0440\\u0438 burningStatus \\u0432 \\u0440\\u043e\\u0437\\u0436\\u0438\\u0433\\u0435.\",
            \"structItemDefault\": \"BLOWING\"
        },
        {
            \"structItemPatternBits\": 2,
            \"structItemPatternId\": 4503599627370539,
            \"structItemCount\": 1,
            \"structItemVarName\": \"emergencyBurning\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"EmergencyBurning\",
            \"structItemDescription\": \"\\u0415\\u0441\\u0442\\u044c \\u043b\\u0438 \\u0430\\u0432\\u0430\\u0440\\u0438\\u0439\\u043d\\u043e\\u0435 \\u043e\\u0433\\u0440\\u0430\\u043d\\u0438\\u0447\\u0435\\u043d\\u0438\\u0435 \\u043d\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0443 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430. \\u0421\\u0440\\u0430\\u0431\\u0430\\u0442\\u044b\\u0432\\u0430\\u0435\\u0442 \\u0438\\u0437-\\u0437\\u0430 \\u043e\\u0448\\u0438\\u0431\\u043e\\u043a \\u043f\\u0435\\u0440\\u0435\\u0433\\u0440\\u0435\\u0432\\u0430, \\u043e\\u0431\\u0440\\u044b\\u0432\\u0430 \\u0434\\u0430\\u0442\\u0447\\u0438\\u043a\\u043e\\u0432 \\u0438\\u043b\\u0438 220 \\u0432\\u043e\\u043b\\u044c\\u0442. Shareware \\u0442\\u0430\\u0439\\u043c\\u0430\\u0443\\u0442\\u0430.\",
            \"structItemDefault\": \"NONE\"
        },
        {
            \"structItemPatternBits\": 12,
            \"structItemPatternId\": 4503599627370541,
            \"structItemCount\": 1,
            \"structItemVarName\": \"thermocouple\",
            \"structItemPatternType\": \"singular\",
            \"structItemPatternName\": \"ThermocoupleMAX6675\",
            \"structItemDescription\": \"\\u0422\\u0435\\u0440\\u043c\\u043e\\u043f\\u0430\\u0440\\u0430 \\u043e\\u0442 0 \\u0434\\u043e 1022 \\u0433\\u0440\\u0430\\u0434\\u0443\\u0441\\u0430 \\u0434\\u043b\\u044f \\u0438\\u0437\\u043c\\u0435\\u0440\\u0435\\u043d\\u0438\\u044f \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u044b \\u0434\\u044b\\u043c\\u0430. 1023 \\u043e\\u0437\\u043d\\u0430\\u0447\\u0430\\u0435\\u0442, \\u0447\\u0442\\u043e \\u0442\\u0435\\u0440\\u043c\\u043e\\u043f\\u0430\\u0440\\u0430 \\u043d\\u0435 \\u043f\\u043e\\u0434\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0430 \\u0438 \\u0432 \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440 \\u043f\\u043e\\u043f\\u0430\\u0434\\u0430\\u0435\\u0442 0xFFFF.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 4,
            \"structItemPatternId\": 4503599627370542,
            \"structItemCount\": 1,
            \"structItemVarName\": \"uiChapter\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"UiChapter\",
            \"structItemDescription\": \"\\u0413\\u043b\\u0430\\u0432\\u044b \\u0442\\u0435\\u043a\\u0441\\u0442\\u043e\\u0432\\u043e\\u0433\\u043e \\u043c\\u0435\\u043d\\u044e \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438. \\u041f\\u0435\\u0440\\u0435\\u043a\\u043b\\u044e\\u0447\\u0430\\u044e\\u0442\\u0441\\u044f \\u043a\\u043d\\u043e\\u043f\\u043a\\u043e\\u0439 \",
            \"structItemDefault\": \"MAIN\"
        },
        {
            \"structItemPatternBits\": 5,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"uiRow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041d\\u043e\\u043c\\u0435\\u0440 \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u044b \\u043c\\u0435\\u043d\\u044e \\u0432\\u043d\\u0443\\u0442\\u0440\\u0438 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043b\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 3,
            \"structItemPatternId\": 4503599627370546,
            \"structItemCount\": 1,
            \"structItemVarName\": \"burnAlgorithm\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"BurnAlgorithm\",
            \"structItemDescription\": \"\\u0410\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f: \\u043c\\u0438\\u043c, \\u043f\\u043e \\u043e\\u0431\\u0440\\u0430\\u0442\\u043a\\u0435, \\u043f\\u043e \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u0435...\",
            \"structItemDefault\": \"MINIMAL\"
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 4503599627370593,
            \"structItemCount\": 1,
            \"structItemVarName\": \"errorCode\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"ErrorCodes\",
            \"structItemDescription\": \"\\u0421\\u043f\\u0438\\u0441\\u043e\\u043a \\u043a\\u043e\\u0434\\u043e\\u0432 \\u043e\\u0448\\u0438\\u0431\\u043e\\u043a \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438.\",
            \"structItemDefault\": \"OK\"
        },
        {
            \"structItemPatternBits\": 10,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"lambdaSensorAdcTest\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041f\\u043e\\u043a\\u0430\\u0437\\u0430\\u043d\\u0438\\u044f \\u0410\\u0426\\u041f \\u0442\\u0435\\u0441\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f \\u043b\\u044f\\u043c\\u0431\\u0434\\u0430 \\u0437\\u043e\\u043d\\u0434\\u0430, \\u043f\\u043e\\u0434\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d \\u043e\\u043d \\u0438\\u043b\\u0438 \\u043d\\u0435\\u0442.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 10,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"lambdaSensorAdcCO\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041f\\u043e\\u043a\\u0430\\u0437\\u0430\\u043d\\u0438\\u044f \\u0410\\u0426\\u041f \\u043b\\u044f\\u043c\\u0431\\u0434\\u0430 \\u0437\\u043e\\u043d\\u0434\\u0430, \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u043a\\u0438\\u0441\\u043b\\u043e\\u0440\\u043e\\u0434\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 10,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"rejillaCurrentAdc\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041f\\u043e\\u043a\\u0430\\u0437\\u0430\\u043d\\u0438\\u044f \\u0410\\u0426\\u041f \\u0434\\u0430\\u0442\\u0447\\u0438\\u043a\\u0430 \\u0442\\u043e\\u043a\\u0430 \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 4503599627370563,
            \"structItemCount\": 1,
            \"structItemVarName\": \"rejillaMoveDirection\",
            \"structItemPatternType\": \"enum\",
            \"structItemPatternName\": \"MoveDirection\",
            \"structItemDescription\": \"\\u041a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a \\u043d\\u0430\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d \\u0432\\u043f\\u0435\\u0440\\u0451\\u0434 \\u0438\\u043b\\u0438 \\u043d\\u0430\\u0437\\u0430\\u0434.\",
            \"structItemDefault\": \"FORWARD\"
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"rejillaIsMoving\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u041a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a \\u0434\\u0432\\u0438\\u0433\\u0430\\u0435\\u0442\\u0441\\u044f (1) \\u0438\\u043b\\u0438 \\u0441\\u0442\\u043e\\u0438\\u0442 (0).\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 7,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"rejillaPositionPercents\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u041f\\u043e\\u043b\\u043e\\u0436\\u0435\\u043d\\u0438\\u0435 \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a\\u0430 \\u0432 \\u043f\\u0440\\u043e\\u0446\\u0435\\u043d\\u0442\\u0430\\u0445. 0 - \\u0432\\u044b\\u0434\\u0432\\u0438\\u043d\\u0443\\u0442\\u043e \\u0434\\u043e \\u043a\\u043e\\u043d\\u0446\\u0430, \\u043a\\u0430\\u043a \\u0432\\u043e \\u0432\\u0440\\u0435\\u043c\\u044f \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f. 100 - \\u0432\\u0442\\u044f\\u043d\\u0443\\u0442\\u043e \\u043f\\u043e\\u043b\\u043d\\u043e\\u0441\\u0442\\u044c\\u044e \\u0432\\u0440\\u0435\\u043c\\u0435\\u043d\\u043d\\u043e \\u0434\\u043b\\u044f \\u0441\\u0431\\u043e\\u0440\\u0430 \\u043f\\u0435\\u043f\\u043b\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 9,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fuelFreeVerticalSpaceCM\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0423\\u043b\\u044c\\u0442\\u0440\\u0430\\u0437\\u0432\\u0443\\u043a\\u043e\\u0432\\u043e\\u0439 \\u0434\\u0430\\u0442\\u0447\\u0438\\u043a \\u043a\\u043e\\u043b\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0441\\u0432\\u043e\\u0431\\u043e\\u0434\\u043d\\u043e\\u0433\\u043e \\u043c\\u0435\\u0441\\u0442\\u0430 \\u0434\\u043b\\u044f \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u0432 \\u0431\\u0443\\u043d\\u043a\\u0435\\u0440\\u0435 \\u0432 \\u0441\\u0430\\u043d\\u0442\\u0438\\u043c\\u0435\\u0442\\u0440\\u0430\\u0445.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 8,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"fuelDeliveringCycleSec\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0426\\u0438\\u043a\\u043b \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438+\\u043d\\u0435\\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u0432 \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434\\u0430\\u0445.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 10,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"customTimer0\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Unsigned\",
            \"structItemDescription\": \"\\u0412 \\u0440\\u043e\\u0437\\u0436\\u0438\\u0433\\u0435 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434 \\u043f\\u0440\\u043e\\u0448\\u043b\\u043e \\u0432 \\u044d\\u0442\\u0430\\u043f\\u0435, \\u0432 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u0434\\u0435\\u043b\\u0435\\u043d\\u0438\\u0439 \\u0437\\u0430\\u043f\\u0443\\u0441\\u0442\\u0438\\u0442\\u0441\\u044f \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a, \\u0432 \\u0432\\u044b\\u0436\\u0438\\u0433\\u0430\\u043d\\u0438\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434 \\u043f\\u043e\\u0433\\u0430\\u0441\\u043d\\u0435\\u0442.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isWasEmergencyLastMinute\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0411\\u044b\\u043b\\u043e \\u043b\\u0438 \\u0432 \\u0442\\u0435\\u0447\\u0435\\u043d\\u0438\\u0438 \\u043f\\u043e\\u0441\\u043b\\u0435\\u0434\\u043d\\u0435\\u0439 \\u043c\\u0438\\u043d\\u0443\\u0442\\u044b \\u043e\\u0433\\u0440\\u0430\\u043d\\u0438\\u0447\\u0435\\u043d\\u0438\\u0435 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"sensorFuelDelivering\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0424\\u0438\\u043a\\u0441\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d \\u043b\\u0438 \\u0448\\u043d\\u0435\\u043a \\u0431\\u0443\\u043d\\u043a\\u0435\\u0440\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isFuelShifterWorkNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0448\\u043d\\u0435\\u043a \\u0432\\u044b\\u0442\\u0430\\u043b\\u043a\\u0438\\u0432\\u0430\\u043d\\u0438\\u044f \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u0432 \\u0442\\u043e\\u043f\\u043a\\u0443.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"pump1IsOn\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043b\\u0438 \\u043d\\u0430\\u0441\\u043e\\u0441 \\u21161.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"pump2IsOn\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043b\\u0438 \\u043d\\u0430\\u0441\\u043e\\u0441 \\u21162.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isFuelDeliveringReverseNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0448\\u043d\\u0435\\u043a \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u043d\\u0430\\u0437\\u0430\\u0434.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"thermocoupleAvailable\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u041d\\u0430\\u0434\\u043e \\u043b\\u0438 \\u0443\\u0447\\u0438\\u0442\\u044b\\u0432\\u0430\\u0442\\u044c \\u043f\\u043e\\u043a\\u0430\\u0437\\u0430\\u043d\\u0438\\u044f \\u0442\\u0435\\u0440\\u043c\\u043e\\u043f\\u0430\\u0440\\u044b \\u0438\\u043b\\u0438 \\u0432 \\u044d\\u0442\\u043e\\u043c \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0435 \\u043c\\u0443\\u0441\\u043e\\u0440.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isDisplayBacklightOnNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0421\\u0432\\u0435\\u0442\\u0438\\u0442 \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u043f\\u043e\\u0434\\u0441\\u0432\\u0435\\u0442\\u043a\\u0430 \\u044d\\u043a\\u0440\\u0430\\u043d\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isFuelDeliveringNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0412\\u0440\\u0430\\u0449\\u0430\\u0435\\u0442\\u0441\\u044f \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0448\\u043d\\u0435\\u043a.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isIgnitingNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430\\u0435\\u0442 \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0441\\u0432\\u0435\\u0447\\u0430 \\u0440\\u043e\\u0437\\u0436\\u0438\\u0433\\u0430.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isExtPinOnNow\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0412\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0432\\u043d\\u0435\\u0448\\u043d\\u0438\\u0439 \\u043f\\u0438\\u043d: \\u0422\\u042d\\u041d, \\u043e\\u0442\\u0434\\u0443\\u0432\\u043a\\u0430, \\u043d\\u0430\\u0441\\u043e\\u0441\\u044b \\u0438\\u043b\\u0438 \\u0447\\u0442\\u043e \\u0442\\u0430\\u043c.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isErrorLed\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0421\\u0432\\u0435\\u0442\\u0438\\u0442\\u0441\\u044f \\u043b\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0441\\u0432\\u0435\\u0442\\u043e\\u0434\\u0438\\u043e\\u0434 \\u043e\\u0448\\u0438\\u0431\\u043a\\u0438.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"is220V\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u0415\\u0441\\u0442\\u044c \\u043b\\u0438 \\u0432 \\u0441\\u0435\\u0442\\u0438 220 \\u0432\\u043e\\u043b\\u044c\\u0442.\",
            \"structItemDefault\": 0
        },
        {
            \"structItemPatternBits\": 1,
            \"structItemPatternId\": 0,
            \"structItemCount\": 1,
            \"structItemVarName\": \"isOrderStart\",
            \"structItemPatternType\": \"native\",
            \"structItemPatternName\": \"Bool\",
            \"structItemDescription\": \"\\u041e\\u0442\\u0434\\u0430\\u043d \\u043b\\u0438 \\u043f\\u0440\\u0438\\u043a\\u0430\\u0437 \\u043d\\u0430 \\u0441\\u0442\\u0430\\u0440\\u0442.\",
            \"structItemDefault\": 0
        }
    ]
}`}]]);
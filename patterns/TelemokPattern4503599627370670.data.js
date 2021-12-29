/* telemok.com/patterns/pattern4503599627370670/ */
import {telemokPatternsData as data4503599627370524} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370524.data.js';/*PelletType*/
import {telemokPatternsData as data4503599627370526} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370526.data.js';/*OnBootFire*/
import {telemokPatternsData as data4503599627370529} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370529.data.js';/*Pin3Function*/
import {telemokPatternsData as data4503599627370525} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370525.data.js';/*FuelTransporterType*/
import {telemokPatternsData as data4503599627370528} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370528.data.js';/*SensorTBodyAlgorithm*/
import {telemokPatternsData as data4503599627370527} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370527.data.js';/*Pin6Function*/
import {telemokPatternsData as data4503599627370544} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370544.data.js';/*TypeApg*/
import {telemokPatternsData as data4503599627370546} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370546.data.js';/*BurnAlgorithm*/
import {telemokPatternsData as data4503599627370658} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370658.data.js';/*FanRoomType*/
import {telemokPatternsData as data4503599627370668} from 'https://telemok.github.io/patterns/TelemokPattern4503599627370668.data.js';/*RelayAshFunction*/
export var telemokPatternsData = new Map([
	...data4503599627370524, 
	...data4503599627370526, 
	...data4503599627370529, 
	...data4503599627370525, 
	...data4503599627370528, 
	...data4503599627370527, 
	...data4503599627370544, 
	...data4503599627370546, 
	...data4503599627370658, 
	...data4503599627370668,
	[4503599627370670,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 382,
    "patternName": "Settings",
    "patternDescription": "\\u041d\\u043e\\u0432\\u0430\\u044f \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043a\\u0430 \\u0441 \\u0432\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u043c \\u0448\\u043d\\u0435\\u043a\\u043e\\u043c \\u0438 \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a\\u043e\\u043c \\u0432\\u0435\\u0440\\u0441\\u0438\\u044f \\u0437\\u0430 \\u043d\\u043e\\u044f\\u0431\\u0440\\u044c 2021",
    "structItems": [
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ustavka_topliva_procentov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ustavka_obratki_gradusov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ustavka_komnaty_gradusov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ustavka_fix_mode_FAN_procentov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "procent_podachi_minimum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "procent_podachi_optimum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "procent_podachi_maximum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "start_stop_hysteresis_gradusov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilator_minimum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilator_optimum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilator_maximum_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilator_otdih_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "otduvkaVremyaViduvaPeplaSec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "periodichnostViduvaPeplaMinutes",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fiksCycleMejduPodachiSec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "sdvig_po_ulice_gradusov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370524,
            "structItemCount": 1,
            "structItemVarName": "pelletType",
            "structItemPatternType": "enum",
            "structItemPatternName": "PelletType",
            "structItemDescription": "",
            "structItemDefault": "WOOD_WHITE"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "rozjig_vremya_viduva_pepla_sec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "vremya_podachi_rozjig_x10_sec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "vremya_rozjiga_lampoy_x10_sec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilatorTopkiRozjigLampa_0_100",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "rozjig_povtor",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "vremya_fiksacii_razgorania_sec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ventilatorTopkiRozjigFiksaciya",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "timeoutNoFireRozjigSec",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "peregrev_podachi_mingorenie",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "peregrev_podachi_stopshnek",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "peregrev_komnati_stopshnek",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "peregrev_korpusa_mingorenie",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "peregrev_korpusa_stopshnek",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "security_zatorodojig_10x_secund",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "idleOffDisplayFanAfterX10minutes",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "require_crc_DS18B20",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370526,
            "structItemCount": 1,
            "structItemVarName": "onBootFire",
            "structItemPatternType": "enum",
            "structItemPatternName": "OnBootFire",
            "structItemDescription": "",
            "structItemDefault": "IDLE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "tenEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0420\\u0430\\u0437\\u0440\\u0435\\u0448\\u0438\\u0442\\u044c \\u0438\\u043b\\u0438 \\u0437\\u0430\\u043f\\u0440\\u0435\\u0442\\u0438\\u0442\\u044c \\u0422\\u042d\\u041d \\u0438\\u043b\\u0438 \\u0447\\u0442\\u043e \\u0432 \\u044d\\u0442\\u043e\\u043c \\u0440\\u0430\\u0437\\u044a\\u0451\\u043c\\u0435",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "ustavka_tena_gradusov",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370529,
            "structItemCount": 1,
            "structItemVarName": "pin3Function",
            "structItemPatternType": "enum",
            "structItemPatternName": "Pin3Function",
            "structItemDescription": "",
            "structItemDefault": "OFF"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "disable_nasos_after",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 15,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "skorost_nasosa_litrov_v_chas",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 14,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "teploemkost_nositela",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 10,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "skorost_shneka_gramm_v_minutu",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 13,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "energiya_sgorania_2000_7000_WhKg",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370525,
            "structItemCount": 1,
            "structItemVarName": "fuelTransporterType",
            "structItemPatternType": "enum",
            "structItemPatternName": "FuelTransporterType",
            "structItemDescription": "",
            "structItemDefault": "LOWERING_PULLING"
        },
        {
            "structItemPatternBits": 6,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "moshnost_ventilatora_v_wattah",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "limit_moshnosti_kW",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "jamSensorEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "Boolean native value",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370528,
            "structItemCount": 1,
            "structItemVarName": "sensorTBodyAlgorithm",
            "structItemPatternType": "enum",
            "structItemPatternName": "SensorTBodyAlgorithm",
            "structItemDescription": "",
            "structItemDefault": "OFF"
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370527,
            "structItemCount": 1,
            "structItemVarName": "pin6Function",
            "structItemPatternType": "enum",
            "structItemPatternName": "Pin6Function",
            "structItemDescription": "",
            "structItemDefault": "OFF"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "rejillaOn",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u0438\\u043b\\u0438 \\u043f\\u043e\\u043b\\u043d\\u043e\\u0441\\u0442\\u044c\\u044e \\u043e\\u0442\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 4,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "rejillaEvery125GramsIn2Power",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041a\\u0430\\u0436\\u0434\\u044b\\u0435 \\u0441\\u0442\\u043e\\u043b\\u044c\\u043a\\u043e \\u0433\\u0435\\u043a\\u0442\\u043e\\u0433\\u0440\\u0430\\u043c\\u043c (125\\u0445 \\u0433\\u0440\\u0430\\u043c\\u043c) \\u0441\\u043e\\u0436\\u0436\\u0451\\u043d\\u043d\\u043e\\u0433\\u043e \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430 \\u0432 \\u0440\\u0435\\u0436\\u0438\\u043c\\u0435 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f \\u0441\\u0434\\u0432\\u0438\\u0433\\u0430\\u0435\\u0442\\u0441\\u044f \\u043a\\u043e\\u043b\\u043e\\u0441\\u043d\\u0438\\u043a, \\u0444\\u0443\\u043d\\u043a\\u0446\\u0438\\u044f \\u0441\\u0442\\u0435\\u043f\\u0435\\u043d\\u044c \\u0434\\u0432\\u043e\\u0439\\u043a\\u0438",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fuelShifterOn",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0439 \\u0448\\u043d\\u0435\\u043a \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u0443\\u0435\\u0442\\u0441\\u044f.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fuelShifterSeconds",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0412\\u043d\\u0443\\u0442\\u0440\\u0435\\u043d\\u043d\\u0438\\u0439 \\u0448\\u043d\\u0435\\u043a \\u043a\\u0440\\u0443\\u0442\\u0438\\u0442\\u0441\\u044f \\u0435\\u0449\\u0451 \\u0441\\u0442\\u043e\\u043b\\u044c\\u043a\\u043e \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434. \\u041f\\u043e\\u0441\\u043b\\u0435 \\u0448\\u043d\\u0435\\u043a\\u0430 \\u0438\\u043b\\u0438 \\u0437\\u0430\\u0442\\u043e\\u0440\\u0430.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 5,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "dtIntOutCalibration",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0421\\u0434\\u0432\\u0438\\u0433 \\u0422 \\u043e\\u0431\\u0440\\u0430\\u0442\\u043a\\u0438. \\u0412\\u043d\\u0430\\u0447\\u0430\\u043b\\u0435 \\u0432\\u044b\\u0447\\u0438\\u0442\\u0430\\u0435\\u0442\\u0441\\u044f 1, \\u043f\\u043e\\u0442\\u043e\\u043c \\u043c\\u043d\\u043e\\u0436\\u0438\\u0442\\u0441\\u044f \\u043d\\u0430 0.0625",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370544,
            "structItemCount": 1,
            "structItemVarName": "typeApg",
            "structItemPatternType": "enum",
            "structItemPatternName": "TypeApg",
            "structItemDescription": "\\u0412\\u044b\\u0431\\u043e\\u0440 \\u0442\\u0438\\u043f\\u0430 \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438 \\u0432 \\u043c\\u0435\\u043d\\u044e \\u0434\\u043b\\u044f \\u0441\\u0431\\u043e\\u0440\\u0449\\u0438\\u043a\\u043e\\u0432 \\u0438 \\u0443\\u0441\\u0442\\u0430\\u043d\\u043e\\u0432\\u0449\\u0438\\u043a\\u043e\\u0432.",
            "structItemDefault": "UNSELECTED"
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370546,
            "structItemCount": 1,
            "structItemVarName": "burnAlgorithm",
            "structItemPatternType": "enum",
            "structItemPatternName": "BurnAlgorithm",
            "structItemDescription": "\\u0410\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c\\u044b \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u044f \\u043c\\u043e\\u0449\\u043d\\u043e\\u0441\\u0442\\u044c\\u044e \\u043f\\u0435\\u043b\\u043b\\u0435\\u0442\\u043d\\u043e\\u0439 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438.",
            "structItemDefault": "MINIMAL"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "disablePumpAfter",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0427\\u0435\\u0440\\u0435\\u0437 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u043c\\u0438\\u043d\\u0443\\u0442 \\u043f\\u043e\\u0441\\u043b\\u0435 \\u043f\\u0440\\u0435\\u043a\\u0440\\u0430\\u0449\\u0435\\u043d\\u0438\\u044f \\u043f\\u043b\\u0430\\u043c\\u0435\\u043d\\u0438 \\u0432\\u044b\\u043a\\u043b\\u044e\\u0447\\u0430\\u0442\\u044c \\u043d\\u0430\\u0441\\u043e\\u0441",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fuelTransporterStuckOn",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0420\\u0435\\u0430\\u0433\\u0438\\u0440\\u043e\\u0432\\u0430\\u0442\\u044c \\u043b\\u0438 \\u043d\\u0430 \\u0437\\u0430\\u0441\\u0442\\u0440\\u0435\\u0432\\u0430\\u043d\\u0438\\u0435 \\u0448\\u043d\\u0435\\u043a\\u0430",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 5,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fuelTransporterStuckSeconds",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0427\\u0435\\u0440\\u0435\\u0437 \\u0441\\u043a\\u043e\\u043b\\u044c\\u043a\\u043e \\u0441\\u0435\\u043a\\u0443\\u043d\\u0434 \\u0437\\u0430\\u0441\\u0442\\u0440\\u0435\\u0432\\u0430\\u043d\\u0438\\u044f \\u0432\\u0440\\u0430\\u0449\\u0430\\u0442\\u044c \\u043d\\u0430\\u0437\\u0430\\u0434",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "lambdaCorrection_enabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041a\\u043e\\u0440\\u0440\\u0435\\u043a\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u0442\\u044c \\u043b\\u0438 \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440 \\u043f\\u043e \\u043b\\u044f\\u043c\\u0431\\u0434\\u0430 \\u0437\\u043e\\u043d\\u0434\\u0443",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "lambdaCorrection_targetAdcx4",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0410\\u0426\\u041f \\u043b\\u044f\\u043c\\u0431\\u0434\\u0430 \\u0437\\u043e\\u043d\\u0434\\u0430",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 5,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "lambdaCorrection_fanMaxRatioX01",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041a\\u043e\\u0440\\u0440\\u0435\\u043a\\u0446\\u0438\\u044f \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430 \\u043d\\u0435 \\u0431\\u043e\\u043b\\u0435\\u0435 \\u0441\\u0442\\u043e\\u043b\\u044c\\u043a\\u043e \\u043a\\u0440\\u0430\\u0442. \\u041d\\u0430\\u043f\\u0440\\u0438\\u043c\\u0435\\u0440 \\u0434\\u043b\\u044f \\u0437\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u044f 4 \\u043a\\u043e\\u0440\\u0440\\u0435\\u043a\\u0446\\u0438\\u044f \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u0430 \\u043e\\u0442 1\\/1.4 \\u0434\\u043e 1.4 .",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 2,
            "structItemPatternId": 4503599627370658,
            "structItemCount": 1,
            "structItemVarName": "fanRoomType",
            "structItemPatternType": "enum",
            "structItemPatternName": "FanRoomType",
            "structItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u044f \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0442\\u043e\\u0440\\u043e\\u043c \\u043c\\u043e\\u0436\\u0435\\u0442 \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u0442\\u044c\\u0441\\u044f \\u0434\\u043b\\u044f \\u0432\\u0435\\u043d\\u0442\\u0438\\u043b\\u044f\\u0446\\u0438\\u0438 \\u043a\\u043e\\u0442\\u0435\\u043b\\u044c\\u043d\\u043e\\u0439 \\u043f\\u0440\\u0438 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0438\\u0438 \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u044f \\u0438\\u043b\\u0438 \\u0434\\u043b\\u044f \\u043f\\u0440\\u043e\\u0434\\u0443\\u0432\\u0430 \\u0440\\u0430\\u0434\\u0438\\u043e\\u0430\\u0442\\u043e\\u0440\\u0430 \\u0442\\u0435\\u043f\\u043b\\u043e\\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f, \\u043a\\u043e\\u0433\\u0434\\u0430 \\u043e\\u043d \\u043d\\u0430\\u0433\\u0440\\u0435\\u043b\\u0441\\u044f.",
            "structItemDefault": "OFF"
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "fanRoomTargetCelsius",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0441\\u0442\\u0430\\u0432\\u043a\\u0430 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u044b, \\u043f\\u043e \\u043a\\u043e\\u0442\\u043e\\u0440\\u043e\\u0439 \\u0441\\u0440\\u0430\\u0431\\u0430\\u0442\\u044b\\u0432\\u0430\\u0435\\u0442 \\u0432\\u0435\\u0442\\u0440\\u043e\\u0434\\u0443\\u0439\\u043a\\u0430",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 3,
            "structItemPatternId": 4503599627370668,
            "structItemCount": 1,
            "structItemVarName": "relayAshFunction",
            "structItemPatternType": "enum",
            "structItemPatternName": "RelayAshFunction",
            "structItemDescription": "\\u0424\\u0443\\u043d\\u043a\\u0446\\u0438\\u044f \\u0440\\u0435\\u043b\\u0435 \\u0437\\u043e\\u043b\\u043e\\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u044f \\u0438\\u043b\\u0438 \\u043d\\u0430\\u0441\\u043e\\u0441\\u0430.",
            "structItemDefault": "OFF"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshEnabled",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u0430 \\u043b\\u0438 \\u0430\\u0432\\u0442\\u043e\\u043c\\u0430\\u0442\\u0438\\u0447\\u0435\\u0441\\u043a\\u0430\\u044f \\u0440\\u0430\\u0431\\u043e\\u0442\\u0430 \\u0440\\u0435\\u043b\\u0435.",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "relayAshCustom0",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0423\\u0434\\u0430\\u043b\\u044f\\u0442\\u044c \\u0437\\u043e\\u043b\\u0443 \\u043a\\u0430\\u0436\\u0434\\u044b\\u0439 \\u0441\\u0442\\u043e\\u043b\\u044c\\u043a\\u043e \\u0442\\u043e \\u043a\\u0438\\u043b\\u043e\\u0433\\u0440\\u0430\\u043c\\u043c \\u0442\\u043e\\u043f\\u043b\\u0438\\u0432\\u0430. 0->1, 1->2, 2->4, 3->8, 4->16",
            "structItemDefault": 0
        }
    ]
}`}]]);
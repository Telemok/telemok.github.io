/* telemok.com/patterns/pattern4503599627370664/ */
export var telemokPatternsData = new Map([
	[4503599627370664,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 448,
    "patternName": "KaratDefaultAnswer",
    "patternDescription": "\\u041f\\u0440\\u043e\\u0442\\u043e\\u043a\\u043e\\u043b M-Bus \\u0434\\u043b\\u044f \\u041a\\u0430\\u0440\\u0430\\u0442-223 \\u0432\\u0435\\u044014111.pdf \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0430 14-15 \\u0441\\u0442\\u0430\\u043d\\u0434\\u0430\\u0440\\u0442\\u043d\\u044b\\u0439 \\u043e\\u0442\\u0432\\u0435\\u0442 \\u0441\\u043e \\u0441\\u0447\\u0451\\u0442\\u0447\\u0438\\u043a\\u0430",
    "structItems": [
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "timestamp",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0435 \\u0434\\u0430\\u0442\\u0430\\/\\u0432\\u0440\\u0435\\u043c\\u044f",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "consumedThermalEnergy",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041f\\u043e\\u0442\\u0440\\u0435\\u0431\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u0442\\u0435\\u043f\\u043b\\u043e\\u0432\\u0430\\u044f \\u044d\\u043d\\u0435\\u0440\\u0433\\u0438\\u044f, \\u043a\\u0412\\u0442\\u00b7\\u0447",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "coolantColume",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041e\\u0431\\u044a\\u0435\\u043c \\u0442\\u0435\\u043f\\u043b\\u043e\\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f, \\u043c3",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "coolantMass",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041c\\u0430\\u0441\\u0441\\u0430 \\u0442\\u0435\\u043f\\u043b\\u043e\\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f, \\u0442",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "celsiusOut",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0432 \\u043f\\u043e\\u0434\\u0430\\u044e\\u0449\\u0435\\u043c \\u0442\\u0440\\u0443\\u0431\\u043e\\u043f\\u0440\\u043e\\u0432\\u043e\\u0434\\u0435, \\u00b0\\u0421",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "celsiusIn",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0432 \\u043e\\u0431\\u0440\\u0430\\u0442\\u043d\\u043e\\u043c \\u0442\\u0440\\u0443\\u0431\\u043e\\u043f\\u0440\\u043e\\u0432\\u043e\\u0434\\u0435, \\u00b0\\u0421",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "celsiusDelta",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0420\\u0430\\u0437\\u043d\\u043e\\u0441\\u0442\\u044c \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440, \\u041a",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "currentPower",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043a\\u0443\\u0449\\u0430\\u044f \\u043c\\u043e\\u0449\\u043d\\u043e\\u0441\\u0442\\u044c, \\u043a\\u0412\\u0442",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "currentVolumeFlowRate",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0439 \\u043e\\u0431\\u044a\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0440\\u0430\\u0441\\u0445\\u043e\\u0434, \\u043c3\\/\\u0447",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "currentMassFlowRate",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u0435\\u043a\\u0443\\u0449\\u0438\\u0439 \\u043c\\u0430\\u0441\\u0441\\u043e\\u0432\\u044b\\u0439 \\u0440\\u0430\\u0441\\u0445\\u043e\\u0434, \\u0442\\/\\u0447",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "volumeInput1",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041e\\u0431\\u044a\\u0435\\u043c \\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f \\u043f\\u043e \\u0432\\u0445\\u043e\\u0434\\u0443 1, \\u043c3",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "volumeInput2",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041e\\u0431\\u044a\\u0435\\u043c \\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f \\u043f\\u043e \\u0432\\u0445\\u043e\\u0434\\u0443 2, \\u043c3",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "volumeInput3",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041e\\u0431\\u044a\\u0435\\u043c \\u043d\\u043e\\u0441\\u0438\\u0442\\u0435\\u043b\\u044f \\u043f\\u043e \\u0432\\u0445\\u043e\\u0434\\u0443 3, \\u043c3",
            "structItemDefault": 0
        },
        {
            "structItemPatternBits": 32,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "errorCode",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041a\\u043e\\u0434 \\u043e\\u0448\\u0438\\u0431\\u043a\\u0438",
            "structItemDefault": 0
        }
    ]
}`}]]);
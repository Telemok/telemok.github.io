/* telemok.com/patterns/pattern4503599627370642/ */
export var telemokPatternsData = new Map([
	[4503599627370642,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 2186,
    "patternName": "FireBasePushNotify",
    "patternDescription": "\\u0421\\u0442\\u0440\\u0443\\u043a\\u0442\\u0443\\u0440\\u0430, \\u043f\\u043e\\u0437\\u0432\\u043e\\u043b\\u044f\\u044e\\u0449\\u0430\\u044f \\u043f\\u043e\\u0434\\u043f\\u0438\\u0441\\u0430\\u0442\\u044c\\u0441\\u044f \\u0438 \\u0443\\u043f\\u0440\\u0430\\u0432\\u043b\\u044f\\u0442\\u044c \\u043f\\u0443\\u0448 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f\\u043c\\u0438.",
    "structItems": [
        {
            "structItemPatternBits": 53,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "thingUniqueId",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u041d\\u043e\\u043c\\u0435\\u0440 \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0438, \\u043d\\u0430 \\u043a\\u043e\\u0442\\u043e\\u0440\\u0443\\u044e \\u043d\\u0430\\u0434\\u043e \\u043f\\u043e\\u0434\\u043f\\u0438\\u0441\\u0430\\u0442\\u044c\\u0441\\u044f",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 16,
            "structItemVarName": "telemokAccessToken",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0422\\u043e\\u043a\\u0435\\u043d, \\u043f\\u043e\\u0434\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0430\\u044e\\u0449\\u0438\\u0439 \\u0434\\u043e\\u0441\\u0442\\u0443\\u043f \\u043a \\u0433\\u043e\\u0440\\u0435\\u043b\\u043a\\u0435",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 8,
            "structItemPatternId": 0,
            "structItemCount": 250,
            "structItemVarName": "remoteTokenId",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "\\u0410\\u0439\\u0434\\u0438\\u0448\\u043d\\u0438\\u043a \\u0443\\u0441\\u0442\\u0440\\u043e\\u0439\\u0441\\u0442\\u0432\\u0430 \\u0432 \\u0442\\u0435\\u043a\\u0441\\u0442\\u043e\\u0432\\u043e\\u043c \\u0432\\u0438\\u0434\\u0435",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "actionAdd",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0414\\u043e\\u0431\\u0430\\u0432\\u0438\\u0442\\u044c \\u044d\\u0442\\u043e \\u043e\\u043f\\u043e\\u0432\\u0435\\u0449\\u0435\\u043d\\u0438\\u0435",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "actionRemove",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0423\\u0434\\u0430\\u043b\\u0438\\u0442\\u044c \\u044d\\u0442\\u043e \\u043e\\u043f\\u043e\\u0432\\u0435\\u0449\\u0435\\u043d\\u0438\\u0435",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "isNotifyOrderOn",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041e\\u043f\\u043e\\u0432\\u0435\\u0449\\u0435\\u043d\\u0438\\u0435 \\u043e \\u043f\\u0440\\u0438\\u043a\\u0430\\u0437\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0438\\u0442\\u044c\\u0441\\u044f \\u0438\\u043b\\u0438 \\u043e\\u0441\\u0442\\u0430\\u043d\\u043e\\u0432\\u0438\\u0442\\u044c\\u0441\\u044f",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "isNotifyErrorStop",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u041e\\u0448\\u0438\\u0431\\u043a\\u0430 \\u043e\\u0441\\u0442\\u0430\\u043d\\u0430\\u0432\\u043b\\u0438\\u0432\\u0430\\u044e\\u0449\\u0430\\u044f \\u0433\\u043e\\u0440\\u0435\\u043d\\u0438\\u0435 \\u0438\\u043b\\u0438 \\u0438\\u0441\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u0435 \\u043e\\u0448\\u0438\\u0431\\u043a\\u0438.",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 1,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "isNotifyErrorOthers",
            "structItemPatternType": "native",
            "structItemPatternName": "Bool",
            "structItemDescription": "\\u0412\\u043e\\u0437\\u043d\\u0438\\u043a\\u043d\\u043e\\u0432\\u0435\\u043d\\u0438\\u0435 \\u0438\\u043b\\u0438 \\u043e\\u0442\\u043c\\u0435\\u043d\\u0430 \\u0434\\u0440\\u0443\\u0433\\u043e\\u0439 \\u043e\\u0448\\u0438\\u0431\\u043a\\u0438",
            "structItemDefault": 0,
            "structItemMerge": "random",
            "structItemArrayType": "NONE"
        }
    ]
}`}]]);
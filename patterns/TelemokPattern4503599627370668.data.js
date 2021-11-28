/* telemok.com/patterns/pattern4503599627370668/ */
export var telemokPatternsData = new Map([
	[4503599627370668,{json:`{
    "patternVersion": 1,
    "patternName": "RelayAshFunction",
    "patternBits": 3,
    "patternDescription": "",
    "patternType": "enum",
    "enumRawDefault": 0,
    "enumSigned": 0,
    "enumPrefix": "RelayAshFunction_",
    "enumItems": [
        {
            "enumItemRaw": 0,
            "enumItemName": "OFF",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0437\\u043e\\u043b\\u043e\\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u044f \\u043d\\u0435 \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u0443\\u0435\\u0442\\u0441\\u044f."
        },
        {
            "enumItemRaw": 1,
            "enumItemName": "ASH_REMOVER",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 \\u0437\\u043e\\u043b\\u043e\\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u0435 \\u0432\\u0441\\u0442\\u0440\\u043e\\u0435\\u043d\\u043d\\u043e\\u0433\\u043e \\u0432 \\u043a\\u043e\\u0442\\u0451\\u043b \\u0448\\u043d\\u0435\\u043a\\u0430 \\u0443\\u0434\\u0430\\u043b\\u0435\\u043d\\u0438\\u044f \\u0437\\u043e\\u043b\\u044b."
        },
        {
            "enumItemRaw": 2,
            "enumItemName": "ENABLE_IF_T_OUT_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 3,
            "enumItemName": "ENABLE_IF_T_OUT_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430  \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 4,
            "enumItemName": "ENABLE_IF_T_STREET_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0443\\u043b\\u0438\\u0446\\u044b \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 5,
            "enumItemName": "ENABLE_IF_T_STREET_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0443\\u043b\\u0438\\u0446\\u044b \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 6,
            "enumItemName": "ENABLE_IF_T_ROOM_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 7,
            "enumItemName": "ENABLE_IF_T_ROOM_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442 220\\u0412, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        }
    ]
}`}]]);
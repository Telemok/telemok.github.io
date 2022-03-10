/* telemok.com/patterns/pattern4503599627370711/ */
export var telemokPatternsData = new Map([
	[4503599627370711,{json:`{
    "patternVersion": 1,
    "patternName": "RelayFunction",
    "patternBits": 4,
    "patternDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0438\\u043b\\u0438 \\u0422\\u042d\\u041d",
    "patternType": "enum",
    "enumRawDefault": 0,
    "enumSigned": 0,
    "enumPrefix": "RelayFunction_",
    "enumItems": [
        {
            "enumItemRaw": 0,
            "enumItemName": "ALWAYS_DISABLED",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u0441\\u0435\\u0433\\u0434\\u0430 \\u0432\\u044b\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u043e"
        },
        {
            "enumItemRaw": 1,
            "enumItemName": "ALWAYS_ENABLED",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u0441\\u0435\\u0433\\u0434\\u0430 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0435\\u043d\\u043e"
        },
        {
            "enumItemRaw": 2,
            "enumItemName": "ENABLE_IF_T_OUT_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 3,
            "enumItemName": "ENABLE_IF_T_OUT_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043f\\u043e\\u0434\\u0430\\u0447\\u0438 \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 4,
            "enumItemName": "ENABLE_IF_T_IN_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043e\\u0431\\u0440\\u0430\\u0442\\u043a\\u0438 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 5,
            "enumItemName": "ENABLE_IF_T_IN_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043e\\u0431\\u0440\\u0430\\u0442\\u043a\\u0438 \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 6,
            "enumItemName": "ENABLE_IF_T_STREET_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0443\\u043b\\u0438\\u0446\\u044b \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 7,
            "enumItemName": "ENABLE_IF_T_STREET_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0443\\u043b\\u0438\\u0446\\u044b \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 8,
            "enumItemName": "ENABLE_IF_T_ROOM_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 9,
            "enumItemName": "ENABLE_IF_T_ROOM_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u043c\\u043d\\u0430\\u0442\\u044b \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 10,
            "enumItemName": "ENABLE_IF_T_BODY_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u0440\\u043f\\u0443\\u0441\\u0430 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 11,
            "enumItemName": "ENABLE_IF_T_BODY_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u043a\\u043e\\u0440\\u043f\\u0443\\u0441\\u0430 \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 12,
            "enumItemName": "ENABLE_IF_T_SMOKE_MORE",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0434\\u044b\\u043c\\u043e\\u0445\\u043e\\u0434\\u0430 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 13,
            "enumItemName": "ENABLE_IF_T_SMOKE_LESS",
            "enumItemDescription": "\\u0420\\u0435\\u043b\\u0435 \\u0432\\u043a\\u043b\\u044e\\u0447\\u0430\\u0435\\u0442\\u0441\\u044f, \\u0435\\u0441\\u043b\\u0438 \\u0442\\u0435\\u043c\\u043f\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0434\\u044b\\u043c\\u043e\\u0445\\u043e\\u0434\\u0430 \\u043c\\u0435\\u043d\\u044c\\u0448\\u0435 \\u0443\\u0441\\u0442\\u0430\\u0432\\u043a\\u0438."
        },
        {
            "enumItemRaw": 14,
            "enumItemName": "ALGORITHM0",
            "enumItemDescription": "\\u0410\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u043f\\u043e\\u0432\\u0435\\u0434\\u0435\\u043d\\u0438\\u044f 0 \\u043f\\u0440\\u043e \\u0437\\u0430\\u043f\\u0430\\u0441"
        },
        {
            "enumItemRaw": 15,
            "enumItemName": "ALGORITHM1",
            "enumItemDescription": "\\u0410\\u043b\\u0433\\u043e\\u0440\\u0438\\u0442\\u043c \\u043f\\u043e\\u0432\\u0435\\u0434\\u0435\\u043d\\u0438\\u044f 1 \\u043f\\u0440\\u043e \\u0437\\u0430\\u043f\\u0430\\u0441"
        }
    ]
}`}]]);
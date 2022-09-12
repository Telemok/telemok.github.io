/* telemok.com/patterns/pattern4503599627370731/ */
export var telemokPatternsData = new Map([
	[4503599627370731,{json:`{
    "patternVersion": 1,
    "patternName": "WhyCantMeasure12vFall",
    "patternBits": 3,
    "patternDescription": "Why we can not measure 12 Battery quality and return reason.",
    "patternType": "enum",
    "enumRawDefault": 0,
    "enumSigned": 0,
    "enumPrefix": "MEAS_12V_FALL_REASON_",
    "enumItems": [
        {
            "enumItemRaw": 0,
            "enumItemName": "OK_CAN_MEASURE",
            "enumItemDescription": "All is good, can measure."
        },
        {
            "enumItemRaw": 1,
            "enumItemName": "TIMEOUT_BOOT",
            "enumItemDescription": "Protect resistor from overheating if enabled with hot resistor."
        },
        {
            "enumItemRaw": 2,
            "enumItemName": "TIMEOUT_COOLING",
            "enumItemDescription": "Protect resistor from overheating after working."
        },
        {
            "enumItemRaw": 3,
            "enumItemName": "LOW_BATTERY_CHARGE",
            "enumItemDescription": "Battery not charged. Can not measure voltage down."
        },
        {
            "enumItemRaw": 4,
            "enumItemName": "NO_220V",
            "enumItemDescription": "If no 220 vold, cant measure battery reability"
        },
        {
            "enumItemRaw": 5,
            "enumItemName": "REJILLA_WORKING",
            "enumItemDescription": "Rejilla use many 12v power. Waiting while rejilla end working."
        }
    ]
}`}]]);
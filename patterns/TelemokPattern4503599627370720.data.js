/* telemok.com/patterns/pattern4503599627370720/ */
export var telemokPatternsData = new Map([
	[4503599627370720,{json:`{
    "patternVersion": 1,
    "patternName": "WhyCantMeasure12vFall",
    "patternBits": 2,
    "patternDescription": "",
    "patternType": "enum",
    "enumRawDefault": 0,
    "enumSigned": 0,
    "enumPrefix": "MEAS_12V_FALL_REASON_",
    "enumItems": [
        {
            "enumItemRaw": 0,
            "enumItemName": "CAN_MEASURE",
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
        }
    ]
}`}]]);
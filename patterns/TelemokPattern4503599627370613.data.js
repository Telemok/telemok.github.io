/* telemok.com/patterns/pattern4503599627370613/ */
export var telemokPatternsData = new Map([
	[4503599627370613,{json:`{
    "patternVersion": 1,
    "patternName": "BootloaderRunFrom",
    "patternBits": 1,
    "patternDescription": "Which a reason to start bootloader? Used for View to ask, it is manual update or autoupdate.",
    "patternType": "enum",
    "enumRawDefault": 0,
    "enumSigned": 0,
    "enumPrefix": "BootloaderRunFrom_",
    "enumItems": [
        {
            "enumItemRaw": 0,
            "enumItemName": "POWER_ON",
            "enumItemDescription": "Chip is powered on, first run bootloader"
        },
        {
            "enumItemRaw": 1,
            "enumItemName": "APPLICATION",
            "enumItemDescription": "Chip is powered on, first run bootloader, loaded application and app run bootloader"
        }
    ]
}`}]]);
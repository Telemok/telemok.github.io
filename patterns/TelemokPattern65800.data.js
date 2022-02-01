/* telemok.com/patterns/pattern65800/ */
export var telemokPatternsData = new Map([
	[65800,{json:`{
    "patternType": "struct",
    "patternVersion": 1,
    "patternBits": 937,
    "patternName": "TelemokVendorInfo",
    "patternDescription": "Default telemok register with vendor information of hardware, not firmware. Vendor information will not be change on firmware update.",
    "structItems": [
        {
            "structItemPatternBits": 7,
            "structItemPatternId": 0,
            "structItemCount": 127,
            "structItemVarName": "vendorSiteUrl",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Without https. For example \\"moogle.com\\" or \\"n0rdicsemi.com\\"",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "VARIABLE"
        },
        {
            "structItemPatternBits": 16,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "vendorIDSource",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "Vendor id source or 0.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 16,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "vendorID",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "The VendorID \\u20180xFFFF\\u2019 is reserved as the default VendorID when no Device ID Service Record is present in the device.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        },
        {
            "structItemPatternBits": 16,
            "structItemPatternId": 0,
            "structItemCount": 1,
            "structItemVarName": "productID",
            "structItemPatternType": "native",
            "structItemPatternName": "Unsigned",
            "structItemDescription": "This is intended to distinguish between different products made by the vendor above. These IDs are managed by the vendors themselves.",
            "structItemDefault": "0",
            "structItemMerge": "average",
            "structItemArrayType": "NONE"
        }
    ]
}`}]]);
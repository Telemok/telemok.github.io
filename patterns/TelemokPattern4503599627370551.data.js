/* telemok.com/patterns/pattern4503599627370551/ */
export var telemokPatternsData = new Map([,
	[4503599627370551,{json:`{
    \"patternVersion\": 1,
    \"patternName\": \"EndMessageChars\",
    \"patternBits\": 3,
    \"patternDescription\": \"Add to end of string to compatible with AT, Telemok and other protocols. \\\"\\\\r\\\\n\\\" by default.\",
    \"patternType\": \"enum\",
    \"enumSigned\": 0,
    \"enumPrefix\": \"END_MESSAGE_CHARS_\",
    \"enumRawDefault\": 7,
    \"enumItems\": [
        {
            \"enumItemRaw\": 0,
            \"enumItemName\": \"NONE\",
            \"enumItemDescription\": \"Nothing  to add at end of message. Will not work with Telemok.\"
        },
        {
            \"enumItemRaw\": 1,
            \"enumItemName\": \"R\",
            \"enumItemDescription\": \"\\\"\\\\r\\\" Use only one byte, work with Telemok UART protocol.\"
        },
        {
            \"enumItemRaw\": 2,
            \"enumItemName\": \"N\",
            \"enumItemDescription\": \"\\\"\\\\n\\\" Use only one byte, work with Telemok UART protocol.\"
        },
        {
            \"enumItemRaw\": 3,
            \"enumItemName\": \"RN\",
            \"enumItemDescription\": \"AT commands default, recommended\"
        },
        {
            \"enumItemRaw\": 4,
            \"enumItemName\": \"ZERO\",
            \"enumItemDescription\": \"\\\"\\\\0\\\" Use only one byte, work with Telemok UART protocol.\"
        },
        {
            \"enumItemRaw\": 5,
            \"enumItemName\": \"R0\",
            \"enumItemDescription\": \"\"
        },
        {
            \"enumItemRaw\": 6,
            \"enumItemName\": \"N0\",
            \"enumItemDescription\": \"\"
        },
        {
            \"enumItemRaw\": 7,
            \"enumItemName\": \"RN0\",
            \"enumItemDescription\": \"\"
        }
    ]
}`}]]);
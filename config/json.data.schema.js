// Schema for json schema faker generator
module.exports = {
    "type": "object",
    "required": ["users"],
    "properties": {
        "users": {
            "type": "array",
            "minItems": 100,
            "maxItems": 100,
            "items": {
                "type": "object",
                "required": ["id", "firstName", "lastName", "email", "phone", "avatar"],
                "properties": {
                    "id": {
                        "type": "string",
                        "faker": "random.number"
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    },
                    "phone": {
                        "type": "string",
                        "faker": "phone.phoneNumberFormat"
                    },
                    "avatar": {
                        "type": "string",
                        "faker": "internet.avatar"
                    }
                }
            }
        }
    }
}

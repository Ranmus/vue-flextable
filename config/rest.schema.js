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
        "required": ["id", "firstName", "lastName", "address", "entity", "email", "phone", "avatar"],
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
          "address": {
            "type": "object",
            "required": ["id", "country", "city", "street"],
            "properties": {
              "id": {
                "type": "integer",
                "minimum": 1,
                "maximum": 10
              },
              "country": {
                "type": "string",
                "faker": "address.country"
              },
              "city": {
                "type": "string",
                "faker": "address.city"
              },
              "street": {
                "type": "string",
                "faker": "address.streetName"
              }
            },
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

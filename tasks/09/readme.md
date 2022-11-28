# Jak spustit API

```
json-server --watch db.json --port 3004 --no-cors --routes routes.json
```

# Popis entity 

```
{
  "id": int(),
  "content": string(),
  "count": int(),
  "state: oneOf("ACTIVE", "COMPLETED"),
  "createdAt": date()
}
```



# Popis API

## Shopping item Collection [/shoppingList]

### List All Shopping items [GET]

+ Request (application/json)
```json
{
   "state": "COMPLETED"
}
```
+ Response 200 (application/json)

```json
[
  {
    "id": "1",
    "content": "rohlik",
    "count": 10,
    "state": "COMPLETED",
    "createdAt": "2022-08-05T08:40:51.620Z"
  },
  {
    "id": "2",
    "content": "chleba",
    "count": 1,
    "state": "COMPLETED",
    "createdAt": "2022-08-05T08:40:51.620Z"
  }
]
```
## Shopping item Collection [/shoppingItem]

### Create a Shopping Item [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)
```json
{
    "content": "rohlik",
    "count": 10,
    "createdAt": "2022-08-05T08:40:51.620Z"
}
```
+ Response 201 (application/json)

```json
{
    "id": "1",
    "content": "rohlik",
    "count": 10,
    "state": "",
    "createdAt": "2022-08-05T08:40:51.620Z"
}
```
### Update a Shopping Item [PUT]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)
```json
{
    "id": "1",
    "content": "rohlik",
    "count": 10,
    "state": ""
}
```

- Response 201 (application/json)

```json
{
    "id": "1",
    "content": "rohlik",
    "count": 10,
    "state": "",
    "createdAt": "2022-08-05T08:40:51.620Z"
}
```

### Delete a Shopping Item [DELETE]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

- Request (application/json)
```json
{
  "id": "1"
}
```
- Response 201 (application/json)
```json
{
  "id": "1",
  "content": "rohlik",
  "count": 10,
  "state": "",
  "createdAt": "2022-08-05T08:40:51.620Z"
}
```

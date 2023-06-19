migrate((db) => {
  const collection = new Collection({
    "id": "dyr1z1i6gksln9k",
    "created": "2023-06-19 08:35:58.229Z",
    "updated": "2023-06-19 08:35:58.229Z",
    "name": "user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gicstvd3",
        "name": "user_pseudo",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iutvj8jy",
        "name": "user_mail",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ddwe25s3",
        "name": "user_adress",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ukaj7duy",
        "name": "user_date_of_birth",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "d0kw1qi6",
        "name": "user_first_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lizjfw4e",
        "name": "user_last_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dyr1z1i6gksln9k");

  return dao.deleteCollection(collection);
})

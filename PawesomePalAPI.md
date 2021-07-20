# Products API

## GET /traits

Retrieves the traits data

###### Response

`Status: 200 OK`

```
[
    {
        "id": 1,
        "trait": "fun-loving"
    },
    {
        "id": 2,
        "trait": "couch-potato "
    },
    {
        "id": 3,
        "trait": "adventurous "
    },
    {
        "id": 4,
        "trait": "witty"
    },
    {
        "id": 5,
        "trait": "perfectionist"
    }
]
```

## GET /petmatch

Retrieves a single pet's information through the PetFinder API based on the trait, type, and gender provided

###### Parameters

| Parameter | Type    | Description           |
| --------- | ------- | --------------------- |
| trait_id  | integer | id of trait           |
| type      | string  | cat, dog, or both     |
| gender    | string  | male, female, or both |

###### Response

`Status: 200 OK`

```
{
    "id": 52407304,
    "organization_id": "AZ418",
    "url": "https://www.petfinder.com/dog/78424-52407304/az/nogales/santa-cruz-county-animal-care-and-control-services-az418/?referrer_id=4491b933-8254-4a5d-856b-8c34ef9bb017",
    "type": "Dog",
    "species": "Dog",
    "breeds": {
        "primary": "Chihuahua",
        "secondary": "Mixed Breed",
        "mixed": true,
        "unknown": false
    },
    "colors": {
        "primary": null,
        "secondary": null,
        "tertiary": null
    },
    "age": "Baby",
    "gender": "Female",
    "size": "Small",
    "coat": null,
    "attributes": {
        "spayed_neutered": false,
        "house_trained": false,
        "declawed": null,
        "special_needs": false,
        "shots_current": true
    },
    "environment": {
        "children": null,
        "dogs": null,
        "cats": null
    },
    "tags": [],
    "name": "78424",
    "description": null,
    "organization_animal_id": "78424",
    "photos": [],
    "primary_photo_cropped": null,
    "videos": [],
    "status": "adoptable",
    "status_changed_at": "2021-07-19T23:55:59+0000",
    "published_at": "2021-07-19T23:55:59+0000",
    "distance": null,
    "contact": {
        "email": "jpena@co.santa-cruz.az.us",
        "phone": "520-761-7860",
        "address": {
            "address1": "1368 North Hohokam Drive",
            "address2": null,
            "city": "Nogales",
            "state": "AZ",
            "postcode": "85621",
            "country": "US"
        }
    },
    "_links": {
        "self": {
            "href": "/v2/animals/52407304"
        },
        "type": {
            "href": "/v2/types/dog"
        },
        "organization": {
            "href": "/v2/organizations/az418"
        }
    }
}
```

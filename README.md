# Chuck Norris API

For this project I used a dataset found online to build out my own API with full CRUD functionality.

## Built With

1. Node
2. Mongoose
3. Express

## Getting Started

1. Fork and clone this repository
2. Change into new directory
3. Install dependencies
4. Seed database

## REST Routes

`/jokes`
GET request will display all jokes in the database

`/jokes/3`
GET request to display a joke specific to the id number
{
"categories": [

 ],
"\_id": "5ed7ffc33909f517fe9b1320",
"id": "3",
"joke": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
"\_\_v": 0
}

`/random`
GET request to display a random joke.

{
"categories": [
"nerdy"
],
"\_id": "5ed7ffc33909f517fe9b1528",
"id": "552",
"joke": "Chuck Norris knows the value of NULL, and he can sort by it too.",
"\_\_v": 0
}

`/jokes/category/:category`
GET request will display all jokes within the specified category (nerdy,explicit)

`/jokes`
POST to create a new joke entry

`/jokes/:id`
PUT request that specifies which joke to update using its id number

`/jokes/:id`
DELETE jokes using their id number

## Author

Brian Avjean

## Contributing

Feel free to submit via issue or pull request. Any feedback is appreciated.

## Acknowledgements

Thanks to [The Internet Chuck Norris Database](http://www.icndb.com/api/) that I used to seed my database.

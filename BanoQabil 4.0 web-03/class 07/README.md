class 07


we learnt that how can we make a collection on postman and we larnt benifits of using collections that we dont have to write the same url again and again
we can do it on thunder client as well. like if we want to make a collection of products then we can make a collection and then we can add the products in it.

in this class we learnt about how can we handle search params 
like we search a product by its name or category, price, instock, etc

we learnt builtin keywords $regex, $gte, $lte, $or
$regex is used to search a string in a field
$gte is used to search a field greater than or equal to a value
$lte is used to search a field less than or equal to a value
$or is used to search multiple fields at once

we made handlers through if else by which our query will be handled.
also we used pagination contoller which first show 5 products and then after minus the page number from 1 it will show the next 5 products and so on. 

we made 2 schema first is for mongoose and second is made through joi which is used to validate the data before sending it to the database.

what is validate and how do we do it?
validation is the process of checking if the data is in the correct format before sending it to the database.
how we make a middleware?
middleware is a function that runs before the request is sent to the server. it can be used to validate the data, check if the user is authenticated, or log the request. like we make a validate.js:
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  };
};

if we integrate a middleware and then we remove the name of product while we use method of post then it will give us an error that name is required. this all is done by joi validation.

we can also do validation by our self  like if the searched word is less than 3 characters then it will give us an error that the searched word is too short.

if we dont wanna use joi then we have to write our own validation logic by making a lot of if else statements which is not a good practice. so we use joi to validate the data.
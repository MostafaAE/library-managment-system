# Simple API for managing library system
Simple REST API for library management system
___

## Organization
### The main entities served by the API are
- Books
- Members
- Employees

### Each resource managed by implementing the main HTTP methods
- GET for getting all elements or searching if query specified
  or getting specified element if the id specified.
- POST for adding new element to the collection.
- PUT for updating the whole element with new fields
- DELETE for removing the specified element or the whole elements if 
         the whole collection specified.


## Accessing the API

Server is running on http://localhost:8080

### Books
`http://localhost:8080/books` using the appropriate HTTP method and path


### Employees
`http://localhost:8080/employees` using the appropriate HTTP method and path


### Members
`http://localhost:8080/members` using the appropriate HTTP method and path
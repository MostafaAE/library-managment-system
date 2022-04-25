# Library Management System REST API with MongoDB
___

## Organization
### The main entities served by the API are
- Books
- Members
- Employees

### Each resource is managed by the main HTTP methods
- GET for getting all elements or searching if query specified or getting specified element if the id specified.
- POST for adding a new element to the collection.
- PUT for updating the whole element with new fields
- DELETE for removing the specified element or the whole elements if the whole collection is specified.

___

## Accessing the API

The server is running on https://library-ms-sfe.herokuapp.com/

### Books
https://library-ms-sfe.herokuapp.com/books using the appropriate HTTP method and path


### Employees
https://library-ms-sfe.herokuapp.com/employees using the appropriate HTTP method and path


### Members
https://library-ms-sfe.herokuapp.com/members using the appropriate HTTP method and path

___

# Installation

- Clone the repository: `https://github.com/MostafaAE/library-managment-system.git`
- Pull Docker Image: `docker pull mostafaae/library-management-system`
- Run Docker Image: `docker run -p 3000:3000 mostafaae/library-management-system`

___

# Team members
> * Mostafa Ayman : [@MostafaAE ]( https://github.com/MostafaAE)
> * Mostafa Saad  : [@MostafaSaad7 ]( https://github.com/MostafaSaad7)
> * Mariam Gad : [@MariamGad  ]( https://github.com/Mariamgad)
> * Mostafa Amin : [@MostafaAmin0 ]( https://github.com/MostafaAmin0 )
> * Mayar Hanafy : [@MayarHanafy ]( https://github.com/MayarHanafy)
> * Maha Elkomey : [@MahaElomey ]( https://github.com/MahaElomey )
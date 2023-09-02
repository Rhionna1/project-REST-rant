# Project REST-Rant
## User Story
### As a restaurant customer, we need an app that customers can use to leave a quick review/comment on a particular restaurant before trying it.

REST-Rant is an app where users can review restaurants.

| METHOD      | PATH             | PURPOSE                                    |
| :---        |    :----:        |          ---:                              |
| GET         | /                | Home page                                  |
| GET         | /places          | Places index page                          |
| POST        | /places          | Create new place                           |
| GET         | /places/new      | Form page for creating a new place         |
| GET         | /places/:id      | Details about a particular place           |
| PUT         | /places/:id      | Update a particular place                  |
| GET         | /places/:id/edit | Form page for editing an existing place    |
| DELETE      | /places/:id      | Delete a particular place                  |
| POST        | /places/:id/rant |Create a rant (comment) about a particular place|
| DELETE      | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET         | *                | 404 page (matches any route not defined above)|

Data that will be stored for restaurants: restaurant name, city, state, cuisines, and a pic

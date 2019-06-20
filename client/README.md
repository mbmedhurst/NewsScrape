## News Scraper
An app which scrapes top stories from The Washington Post's homepage and allows the user to save to a Mongo database. Once saved, the user can add a comment to the saved article and/or delete the article from the database.

# Frameworks Used
- React
- Node.js
- Mongoose
- Express
- Axios
- Material UI

# Home Page
- The scraper is not working. I can get the WaPo homepage to be returned in the Network tab of dev tools, but for some reason the code that targets the specific elements that I want returned is not firing.

# Saved Articles Page
- there is some seed data in the models folder if you are interested in seeing things for yourself
- Delete not working: getting an error: "(node:1476) DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead." But I am using deleteOne so that needs investigating.
- Add a Comment: I have not brought the state and props down to this component correctly (or at all) so I need to go back and fix that.

![News Scraper demo](src/assets/images/Demo.gif)
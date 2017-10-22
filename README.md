## Exercise App

This is a very simple app where it fetches all repos on load. A user can 
- click on a repo to see open issues in that repo
- sort issues

### Run the app locally
1. cd into the app.
2. Run the following
  ```
    yarn install
    yarn start
  ```

### Run the build file directly
open build/index.html in any browser
Note: I did have to modify build/index.html to have correct path for CSS and JS files for it to work with this file structure.

### Sorting
I used `react-sortable-hoc` library to achieve dragging and dropping. It's the simplest library I found as the developer doesn't need to worry about some of the boiler code that handles dragging and dropping. They've achieved it by applying higher order component concept.

### Things I would've done to improve if I had more time
I have kept all the components (SortableIssueLit, RepoList) as pure presentational components and all the logic inside App.js. Essentially, I made App.js a container component that deals with data and manipulate the states directly in there. What I could have done is either use redux or flux to maintain the state properly. For example adding a task would follow this flow: click on a repo => App.js dispatches a `CLICK_REPO` action => have a reducer that changes the states due to the action => App.js or Provider gets the update => re-render

- add unit and end-to-end tests
- makes links inside issue component clickable (just need to specify draggable area using `react-sortable-hoc` library)
- adds more useful information to both repo and issue components
- adds loading state and empty states to both repo and issue components
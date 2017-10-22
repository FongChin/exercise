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

I've leverged local storage to store the order of the list whenever the list is sorted. The key is a repo id and its value is an array of issue ids as sorted.

### Things I would've done to improve if I had more time
- add unit and end-to-end tests
- makes links inside issue component clickable (just need to specify draggable area using `react-sortable-hoc` library)
- adds more useful information to both repo and issue components
- adds loading state and empty states to both repo and issue components
- persist the issue order on a server according to the plan below. 

I have kept all the components (SortableIssueLit, RepoList) as pure presentational components and all the logic inside App.js. Essentially, I made App.js a container component that deals with data and manipulate the states directly in there. What I could have done is either use redux or flux to maintain the state properly. For example adding a task would follow this flow: click on a repo => App.js dispatches a `CLICK_REPO` action => have a reducer that changes the states due to the action => App.js or Provider gets the update => re-render

Current app state doesn't persist the order of the issue on backend. If I were to design this, I would have an endpoint like POST `/api/users/#{userId}/repos/#{repoId}/issues/changeOrder` that has a request body of an array of sorted issue ids. GET `/api/users/#{userId}/repos/#{repoId}/issues/order` returns a previously saved array of issue ids. 

The behavior will be the following: 
- user clicks on a repo
- app fetches issues from github and get a list of ordered issue ids from `/api/users/#{userId}/repos/#{repoId}/issues/order`
- app renders issues according to the array the API returns
- user sorts the issues by dragging and dropping
- user clicks on a different repo
- make a POST request to `/api/users/#{userId}/repos/#{repoId}/issues/change-order` to save the current order of the issues. 

## Repository Dashboard
Customize and Rearrange: GitHub, GitLab, BitBucket repositories on a central view.

Demo is live - showing future direction of the project:
<br/>https://repository-dashboard.herokuapp.com/

Currently using minimal-react-starter as the base. No complaints.
<br>However as the project is starting to progress I may shift and start implementing some tdd.</br>

## What does it do?
1) Shows where the buttons will go and suggests what some themes will look like.
2) Display's fake repository data that the user is able to rearrange.

## What will it do?
1) Themes, contain independent ordering of repositories.
2) Accounts github, gitlab, and bitbucket link using https://github.com/MichaelDimmitt/basic_authentication_firebase
Or an Auth0 solution.
3) Repos load from database via network request.
4) New repositories are either loaded on demand or the entire profile repo names are copied after user login.
5) Button in the top corner for adding/searching repositories.
6) (x) button in each repo card to quickly archive a project.
7) Able to view items archived on the page to easily resume work after shelving a project.

## Technical Details:
1) Keeps track of draggand drop so that the order can be updated in a database:
<br/>current implementation ([react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) )
2) Mimics the styling of GitHub pinned repositories adding flexbox and media queries for responsive web design.
3) Converts the pinned repository code into a reusable javascript component.

## Installation Instructions:
1) clone the project
2) npm install
3) npm run start
4) open https://www.localhost:3000
5) check the terminal if you are already running on port 3000.

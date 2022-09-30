# Assessment9 Plan

[ ] "Home" / - Renders a component that displays a welcome message and a link to the "Agents" route
    [ ] Links to other parts of the website could be added in the future
    Estimated time: 2-3 hour
    
[ ] "Agents" /agents - Renders a component that displays a list of agents
    Estimated time: 1-2 hour

[ ] "Add Agent" /agents/add - Renders a component that displays a form to add an agent
    Estimated time: 2-4 hour

[ ] "Edit Agent" /agents/edit/:id - Renders a component that displays a form to edit the agent specified by the :id route parameter
    Estimated time: 2-3 hour

[ ] "Delete Agent" /agents/delete/:id (optional) - Renders a component that displays a confirmation message to delete the agent specified by the :id route parameter
    [ ] Note: If this route isn't implemented, handle agent deletion within the     "Agents" route.
    Estimated time: 1-2 hour

[ ] "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes
    Estimated time:1-2 hour
    

Technical Requirements: 
Use Create React App.

Use fetch for async HTTP.

Use React Router to implement the client-side routes.

Use React Router's useHistory hook to programmatically redirect users and useParams hook to access parameters, paths, and other data.

You are not allowed to change the Field Agent HTTP Service or database (unless there's a confirmed bug and your instructor approves).

Use a CSS framework. (Using bootstrap)

Getting Started
To get started with this project, follow these steps:

1.Fork this repository

2.Clone this repository to your local machine:

3.Install the required dependencies for both the backend and frontend:
cd Tutor-Portfolio
cd server && npm install
cd ../client && npm install
Configure the database connection in the backend. You can use MongoDB Atlas or a local MongoDB server.

4. Start the backend server:
cd server && node server.js

5.Start the frontend application:
cd client && npm run dev

6.Access the application in your web browser at http://localhost:5173.



*** TO GAIN ADMIN ACCESS ***

1.Uncomment the 'router.route("/reg")' route in user-route.js.

2.Ctrl+Click on authcontroller.genpass.

3.Uncomment gen pass in authController.

4.Goto admin-model and uncomment "adminSchema.pre".

5.Hit the route "http://localhost:5173/api/admin/reg" and create a admin.

6.Visit @ http://localhost:5173/kFqHj to access admin dashboard.

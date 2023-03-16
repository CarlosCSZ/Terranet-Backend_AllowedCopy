# TERRANET BACKEND - allowed copy
This is a monorepo project for an internet service company.<br />
This backend project provides the company with a communication, subscription tatus, and payment system.<br />

## 📒 Dependencies

Node.js 

   Download and install node.js in your computer using the following page [][Node official page] (https://https://nodejs.org/en/).


## 📝 Quick guide for local development

1. Clone the repository 
  
   ```sh 
   ***Using HTTPS***
   git clone https://github.com/lualreye/terranet-backend.git

   ***Using SSH KEY***
   -Create and add ssh key in your computer.<br />
   -Attach your public ssh key into your GitHub account and write the following command.<br />
   git clone git@github.com:lualreye/terranet-backend.git
   ```

2. Install dependencies 

   ```sh
   # Install from the root directory
   npm install
   ```

3. Configure the environment variables

   ```sh
   # Create a .env file using the .env.example file. 
   # For MONGO_URL variable use the following uri: mongodb://root:ka8i5crYwEqY@localhost:27017/?authMechanism=DEFAULT&tls=false
   nano .env
   #or
   vim .env
   ```

4. Start the Backend app

   ```sh
   # From the root directory
   npm run dev
   ```

   The app will be listenning at the following url http://localhost:3001/

5. Install new dependencies 

    ```sh
   # From the root directory
   npm install DependencyName --save
   npm install @types/DependencyName -D
   ```


## 📂 API Documentation

*****
Once you start the app, the documentation will be available on the following url: http://localhost:3001/api-documentation

DOCUMENTING A NEW ENDPOINT

   Use the swaggerImp.json file and follow these steps:
   1. Add another tag using the name of the endpoint and a short description of what operation does. e.g. <br />
     "name": "profiles",<br />
     "description": "operations for managing users profiles"

   2. Go to "paths" section and add the path termination that goes after "http://localhost:3001/{path}"

   3. Add all statics methods for the endpoint specifing the tag where it should be, a summary, a description, parameters and responses of these methods.

   4. Create and use schemas for parameters and/or responses on the components section following the format of the previous schemas.

   5. In order to add dynamics methods, add another "path" specifying the parameter needed at the end of the url as followed. e.g. <br />
   "/profiles/{name}":{...} <br />
   Where "name" is the parameter that gets the method and is used for the endpoint to serve the data needed.

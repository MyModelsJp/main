# MyModels.jp
> WIP site
> [deployed site](https://www.mymodels.jp/)

## Local Development

 1. Clone the project for local development `https://github.com/MyModelsJp/main.git`
 2. Run `npm install or npm i` and `npm install netlify-cli -g`
 3. Run `netlify dev` for local development

## Updating the deployed application
Since this is deployed on Netlify, every commit pushed to the main branch will automatically trigger a build and deployment. 
Before committing to main, please try running `npm run build` locally. This build process is the same CLI command that will run during the Netlify build pipeline on each commit.

## Optional
If you want to create custom APIs within the application use this [guide](https://dev.to/thisdotmedia/build-your-backend-with-netlify-functions-in-20-minutes-2gc4)

### TLDR

 1. Create a `netlify.toml` at the project root.
 2. Inside of `netlify.toml` add these lines
 ```
 # netlify.toml
 [build]
 functions = "functions/"
```
3. Create a folder named `functions` — this is where your custom API functions will live.
4. At the end your folder struct should look like this

```
my-app
├── functions
│   └── hello.js
└── netlify.toml
└── rest of the tree...
```

### Example of a function inside the functions folder

> Remember to always make the function as exports.handler since thats how netlify calls the function
> > create file for each function

```
// functions/create.js
const { nanoid } = require("nanoid");
const { dynamoDb } = require("../dyno-client")

exports.handler = async(event, context) => {
    try {
        // parse form data
        const body = JSON.parse(event.body);

        // create item to insert
        const params = {
            TableName: TABLE_NAME,
            Item: {
                key: nanoid(7),
                text: body.text,
                createDate: new Date().toISOString(),
            },
        };

        let result = await dynamoDb.put(params).promise();

        // return success
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                data: result,
            }),
        };

    } catch (error) {
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify(error),
        };
    }

};
```

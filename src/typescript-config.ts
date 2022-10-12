//NOTE: 1.To Auto Compile a specific file (Watch Mode)
//tsc app.js -w or tsc app.js --watch

//NOTE: 2.To Compile all files of project (Watch Mode)
//tsc -w or tsc --watch

//NOTE: 3.To Generates typescript config file
//tsc --init

//NOTE: 4.Should Not Compile files (exclude)
//In typescript config file add a field "exclude": ["app.ts"] // This file not compiled any more
//should not compile this all files they have .dev.ts name "exclude": ["*.dev.ts"]
//should not compile this all files in any folder they have .dev.ts name "exclude": ["**/*.dev.ts"]
//We can also specify folder name to not compile "exclude": ["node_module"]  //node_module is by default set 

//NOTE: 5.All specified name should compile but not all (include)
//include is apposite of exclude
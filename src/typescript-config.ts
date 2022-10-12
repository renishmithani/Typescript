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

//NOTE: 6.outDir
//This option is use to all compiling files store in specific folder "outDir":"./folder_name"

//NOTE: 7.rootDir
//This Option is used to all main fils are stored in specific folder "rootDir":"./src"

//NOTE: 8.noEmit
//while run the typescript code, typescript cant generate javascript files they can give only status of typescript code

//NOTE: 9.noEmitOnError
//This option is used to stop generate javascript while typescript has error "noEmitOnError":true
//It will not generate javascript file while it has error

//IMP: 10.sourceMap = true   //For debug code
//This option is used to debug typescript code in browser ( "sourceMap": true )

//NOTE: 11.checkJs
//It will report error in .js files

//NOTE: 12.allowJs
//It will allow .js files to be compiled, it means javascript files can be compiled

//NOTE: 13."strictNullChecks": false
//strictNullChecks: false is getting error while value of variable is null
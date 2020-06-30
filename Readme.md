### React-typescript-webpack-boilerplate

Quick starter scaffold for experiements

The bash alias will clone, rename and start the server

in bash profile
```
function boilerplate(){
  git clone https://github.com/lek890/react-typescript-webpack-boilerplate.git;
  mv react-typescript-webpack-boilerplate $1; 
  cd $1; 
  yarn; 
  yarn start;
}
```

usage:

```
boilerplate a-new-experimental-project
```

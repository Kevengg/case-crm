declare module '.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// If you are using Sass/SCSS, add this as well:
declare module '.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
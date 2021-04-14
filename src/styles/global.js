import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/**
 * YUI 3.5.0 - reset.css (http://developer.yahoo.com/yui/3/cssreset/)
 * https://cssdeck.com/blog/
 * Copyright 2012 Yahoo! Inc. All rights reserved.
 * http://yuilibrary.com/license/
 */
/*
	TODO will need to remove settings on HTML since we can't namespace it.
	TODO with the prefix, should I group by selector or property for weight savings?
*/
html{
	color:#000;
	background:#FFF;
}
/*
	TODO remove settings on BODY since we can't namespace it.
*/
/*
	TODO test putting a class on HEAD.
		- Fails on FF.
*/
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
	margin:0;
	padding:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset,
img {
	border:0;
}
/*
	TODO think about hanlding inheritence differently, maybe letting IE6 fail a bit...
*/
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
	font-style:normal;
	font-weight:normal;
}
 
ol,
ul {
	list-style:none;
}
 
caption,
th {
	text-align:left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size:100%;
	font-weight:normal;
}
q:before,
q:after {
	content:'';
}
abbr,
acronym {
	border:0;
	font-variant:normal;
}
/* to preserve line-height and selector appearance */
sup {
	vertical-align:text-top;
}
sub {
	vertical-align:text-bottom;
}
input,
textarea,
select {
	font-family:inherit;
	font-size:inherit;
	font-weight:inherit;
}
/*to enable resizing for IE*/
input,
textarea,
select {
	*font-size:100%;
}
/*because legend doesn't inherit in IE */
legend {
	color:#000;
}
/* YUI CSS Detection Stamp */
#yui3-css-stamp.cssreset { display: none; }

/* inter-100 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  src: local(''),
       url('../fonts/inter-v3-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-200 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url('../fonts/inter-v3-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-300 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('../fonts/inter-v3-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/inter-v3-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-500 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('../fonts/inter-v3-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-600 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/inter-v3-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('../fonts/inter-v3-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-800 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('../fonts/inter-v3-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* inter-900 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('../fonts/inter-v3-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/inter-v3-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* open-sans-300 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('../fonts/open-sans-v18-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/open-sans-v18-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/open-sans-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/open-sans-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/open-sans-v18-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/open-sans-v18-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}



* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter', 'Opens Sans' , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }


`;

export default GlobalStyles;

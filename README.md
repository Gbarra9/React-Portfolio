<div id="top"></div>

# Gene's React Portfolio

<h2>Table of Contents</h2>

1. <a href="#description">Description</a>
2. <a href="#website">Website</a>
3.
4.
5.

---

<h2 id="description">Description</h2>

The following project is my personal portfolio. My motivation for creating the portfolio was to create a new portfolio for myself and for future employers to view. The portfolio was made using React and has Google Analytics implemented to track visitors, primarily hiring managers.

---

<h2 id="website">Website</h2>

<a href="https://genebarra.dev">Live Website</a>
<a href="https://genebarra.dev"><img src="https://user-images.githubusercontent.com/33293205/103592117-28323b00-4ec0-11eb-9d5b-57b6fba1f453.png"></a>

## Programming Languages / Libraries / Frameworks

<p>React</p>
<p>CSS</p>
<p>SASS</p>

## Technologies / Tools

<p>Figma</p>
<p>VScode</p>
<p>Github</p>
<p>Netlify</p>

---

## Dependencies

<a href="https://www.npmjs.com/package/react-router-dom">
  <p>react-router-dom</p>
</a>
<a href="https://github.com/react-ga/react-ga">
  <p>react-ga</p>
</a>
<a href="https://github.com/sass/node-sass">
  <p>node-sass</p>
</a>

---

## Features

<h3>Light/Dark Theme Toggle</h3>
<p>There is a trend with websites or applications providing users the ability to change the layout based on a dark or light theme. React Context was used for state mangement and local storage to maintain the theme on refresh. The theme was set to dark theme by default due to my partial preference of dark theme over light theme layouts</p>

<h3>React Router DOM for Routes</h3>
<p>Using a Single Page Application and receiving resources upon a request from the server, React Router is able to change the appearance based on components. 
</p>

<p>When switching to a route, the client does not need to refresh and send multiple requests to the server for each route. In short, react router helps the user to navigate to different parts of the application without the need of reloads or server requests.</p>

<p>React Router was also used to protect my url routes. By defining routes, you are able to control where users are allowed to not allowed to visit. In the instances of non-existent routes, I was able to set up a 404 page.</p>

<h3>Google Analytics</h3>
<p>The main motivator for implementing Google Analytics was to see visitors tracking. Google Analytics requires a bit of tweeking if you are using a single page application. </p>

---

## Opportunity / Difficulty

<br>

<h3>Figma</h3>
<p>I was given the opportunity to learn Figma by creating my own layouts and wireframing my website. Figma is tool allowing designers or developers to plan the design of a website or app. Although new to Figma, I am satisfied with the design, how the design was translated to code, and the final product. Sections of the final product based on the pre-designs were altered while I was coding. The main alteration was done for the projects page.</p>
<br>

<h3>React Context</h3>
<p>In the past, I had experience using redux for centralising state management and managing props among components. I learned React Context to maintain my website's theme. Using React Context was a suitable choice. Context allows sharing state between components and avoids prop drilling.</p>

<h3> Google Analytics</h3>
<p>I relied on react-ga to handle the information being sent to my personal google analytics. This took a bit of time to setup but will be beneficial to see if hiring managers are visiting my site and their interactions.</p>

---

## Upcoming Future Improvement / Features

<p>Every project has areas to be improved upon. My portfolio project can see improvements in its error handling for local storage. I can also decrease image file size using new image formats.</p>

<p>A future feature I am excited to add on to my website is a contact form. This contact form would be built using node.js, express, Nodemailer and Formik for form handling.</p>

---

<p align="center" width="100%">
  <a href="#top">Back to top</a>
</p>

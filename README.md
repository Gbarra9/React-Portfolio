<div id="top"></div>

# Gene's React Portfolio

<h2>Table of Contents</h2>

1. <a href="#description">Description</a>
2. <a href="#website">Website</a>
3. <a href="#techtools">Programming Languages / Libraries / Frameworks / Technologies / Tools</a>
4. <a href="#design">Design / Wireframes</a>
5.

---

<h2 id="description">Description</h2>

The following project is my personal portfolio. My motivation for creating the portfolio was to create a new portfolio for myself and for future employers to view. The portfolio was made using React and has Google Analytics implemented to track visitors, primarily hiring managers.

---

<h2 id="website">Website</h2>

<a href="https://genebarra.dev">Live Website</a>
<a href="https://genebarra.dev"><img src="https://user-images.githubusercontent.com/33293205/103592117-28323b00-4ec0-11eb-9d5b-57b6fba1f453.png"></a>

<h2 id="techtools">Programming Languages / Libraries / Frameworks / Technologies / Tools</h2>

### Programming Languages / Libraries / Frameworks

<p>
<img align="left" alt="React" width="26px" src="https://user-images.githubusercontent.com/33293205/103695756-2b363580-4f6b-11eb-8b19-88e03a23ddb9.png" />React</p>
<p><img align="left" alt="SASS" width="26px" src="https://user-images.githubusercontent.com/33293205/103695748-283b4500-4f6b-11eb-8af0-891882d90e4f.png" />SASS</p>
<p><img align="left" alt="CSS" width="26px" src="https://user-images.githubusercontent.com/33293205/103695745-270a1800-4f6b-11eb-83a4-38f46c2178a0.png" />CSS</p>


### Technologies / Tools

<p><img align="left" alt="Figma" width="26px" src="https://user-images.githubusercontent.com/33293205/103695741-25d8eb00-4f6b-11eb-8b7b-22dc430a1328.png" />Figma</p>
<p><img align="left" alt="VSCode" width="26px" src="https://user-images.githubusercontent.com/33293205/103695735-24a7be00-4f6b-11eb-8d90-5213d85766ab.png" />VSCode</p>
<p><img align="left" alt="Netlify" width="26px" src="https://user-images.githubusercontent.com/33293205/103699337-c8479d00-4f70-11eb-8da7-21aae529c796.png" />Font Awesome</p>
<p><img align="left" alt="Font-Awesome" width="26px" src="https://user-images.githubusercontent.com/33293205/103699344-c978ca00-4f70-11eb-8e69-cf5dd072aee4.jpg" />Ionicons</p>

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

<h2 id="design">Design / Wireframes</h2>

<br/>

### Dark Theme Desktop
<img align="center" alt="dark-theme-desktop" src="https://user-images.githubusercontent.com/33293205/103698034-bfee6280-4f6e-11eb-85f6-3c63dc9e7d35.png" />

<br/>

### Light Theme Desktop
<img align="center" alt="light-theme-desktop" src="https://user-images.githubusercontent.com/33293205/103698030-bf55cc00-4f6e-11eb-99b5-3b1178fb4457.png" />

<br/>

### Dark Theme Mobile
<img align="center" alt="dark-theme-mobile" src="https://user-images.githubusercontent.com/33293205/103698031-bfee6280-4f6e-11eb-9ad0-4ca0d36720e6.png" />

<br/>

### Light Theme Mobile
<img align="center" alt="light-theme-mobile" src="https://user-images.githubusercontent.com/33293205/103698033-bfee6280-4f6e-11eb-9801-767077084c91.png" />

<br/>

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

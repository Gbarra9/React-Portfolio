<div id="top"></div>

# Gene's React Portfolio

<h2>Table of Contents</h2>

1. <a href="#description">Description</a>
2. <a href="#website">Website</a>
3. <a href="#techtools">Programming Languages / Libraries / Frameworks / Technologies / Tools</a>
4. <a href="#design">Design / Wireframes</a>
5. <a href="#features">Features</a>
6. <a href="#opportunity"> Opportunity / Difficulty </a>
7. <a href="#future">Upcoming Future Improvement / Features</a>

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

<p><img align="left" alt="Create react app" width="26px" src="https://user-images.githubusercontent.com/33293205/103710697-aacffe80-4f83-11eb-8c35-84668ede43a6.png" />Create React App</p>
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

<h2 id="features">Features</h2>

<h3>Light/Dark Theme Toggle</h3>
<p>There is a trend with websites or applications providing users the ability to change the layout based on a dark or light theme. React Context was used for state mangement and local storage to maintain the theme on refresh. The theme was set to dark theme by default due to my partial preference of dark theme over light theme layouts</p>

<img align="center" alt="theme-toggle-gif" width="40%" height="200px" src="https://user-images.githubusercontent.com/33293205/103700302-48223700-4f72-11eb-8dc7-4ed873f28e43.gif" />

<img align="center" alt="refresh-theme-toggle-gif" width="40%" height="200px" src="https://user-images.githubusercontent.com/33293205/103700307-48bacd80-4f72-11eb-88d5-fe7aba08bfc4.gif" />

<h3>React Router DOM for Routes</h3>
<p>Using a Single Page Application and receiving resources upon a request from the server, React Router is able to change the appearance based on components. 
</p>

<p>When switching to a route, the client does not need to refresh and send multiple requests to the server for each route. In short, react router helps the user to navigate to different parts of the application without the need of reloads or server requests.</p>

<p>React Router was also used to protect my url routes. By defining routes, you are able to control where users are allowed to not allowed to visit. In the instances of non-existent routes, I was able to set up a 404 page.</p>

<img align="center" alt="404-redirect-gif" width="50%" src="https://user-images.githubusercontent.com/33293205/103700303-48bacd80-4f72-11eb-832a-e23e4a203f10.gif" />

<h3>Google Analytics</h3>
<p>The main motivator for implementing Google Analytics was to see visitors tracking. Google Analytics requires a bit of tweeking if you are using a single page application. Below is an audience report by Google Analytics. </p>

<img align="center" alt="404-redirect" width="50%" src="https://user-images.githubusercontent.com/33293205/103703496-9e44a980-4f75-11eb-8d48-dd051fe6bfbd.png" />

<h2 id="opportunity"> Opportunity / Difficulty </h2>

<br>

<h3>Figma</h3>
<p>I was given the opportunity to learn Figma by creating my own layouts and wireframing my website. <a href="https://www.figma.com/" target="_blank">Figma</a> is tool allowing designers or developers to plan the design of a website or app. Although new to Figma, I am satisfied with the design, how the design was translated to code, and the final product. Sections of the final product based on the pre-designs were altered while I was coding. The main alteration was done for the projects page.</p>
<br>

<h3>React Context</h3>
<p>In the past, I had experience using redux for centralising state management and managing props among components. I learned <a href="https://reactjs.org/docs/context.html" target="_blank">React Context</a> to maintain my website's theme. Using React Context was a suitable choice. Context allows sharing state between components and avoids prop drilling. </p>

<p>I was left with two options when implementing my theme context. The first option was to make a separate file with an object of all the color values for light and dark theme. I would insert the the object array of colors to context. I would have to drill down the array of objects based on dark or light theme when theme changed.</p>

<p>The second option was to have the color values as root values in my sass files. By changing the class theme of various react elements the element's color would change. I had to assign the color values to elements leaving more flexibility in the future. </p>
<p>Ultimately, the decision of how to assign and structure my color values was the most problematic. In the end second option was chosen to avoid multiple object destructuring.</p>

#### React Context Code

```jsx
//ThemeContexProvider.js
import React, { useState, createContext, useEffect } from 'react';

// Create a context object and allows children components to have access to context values
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  // Reads local storage for key darkTheme and assigns value to data
  const dataTheme = localStorage.getItem('currentTheme');
  // If there is data in local storage parse stingified data and assign to initialTheme

  // If there is no data assign initialTheme 'darkTheme'
  const initialTheme = dataTheme ? JSON.parse(dataTheme) : 'darkTheme';

  // React Hooks, set initial state to intialTheme value
  const [theme, setTheme] = useState(initialTheme);

  // If theme in state is 'darkTheme' assign currentTheme to 'lightTheme' value
  // If theme in state is 'lightTheme' assign currentTheme to 'darkTheme' value
  const currentTheme = theme === 'darkTheme' ? 'lightTheme' : 'darkTheme';

  // Event toggle
  const toggleTheme = () => {
    // updates theme in state
    setTheme(currentTheme);
  };

  // UseEffect runs when a component first mounts,and render after any update of initial "theme" state
  // localStorage.setItem sets the key in local storage to currentTheme and sets value to the intial theme's value in a stringified value
  useEffect(() => localStorage.setItem('currentTheme', JSON.stringify(theme)), [
    theme,
  ]);

  return (
    // Provider allows components to consume values and subscribes to context changes
    // Consumers or subscribed components when the Provider's value prop changes
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
}
```

<p>ThemeContext was created with the logic of grabbing the localStorage theme. If there was no value set the currentTheme value to 'darkTheme' default. Include methods to toggle state. Set a Provider and assign value to props of theme and toggleTheme for subscribed children components to consume.</p>

```jsx
//App.js

//Wrap Components with ThemeContextProvider to provide value props
<ThemeContextProvider>
  <Switch>
    <Route path='/about' exact component={About}></Route>
    <Route path='/work' exact component={Work}></Route>
    <Route path='/contact' exact component={Contact}></Route>
    <Route path='/' exact component={Home}></Route>
    <Route path='/404' exact component={NoMatch}></Route>
    <Route path='*'>
      <Redirect to='/404' />
    </Route>
  </Switch>
</ThemeContextProvider>
```

<p>Wrap ThemeContextProviider to be available to children components. Allows children components to receive prop values and rerender if components are subscribed to context.</p>

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import '../styles/ThemeToggleButton.scss';

const ThemeToggleButton = () => {
  // Use destructuring and provides ThemeToggleButton with prop values from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // If theme is lightTheme assign sun icon else moon icon
  // Conditional rendering of icons
  const toggleIcon =
    theme === 'lightTheme' ? (
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='fas'
        data-icon='sun'
        className='svg-inline--fa fa-sun fa-w-16 sun-icon'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <title>Sun Icon Theme Toggle</title>
        <path
          fill='currentColor'
          d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
        ></path>
      </svg>
    ) : (
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='fas'
        data-icon='moon'
        className='svg-inline--fa fa-moon fa-w-16 moon-icon'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <title>Moon Icon Theme Toggle</title>
        <path d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'></path>
      </svg>
    );

  return (
    <button
      className='toggle-button'
      // toggleTheme when buutton is clicked changing state
      onClick={toggleTheme}
      aria-pressed={true}
      aria-label='Theme Toggle Button Icon'
    >
      {toggleIcon}
    </button>
  );
};

export default ThemeToggleButton;
```

<p>ThemeToggleButton component is subscribed to ThemeContext using the useContext(ThemeContext). Pass toggleTheme value to button's onClick event handler.</p>

<h3> Google Analytics</h3>
<p>I relied on <a href="https://github.com/react-ga/react-ga">react-ga</a> to handle the information being sent to my personal google analytics. This took a bit of time to setup but will be beneficial to see if hiring managers are visiting my site and their interactions.</p>

---

<h2 id="future">Upcoming Future Improvement / Features</h2>

<p>Every project has areas to be improved upon. My portfolio project can see improvements in its error handling for local storage. I can also decrease image file size using new image formats.</p>

<p>A future feature I am excited to add on to my website is a contact form. This contact form would be built using node.js, express, Nodemailer and Formik for form handling.</p>

---

<p align="center" width="100%">
  <a href="#top">Back to top</a>
</p>

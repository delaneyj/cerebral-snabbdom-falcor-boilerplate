# Cerebral Snabbdom/Falcor Boilerplate
Based on [this official boilerplate](https://github.com/cerebral/cerebral-boilerplate) but wanted to use [cerebral-snabbdom](https://github.com/cerebral/cerebral-snabbdom) & [the experimental falcor module](https://github.com/bfitch/cerebral-falcor-module).
Also updated to Babel 6.x and removed the Cerebral Router for clarity as boilerplate for testing falcor module issues.

## Install
Download or git clone then
```bash
npm i
npm start
```

## Overview

### Snabbdom by default
The project runs with Snabbdom by default and reloads with current state on changes.

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

### Notes
This does not follow the [Cerebral best pratices guide](http://www.cerebraljs.com/bestpractices/structure).  Its more of a simplification of structure when testing experimental modules.  If used for a real project you should follow best practices.
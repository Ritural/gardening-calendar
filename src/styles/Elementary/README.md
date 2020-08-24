# Elementary

### Principles

- We care about Ease of Development and Maintenance vs small file size.
- We see code reviews as essential and valuable.
- We build components vs page templates.
- We use Simplified BEM over utilities.
- We place component focused scss with the JSX component vs in separate styles folder.
- We use SVG over Icon Fonts.
- We educate over document.
- We encourage participation vs gatekeep.
- We do what we can to get the Designer's vision out there as much as budget and time allow.

### Structure

Elementary is split into two layers – Core, and Global. A really import distinction is that **Core defines variables & mixins**, whilst **Global adds global styles**. Another way to look at it is _Core files **don't** create CSS, but Global files **do** create CSS_.

Why is this important? Well, because we are putting the SCSS files next to the JSX of the component. When we import `componentName.scss` into the JSX file, it will place a new `<style type="text/css"></style>` element in the header per component. If we included the Global file that creates css, it would duplicate that code each time we made anew component.

To get around that, we created the _Core_ – you should import this into each component's `scss` file so you get access to all the good stuff like utiltiy Mixins and variables. For \_Global, this is where you define your global generic styles, like how all forms work, or all the h1-h6's look.

This does mean there's a little bouncing back and forth to define Fonts – `@FontFace` creates CSS so need to be set in the _Global_ directory. Then you'll need to configure the variables and mixins in `Core/Type.scss` before pivoting back to `Global/GenericElements/Typography.scss` to define your generic typography using the variables and Mixins you've configured.

It may be fiddly but ensures a clean seperation.

### SASS

As of June 2020, we updated to use the `dart-sass` based version of Sass. This meant we deprecated the use of `@import` and transitioned to the `@use`/`@forward` paradigm. This means we now namespace our stuff – rather than having all Sass variables globally and implicitly available, we'll explictly import what we need. The current approach is similar to this: `@use '../../Core' as core;` This means your variables will be namespaced like `core.$borderRadius` or `core.$blue` for example. You can use `@use '../../Core' as *;` to just use variables without namespacing them, but we prefer to know where our definitions are coming from.

### Layouts – CSS Grid/ Flexbox

We are relying on each component having its macro layout defined by using CSS Grid, and using Flexbox to organise the micro grid.

We have moved away from using a bootstrap style grid as there is now adequate support for using CSS Grid, which is a much more powerful and flexible tool, and is more future focused. We are relying on **Autoprefixer** being built into `create-react-app` to polyfill any IE11 issues.

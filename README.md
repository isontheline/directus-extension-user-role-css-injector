<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/isontheline/directus-extension-user-role-css-injector/refs/heads/main/.github/img/banner.png"></p>

# User Role CSS Injector
> Customize Directus UI with Dynamic User and Role Data Attributes

This hook (forked from [directus-extensions](https://github.com/nerkarso/directus-extensions/blob/master/hooks/current-role/README.md)) injects the current user ID and role in the body element of the Data Studio.
This is useful when you want to apply custom CSS to a specific user or role.

## Usage

1. Install the extension using a package manager or from the Marketplace:

```sh
npm install directus-extension-user-role-css-injector
```

2. **Restart Directus**.

3. Data attribute gets injected in the body element.

![Screenshot 1](https://raw.githubusercontent.com/isontheline/directus-extension-user-role-css-injector/refs/heads/main/.github/img/01.png)

4. Add your custom CSS:

```css
body[data-user-id="..."] {
  /* custom css */
}

body[data-user-role="..."] {
  /* custom css */
}
```

# Basic Shopify Store

This project was created based on a Shopify Theme Development – Online Store 2.0 + TailwindCSS course.

> ⚠ **Important**  
> This is a basic Shopify Theme 2.0, **built from scratch**, converting a basic [skeleton store](https://shopify.dev/themes/tools/cli/installation) into JSON templates, as my own way of improving my knowledge and learning a few tricks regarding Shopify.  
> This isn't "marked ready" and has no intent to be.

> 📃 I didn't followed the course much regarding HTML, JS, Styles, as I didn't like what the instructor was doing, so the HTML structure, design/UX decisions and JS are all mine. I used the course mostly as a guide to the features to develop and to improve about Liquid / Shopify configurations and API.

## Features Covered (WIP)

| Status | Feature |
| :---: | :--- |
| ✔ | Installing Development Tools |
| ✔️ | Navigational Bar + floating search bar |
| ✔️ | 404 Page                     |
| ✔️ | Article Page                 |
| ✔️ | Blog Page                    |
| ✔️ | Cart / Empty Cart Pages |
| ✔️ | Product Collection Page      |
| ✔️ | Collections Page             |
| ✔️ | Homepage (Only basic Index to load modules) |
| ✔️ | Pages (About & Contact)      |
| ✔️ | Advanced Product Page <ul><li>Variation change updates product stock (enable/disable button) and price information</li><li>Images become a carousel on mobile breakpoint.</li></ul>       |
| ✔️ | Search Result / Empty search page |
| ✔️ | Login / Registration / Forgot Password (Single page solution) |
| ✔️ | My Account Page<br><ul><li>Order List with pagination and direct link to Order Detail.</li><li>Address Book full functionality covered here, no need for the user to go to a dedicated page.</li><ul><li>New Address Modal (modal using modern `<dialog>` native component)</li><li>Edit Address Modal, including change the default address.</li><li>Country + Province/State JS component added</li><li>Delete Address logic, with confirmation modal that triggers an Ajax call to the delete form and handles possible errors on the modal.</li></ul><li>Reset Password Ajax call logic + response notification of success, to provide better UX as Shopify doesn't allow users to directly change their password.</li></ul> |
| ✔️ | Order Deails<br> <ul><li>Handled different cases of fullfilment, to not show the same tracking information on every product is they are all part of the same shipping.</li><li>If is a partial / multi shipping, each product has its own information./li></ul>  |
| ✔ | Site fully responsive |
| ⌛ | Code clean-up / general improvements |
| ⌛ | Adding a 3D model on a Product in Shopify |
| Maybe | Turn the Modal / Dialog into a global Class component with more reusability |
| Maybe | Converting project to use JS modules / compiler, adding Vite |
| Maybe | Home Page extra modules |
| Maybe | Minicart |
| Maybe | Convert some snippets and components to be more reusable globally (toast, modals...) |


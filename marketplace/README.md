# Marketplace

## Component development with Redux for the Marketplace

We are using a modular application structure. All new features should usually have their own module. Inside the module should live all of the components necessary for that module and the flux/redux logic if any is needed.

### Steps to create a new module:

#### Manually

**This needs to be updated - it is old already**

1. Create an aptly named module in `src/shared/v02/modules/[back-office|front-office]`.
2. Prefer plural folder names as long as it's relevant so `users` instead of `user`.
3. If your module will have components rendered to the client, create a `components` directory.
4. If your module will have relevant data in the redux store create 4 redux files inside your module root. Assuming your module name is `users`:
  1. UserFlux.js
  2. UserActions.js
  3. UserReducer.js
  4. UserConstants.js
5. Add the boilerplate code to these files from `marketplace/bin/create-module/templates`
6. Update the boilerplate to suit your needs
7. If you are using redux then make sure you import the store to the main store in `marketplace/src/shared/v02/flux`

#### Automatically

1. Choose a module name that doesn't already exist. It should be:
  1. Lowercase
  2. Hyphenated if multiple words
  3. Favour plural so `users` instead of `user`
2. Take this command `npm run create-module -- -n your-module-name -d your-module-path -rc` and substitute `your-module-name` for your module name and `your-module-path` for either `back-office` or `front-office`. By including the -r and -c flags you are requesting redux boilerplate and a components folder for the module. You must supply one of the two.
3. Run the command.
4. Follow on from step 6 in the manual module creation process above.


## Notes

Look at `https://github.com/tannerlinsley/react-table`

## TODO

1. Decide on stateToProps function naming/pattern/location e.g connector(Class) etc..
2. Remove the `_component` pattern - no need for this.
3. Add cloudinary: https://reactjsnews.com/react-js-with-cloudinary
4. Compare structure with other iso frameworks:
  1. https://github.com/Hashnode/mern-starter
  2. https://github.com/yury-dymov/smashing-react-i18n
5. The react router is complaining about a deprecated function of somethingState(). INvestigate and upgrade.
6. Make fetchOne / fetchAll and CRUD action all have the same naming convention.
7. Isomorphic actions should all be for simple fetchOne, fetchAll. They will always take params and query.
8. Remove custom middleware and just use thunk and redux-promise

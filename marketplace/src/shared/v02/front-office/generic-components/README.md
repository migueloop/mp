# GENERIC COMPONENTS - FRONT OFFICE

This directory is for all generic components.

## Definition of a generic components

1. **NO REDUX** - The component is a dumb component that knows nothing about global state.
2. The component is being used multiple times and is not specific to any one module. (If you are making a component in a module that could later be used in other places just leave it inside the module. It can be extracted later when necessary.)

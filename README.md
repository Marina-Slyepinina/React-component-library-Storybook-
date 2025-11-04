This repository contains a small reusable UI component library, developed using React and TypeScript, with demonstration provided in **Storybook**.

🚀 **Setup and Launch Instructions**
Follow these steps to run the project locally:

- Clone the repository
- Install dependencies
- Launch Storybook using the command: npm run storybook (or yarn storybook)

**Components**

The **Input** component is a controlled component that supports enhanced functionality: various type support, clearing capability, and password visibility toggling.

**Functionality**
_Multi-type_: Supports text, number, email, and password types.
_Password Toggle_: If type="password", an icon is displayed to toggle visibility.
_Clearable_: If true, an '✕' button appears to reset the field's value to an empty string (or 0 for type="number").
_Controlled_: The component uses the value and onChange props.
![Screenshots of the Input сomponent's various states](src/stories/assets/Input.png)

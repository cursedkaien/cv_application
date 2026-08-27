# CV Application

A simple CV builder made with React and Vite. The app lets users enter their general information, education details, and practical experience, then submit each section to preview the CV details in a cleaner format.

## Features

- Add and preview general information: name, email, and phone number
- Add and preview education details: school, title of study, start date, and end date
- Add and preview practical experience: company, position, dates, and responsibilities
- Mark a job as current with the "I currently work here" checkbox
- Automatically disables the "Until" date when the current-job checkbox is active
- Edit submitted sections without losing the existing form data
- Responsive form layout styled with CSS

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- ESLint

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the linter:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    CustomInput.jsx
    MainApp.jsx
    Section.jsx
  App.jsx
  main.jsx
  styles.css
```

## Main Components

`MainApp.jsx` manages the form state for all CV sections.

`Section.jsx` handles the submit/edit behavior for each section.

`CustomInput.jsx` is a reusable input component used across the form.

`styles.css` contains the main layout and form styling.

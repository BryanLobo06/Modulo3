# Age Validation Program

A simple and interactive web application that validates user input for name and age, providing personalized motivational messages based on the user's age.

## Features

- **User Input Validation**: Validates name and age inputs
- **Age-based Messages**: Provides personalized motivational messages
- **Error Handling**: Clear error messages for invalid inputs
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and user-friendly interface
- **Keyboard Support**: Submit form using Enter key

## How to Use

1. **Open the HTML file** in any modern web browser
2. **Enter your name** in the first input field
3. **Enter your age** in the second input field
4. **Click "Submit"** or press Enter
5. **View your personalized message** based on your age

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

## Age Categories

### Under 18 Years Old
- **Message**: Encourages continued learning and coding enjoyment
- **Target**: Young learners and students

### 18 Years Old and Above
- **Message**: Motivates for programming career opportunities
- **Target**: Adults and career seekers

## Validation Rules

- **Name**: Must not be empty
- **Age**: Must be a valid number between 0 and 100
- **Error Messages**: Clear feedback for invalid inputs

## Files

- `age_program.html` - English version
- `README.md` - This documentation

## Technical Details

### Technologies Used
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript**: Form validation and dynamic content

### Key Functions
- `validarYMostrarMensaje()`: Main validation and message display function
- `mostrarError()`: Displays error messages
- `mostrarExito()`: Displays success messages

## UI Features

- **Clean Design**: Modern and minimalist interface
- **Color-coded Messages**: 
  - Green for success messages
  - Red for error messages
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and focus states

## Customization

You can easily customize the application by modifying:

- **Age limits**: Change the validation range (currently 0-100)
- **Messages**: Update the motivational text for each age group
- **Styling**: Modify CSS for different visual themes
- **Validation rules**: Add additional input validation

## Example Usage

```
Input:
Name: John
Age: 25

Output:
Hello John!

You are 25 years old and you are of legal age.
Get ready for great opportunities in the world of programming!
```

# LeadProsper Form Integration

This is a simple web form that integrates with the LeadProsper API to submit leads. The form is built with HTML, CSS, and JavaScript, making it easy to deploy and maintain.

## Setup Instructions

1. Replace the configuration values in `script.js`:
   - `apiKey`: Your LeadProsper API key
   - `sourceId`: Your LeadProsper Source ID
   - `apiEndpoint`: The LeadProsper API endpoint (if different from the default)

2. Host the files on your web server:
   - `index.html`
   - `styles.css`
   - `script.js`

## Form Fields

The form includes the following fields:

### Required Fields
- First Name
- Last Name
- Email
- Phone

### Optional Fields
- Address
- City
- State
- ZIP Code
- Additional Notes

## API Integration

The form submits data to LeadProsper using the following headers:
- `Content-Type: application/json`
- `Authorization: Bearer YOUR_API_KEY`
- `X-Source-ID: YOUR_SOURCE_ID`

## Error Handling

The form includes error handling for:
- API connection issues
- Invalid form data
- API response errors

Error messages are displayed to the user in a clear, user-friendly format.

## Customization

### Adding New Fields
1. Add the field to the HTML form in `index.html`
2. Add the field to the `leadData` object in `script.js`
3. Style the new field in `styles.css` if needed

### Modifying Styles
The form uses a clean, modern design that can be customized by modifying the CSS in `styles.css`.

## Security Notes

- The API key is stored in the frontend JavaScript file. For production use, consider implementing a backend proxy to handle API calls.
- Form validation is implemented on both client and server sides.
- HTTPS is recommended for all production deployments.

## Testing

To test the form:
1. Fill out the required fields
2. Submit the form
3. Check the browser console for any errors
4. Verify the success/error message display
5. Confirm the data is received by LeadProsper

## Support

For any issues or questions, please contact your LeadProsper support team. 
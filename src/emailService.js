// src/emailService.js
import emailjs from 'emailjs-com';

export const sendApplicationEmail = async (formData) => {
  // Create a temporary form element
  const dummyForm = document.createElement("form");

  for (let [key, value] of formData.entries()) {
    const input = document.createElement("input");
    input.name = key;
    input.value = value;
    dummyForm.appendChild(input);
  }

  try {
    const result = await emailjs.sendForm(
      "YOUR_SERVICE_ID",     // Replace with your actual service ID
      "YOUR_TEMPLATE_ID",    // Replace with your actual template ID
      dummyForm,
      "YOUR_USER_ID"         // Replace with your actual user ID/public key
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};

export function useFormValidation() {
  const validateRequired = (value, fieldName) => {
    if (!value || typeof value !== 'string' || value.trim() === '') {
      return `${fieldName} is required`;
    }
    return null;
  };

  const validateEmail = (email) => {
    const error = validateRequired(email, 'Email');
    if (error) return error;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePhone = (phone) => {
    const error = validateRequired(phone, 'Phone number');
    if (error) return error;
    
    // Basic phone validation allowing international formats
    const phoneRegex = /^[+]?[\d\s-]{7,20}$/;
    if (!phoneRegex.test(phone.trim())) {
      return 'Please enter a valid phone number';
    }
    return null;
  };

  const validateMinLength = (value, fieldName, minLength) => {
    const error = validateRequired(value, fieldName);
    if (error) return error;

    if (value.trim().length < minLength) {
      return `${fieldName} must be at least ${minLength} characters`;
    }
    return null;
  };

  return {
    validateRequired,
    validateEmail,
    validatePhone,
    validateMinLength
  };
}
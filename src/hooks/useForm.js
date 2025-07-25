import { useState, useCallback } from 'react';

/** 
 * Custom hook for managing form state with validation
 * @param {Object} initialValues 
 * @param {Object} validationRules 
 * @returns {Object} 
 */
export function useForm(initialValues, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});


  const handleChange = useCallback((field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [errors]);


  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    

    if (validationRules[field]) {
      const isValid = validationRules[field](values[field]);
      if (!isValid) {
        setErrors(prev => ({ ...prev, [field]: true }));
      }
    }
  }, [validationRules, values]);


  const validateForm = useCallback(() => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      if (!validationRules[field](values[field])) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(validationRules).reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {}));

    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);


  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);


  const setFormValues = useCallback((newValues) => {
    setValues(prev => ({ ...prev, ...newValues }));
  }, []);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setFormValues,
    isValid: Object.keys(errors).length === 0,
    isDirty: Object.keys(touched).length > 0
  };
}

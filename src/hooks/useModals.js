import { useState, useCallback } from "react";

export const useModals = (initialState = {}) => {
  const [modals, setModals] = useState(initialState);

  const toggleModal = useCallback((modalName, isOpen = null) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: isOpen !== null ? isOpen : !prev[modalName],
    }));
  }, []);

  const closeAllModals = useCallback(() => {
    setModals((prev) =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {})
    );
  }, []);

  return {
    modals,
    toggleModal,
    closeAllModals,
  };
};

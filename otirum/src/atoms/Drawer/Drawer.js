import React, { useEffect, useCallback } from "react";
import Overlay from "../Overlay";
import Portal from "../../Portal";
import { StyledDrawer, StyledClose } from "./Drawer.styled";

export default function Drawer({
  isOpen = true,
  toggleOpen,
  onClose,
  closeLabel,
  children,
  ...rest
}) {
  const handleClose = useCallback(
    event => {
      event.preventDefault();
      toggleOpen();
    },
    [toggleOpen]
  );

  useEffect(() => {
    const handleKeyUp = e => {
      const keys = {
        27: () => {
          e.preventDefault();
          onClose();
        }
      };
      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    };
    window.addEventListener("keyup", handleKeyUp, false);
    document.body.classList.add("modal-overflow-hidden");
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      document.body.classList.remove("modal-overflow-hidden");
    };
  }, [toggleOpen, onClose]);

  return (
    <Portal selector="#modal-root">
      <StyledDrawer p={3} zIndex={4} isOpen={isOpen} {...rest}>
        <StyledClose as="a" onClick={handleClose}>
          {closeLabel}
        </StyledClose>
        {children}
      </StyledDrawer>
      <Overlay show={isOpen} onClick={toggleOpen} />
    </Portal>
  );
}

import React from "react";
import { Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  showToast,
  selectToast,
  selectToastMessage,
} from "../features/favoritesSlice";

export default function ToastMessage() {
  const dispatch = useDispatch();
  const toast = useSelector(selectToast);
  const toastMessage = useSelector(selectToastMessage);

  return toast ? (
    <Toast
      onClose={() => dispatch(showToast(false))}
      delay={2000}
      autohide
      style={{
        position: "absolute",
        zIndex: 2,
        top: 5,
        right: 5,
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">{toastMessage[0]}</strong>
      </Toast.Header>
      <Toast.Body>{toastMessage[1]}</Toast.Body>
    </Toast>
  ) : null;
}

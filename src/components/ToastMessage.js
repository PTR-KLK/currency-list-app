import React from "react";
import { Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { showToast, selectToastMessage } from "../features/favoritesSlice";

export default function ToastMessage() {
  const dispatch = useDispatch();
  const toastMessage = useSelector(selectToastMessage);

  return (
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
        <strong className="mr-auto">
          {toastMessage ? "Currency added" : "Notification"}
        </strong>
      </Toast.Header>
      <Toast.Body>
        {toastMessage
          ? `${toastMessage} added to collection.`
          : "Currency already in the database."}
      </Toast.Body>
    </Toast>
  );
}

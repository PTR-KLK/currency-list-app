import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import {
  setChecked,
  selectFavorites,
  selectChecked,
  removeFavorite,
  selectModal,
  showModal,
  showToast,
  setToastMessage,
} from "../features/favoritesSlice";

export default function ModalMessage() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const checked = useSelector(selectChecked);
  const modal = useSelector(selectModal);

  const handleClose = () => {
    dispatch(showModal(false));
    dispatch(setChecked([]));
  };

  const handleDelete = () => {
    dispatch(
      removeFavorite(favorites.filter((el) => !checked.includes(el.code)))
    );
    dispatch(showModal(false));
    dispatch(
      setToastMessage([
        "Deletion",
        `${checked.join(", ")} removed from collection`,
      ])
    );
    dispatch(showToast(true));
    dispatch(setChecked([]));
  };

  return (
    <Modal show={modal} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Currency Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Delete {checked.join(", ")} from favorites?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

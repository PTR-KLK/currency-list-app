import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

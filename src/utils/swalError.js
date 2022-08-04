import Swal from "sweetalert2";

export const swalError = (errorMessage) =>
  Swal.fire({
    title: "Error!",
    text: errorMessage,
    icon: "error",
    confirmButtonText: "Aceptar",
    timer: 3000,
    timerProgressBar: true,
  });

import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const loginToast = () => {
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully',
  });
};
export const swalError = (err) => {
  Swal.fire({
    title: 'Error!',
    text: err,
    icon: 'error',
    confirmButtonText: 'ok',
  });
};

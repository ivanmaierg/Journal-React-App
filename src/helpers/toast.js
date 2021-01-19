import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: false,
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
export const savedToast = (title = '') => {
  Toast.fire({
    icon: 'success',
    title: `${title} saved!`,
  });
};
export const deleteToast = (title = 'The note') => {
  Toast.fire({
    icon: 'success',
    title: `${title} was deleted`,
  });
};
export const swalError = (err = '') => {
  Swal.fire({
    title: 'Error!',
    text: err,
    icon: 'error',
    confirmButtonText: 'ok',
  });
};
export const swalLoading = (state) => {
  switch (state) {
    case true:
      Swal.fire({
        title: 'Uploading...',
        text: 'Please wait...',
        showConfirmButton: false,
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      break;
    case false:
      Swal.close();
      break;
    default:
      break;
  }
};

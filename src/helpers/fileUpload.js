const fileUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/ds3tqgxy5/image/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  const resp = await fetch(cloudUrl, {
    method: 'POST',
    body: formData,
  });
  if (!resp.ok) {
    return null;
  }
  const cloudResp = await resp.json();
  return cloudResp.secure_url;
};
export default fileUpload;

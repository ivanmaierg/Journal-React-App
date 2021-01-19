import cloudinary from 'cloudinary';
import fileUpload from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'ds3tqgxy5',
  api_key: '414428186332223',
  api_secret: 'GPv3n56BY5j5iLwlkb5C2zMOQEs',
});
/* eslint-disable no-undef */
describe('Pruebas en fileUpload', () => {
  test('debe de cargar un archivo y retornar la url', async () => {
    const resp = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    );
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].split('.')[0];
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });
  test('debe de retornar null', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});

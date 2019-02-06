
import createEncryptor from 'redux-persist-transform-encrypt';

const Encryptor = createEncryptor({ secretKey: 'labeltone-web' });

export default Encryptor;

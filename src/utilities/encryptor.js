/*
 * @file: encryptor.js
 * @description: creating redux store encryptor
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({ secretKey: 'reactjs-base-kit' });

export default encryptor;

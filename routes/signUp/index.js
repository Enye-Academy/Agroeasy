import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { signUpUser, userUpdate } = helpers;

router.post('/signup', signUpUser);
router.put('/userUpdate/:userId', userUpdate);

export default router;

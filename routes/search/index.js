import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { searchProducts } = helpers;

router.get('/search:info', searchProducts);

export default router;

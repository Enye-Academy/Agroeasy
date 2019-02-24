import express from 'express';

import helpers from './helpers';

const router = express.Router();
const {
    allProductsDetails,
    getProductsByUserId,
    productCreate,
    productDetails,
    productDelete,
    productUpdate,
    updateOrCreateItem,
} = helpers;

router.get('/findAll', allProductsDetails);
router.get('/producerId/:id', getProductsByUserId);
// the end point to find products saved in database
router.get('/:id', productDetails);
// the end point to create product and save to database
router.post('/create', productCreate);

router.put('/update', updateOrCreateItem);
router.put('/update/:productsId', productUpdate);

router.delete('/:id', productDelete);

export default router;

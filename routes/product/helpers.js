import _pick from 'lodash.pick';
import mongodb from 'mongodb';
import { INTERNAL_SERVER_ERROR, OK, getStatusText } from 'http-status-codes';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Product } = models;
const { ObjectID } = mongodb;
const { ADD_PRODUCT, DELETE_PRODUCT, CREATE_KEYS, UPDATE_PRODUCT } = CONSTANTS;

export default {
    // finds all products in the db
    allProductsDetails: async (req, res) => {
        try {
            const data = await Product.find();
            return res.json({ data, success: true });
        } catch (error) {
            return res.json({ error, success: false });
        }
    },

    getProductsByUserId: async(req, res) => {
        try {
            const data = await Product.find({ producerId: req.params.id });
            return res.json({ data, success: true });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error, message: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },
    productCreate: async (req, res) => {
        try {
            const productData = _pick(req.body, CREATE_KEYS);
            const product = new Product(productData);

            await product.save();

            return res.json({ data: product, message: ADD_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes products using id
    productDelete: async (req, res) => {
        try {
            const { body, params: { id: _id } } =  req;
            await Product.findByIdAndRemove(_id, body);
            return res.json({ message: DELETE_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // finds only products in the db with given id
    productDetails: async (req, res) => {
        try {
            const data = await Product.findById({ _id: req.params.id });
            return res.json({ data, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // updates products using id
    productUpdate: async (req, res) => {
        try {
            const { body, params:{ productsId: _id } } = req;
            const data = await Product.findOneAndUpdate(_id, body, { new: true } );

            return res.json ({ data, message: UPDATE_PRODUCT, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },
    updateOrCreateItem: async(req, res) => {
        try {
            const { body: product } = req;
            const { _id, producerId } = product;
            let data;

            if (ObjectID.isValid(_id)) {
                const filter = {
                    $and: [
                        { _id: { $eq: _id } },
                        { producerId: { $ne: null } },
                        { producerId: { $eq: producerId } },
                    ],
                };
                data = await Product.updateOne(filter, product);
            } else {
                // Redundant code to catch if user insert invalid '_id'
                delete product._id;

                data = await Product.create(product);
            }

            res.json({ data, product, success: true });
        } catch (error) {
            return res
                .status(INTERNAL_SERVER_ERROR)
                .json({ error, message: getStatusText(INTERNAL_SERVER_ERROR), success: false });
        }
    },
};

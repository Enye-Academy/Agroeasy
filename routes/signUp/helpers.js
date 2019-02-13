import _pick from 'lodash.pick';
import bcrypt from 'bcrypt-nodejs';

import CONSTANTS from './constants';
import models from '../../db/models/';

const { Producer, User } = models;
const { FAIL, NO_EMAIL_PASSWORD, SIGN_UP_KEYS, USER_EXIST, SIGNED_UP, SUCCESS  } = CONSTANTS;

export default {
    signUpUser: async (req, res) => {
        // https://lodash.com/docs/4.17.11#pick
        const userData = _pick(req.body, SIGN_UP_KEYS);
        const { email, password, typeOfProducts } = req.body;

        if(!email || !password){
            return res.send({ 
                data: { title: NO_EMAIL_PASSWORD }, 
                status: FAIL,
            });
        }

        try{
            const previousUsers = await User.findOne({ email });

            if (previousUsers) {
                return res.status(200).json({
                    data:{ title: USER_EXIST },
                    status: FAIL,
                });
            }
        } catch(err){
            res.status(500).json({ err });
        }

        try {
            const user = Object.assign(new User(), userData);

            await bcrypt.hash(password, null, null, (err, hash) => {
                user.password = hash;
            });
            await user.save();

            if(typeOfProducts) {
                const producer = Object.assign(new Producer(), {
                    typeOfProducts,
                    userId: user._id,
                });

                await producer.save();
            }

            return res.status(200).json({
                data: { title: SIGNED_UP },
                status: SUCCESS,
            });

        } catch(error) {
            res.status(500).json({ error, success: false });
        }
    },
    //This does not log the user in, but does create an account via API.
};

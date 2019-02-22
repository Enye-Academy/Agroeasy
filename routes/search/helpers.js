import elasticSearch from 'elasticsearch';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';

const client = new elasticSearch.Client({
    host: 'http://localhost:9200',
    log: 'trace',
});

export default {
    searchProducts: async (req, res) => {
        try {
            const response = await client.search({
                body: {
                    query: {
                        match: {
                            'description': req.params.info,
                        },
                    },
                },
                index: 'products',
                type: '_doc',
            });
               
            res.status(OK).json(response);
        } catch (error){
            res.status(INTERNAL_SERVER_ERROR).json(error);
        }
    },
};

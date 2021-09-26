const Hotel = require ('../models/Hotel');

module.exports = {
    searchHotels: async (filters) => {
        let query = {};
        if (filters.name) {
            query['name'] = {
                $regex: filters.name,
                $options: 'i'
            };
        }
        let hotels = await Hotel.find(query);
        return hotels;
    }
};
const { Book, User} = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Class } = require("@material-ui/icons");

const resolvers = {
    
    books: async()=>{
        return await Class.find({});
    }
    






}

module.exports = resolvers;

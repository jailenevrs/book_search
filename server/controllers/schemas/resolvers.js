const { Book, User} = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Class } = require("@material-ui/icons");

const resolvers = {
    Query:{
        getME: async (parent, args, context) =>{
            if(context.user){
                return User.findOne({_id: context.user._id})
                .populate('savedBooks')
                .select('-password')
            }
            throw new AuthenticationError ('Must be logged in')
        }
    },
    
    Mutation:{
        loginUser: async(parent,{ email, password}) => {
            const user = await User.findOne({email});

            if(!user){
                throw new AuthenticationError('No user with this email adress')

            }

            const pw = await user.isCorrectPassword({password});
            if (!pw) {
                throw new AuthenticationError ('Incorrect credentials');
            }
            const token = signToken(user);

      return { token, user };
        },
        addUser: async(parent,{email,password, username}) =>{
            const user= await User.create({email,password, username});
            const token = signToken(user);
            return { token, user}
        },
        saveBook: async (parent,{bookData}) => {
            if (context.user ){
            const userBook= await User.findByIdAndUpdate(
                {
                    _id: context.user._id,
                  },
                  {
                    $push: {
                      savedBooks: bookData,
                    },
                  },
                  {
                    new: true,
                  }
                );
                  return userBook
                  } 
                   
        },
        removeBook: async (parent,{bookData}) =>{
            if (context.user){
                const bookRemove = await User.findByIdAndUpdate(
                    {
                        _id: context.user._id,
                      },
                      {
                        $pull: {
                          savedBooks: bookData,
                        },
                      },
                      {
                        new: true,
                      }
                    );
                      return bookRemove
                
            }
        }
    






}

module.exports = resolvers;

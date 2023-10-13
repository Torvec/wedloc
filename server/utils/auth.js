const jwt = require('jsonwebtoken');
const expiration = '2h';
require('dotenv').config();
// const secret = "mysecret";

module.exports = {
    authMiddleware: function ({ req }) {
        // console.log('we hit authMiddleware')
        let token = req.query.token || req.body.token || req.headers.authorization;
      
        if (req.headers.authorization) {
          token = token.split(' ').pop().trim();
        }
  
        // if (!token) {
        //   throw new Error('You have no token!');
        // }
      
        try {
          const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
          req.user = data;
          } catch {
          // throw new Error('Invalid token');
        
        }
        return req;
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
    
        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: expiration });
        
        // return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
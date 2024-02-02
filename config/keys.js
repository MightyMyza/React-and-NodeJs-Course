// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // Return Production Keys
  module.exports = require("./prod");
} else {
  // Return Dev Keys
  module.exports = require("./dev");
}

// AtlasUsername myransivanesan
// AtlasPassword YXlfalVQ0VwUH6Xe

// AtlasDevUsername myransivanesan
// AtlasDevPassword WzWg9AaRBVoxw2eQ

// mongodb+srv://myransivanesan:WzWg9AaRBVoxw2eQ@cluster0.vudtxkb.mongodb.net/emailyprod?retryWrites=true&w=majority

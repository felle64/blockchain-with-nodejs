const crypto = require("../controllers/hash");
const GENESIS_DATA = require("../config/config");

class Block {
  constructor({ timestamp, data, hash, lastHash }) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }

  static genesis() {
    // return new Block(GENESIS_DATA);
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    return new this({
      timestamp,
      lastHash,
      data,
      // skapa aktuellt block's hash
      hash: crypto(timestamp, lastHash, data),
    });
  }
}

module.exports = Block;

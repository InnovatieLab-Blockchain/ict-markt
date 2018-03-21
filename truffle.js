module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
      rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x7D4E2bF714C8F4AB2451cfA437A1f71fA81ad4Bf", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 4612388 // Gas limit used for deploys
      }
    }
  };

  // Quiz.sol op Rinkeby: 0x779cc5bc0d5897ab88e6d8711c953e1f88ae857e
  // 0x2d6fce86ce3142da016144a53520b2f444e7be08
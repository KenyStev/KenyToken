const KenyToken = artifacts.require("KenyToken");

module.exports = function (deployer) {
    deployer.deploy(KenyToken);
};

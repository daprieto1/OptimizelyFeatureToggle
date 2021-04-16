'use strict';

const FeatureFlag = require('./featureFlag');

module.exports = () => {

    const services = {
        featureFlag: new FeatureFlag()
    }

    return services;
};

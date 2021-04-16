'use strict';

module.exports = (services, options) => {
    return {
        getEnableFeaturesByOrganization: async (request) => {
            return {name: await services.featureFlag.getEnableFeaturesByOrganization()};
        }
    }
}

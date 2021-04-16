'use strict';

module.exports = (services, clients, options) => {

    return {
        getEnableFeaturesByOrganization: async (request) => {

            const {orgId} = request.params;

            return clients.optimizely.getEnabledFeatures(orgId, {orgId});
        }
    }
}

'use strict';

const internals = {};
module.exports = (services, clients, options) => {

    internals.parseDecision = (decision) => {

        const result = {...decision};
        delete result.userContext.optimizely;
        return result;
    };

    return {
        getFeaturesByOrganization: async (request) => {

            const {orgId} = request.params;

            const context = clients.optimizely.createUserContext(orgId, {orgId});
            return Object.entries(context.decideAll()).map(item => internals.parseDecision(item[1]));
        },
        getEnableFeaturesByOrganization: async (request) => {

            const {orgId} = request.params;
            return clients.optimizely.getEnabledFeatures(orgId, {orgId});
        },
        getEnableFeaturesByName: async (request) => {

            const {name, orgId} = request.params;

            const context = clients.optimizely.createUserContext(orgId, {orgId});
            return internals.parseDecision(context.decide(name))
        }
    }
}

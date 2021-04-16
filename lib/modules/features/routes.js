'use strict';

module.exports = (handlers) => [
    {
        method: 'GET',
        path: '/features/organizations/{orgId}',
        config: {
            handler: handlers.getFeaturesByOrganization
        }
    },
    {
        method: 'GET',
        path: '/features/organizations/{orgId}/enabled',
        config: {
            handler: handlers.getEnableFeaturesByOrganization
        }
    },
    {
        method: 'GET',
        path: '/features/{name}/organizations/{orgId}',
        config: {
            handler: handlers.getEnableFeaturesByName
        }
    }
];

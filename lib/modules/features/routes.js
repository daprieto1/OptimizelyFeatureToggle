'use strict';

module.exports = (handlers) => [
    {
        method: 'GET',
        path: '/features/organizations/{orgId}/enabled',
        config: {
            handler: handlers.getEnableFeaturesByOrganization
        }
    }
];

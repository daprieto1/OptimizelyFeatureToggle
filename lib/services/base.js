'use strict';

module.exports = class {

    constructor(repository) {

        this.repository = repository;
    }

    setService(name, service) {

        this[name] = service;
    }
};

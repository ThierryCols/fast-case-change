/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const extension = require('../extension');


// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {

    // Defines a Mocha unit test
    test("Pascal Case", function() {
        assert.equal('PascalCase', extension.toPascalCase('pascal-case'));
        assert.equal('PascalCase', extension.toPascalCase('pascal_case'));
        assert.equal('PascalCase', extension.toPascalCase('pascalCase'));
        assert.equal('PascalCase', extension.toPascalCase('PascalCase'));
        assert.equal('Pascal', extension.toPascalCase('pascal'));
        assert.equal('', extension.toPascalCase(''));
    });

    test("Camel Case", function () {
        assert.equal('camelCase', extension.toCamelCase('camel-case'));
        assert.equal('camelCase', extension.toCamelCase('camel_case'));
        assert.equal('camelCase', extension.toCamelCase('camelCase'));
        assert.equal('camelCase', extension.toCamelCase('CamelCase'));
        assert.equal('camel', extension.toCamelCase('Camel'));
        assert.equal('', extension.toCamelCase(''));
    });

    test("Snake Case", function () {
        assert.equal('snake_case', extension.toSnakeCase('snake-case'));
        assert.equal('snake_case', extension.toSnakeCase('snake_case'));
        assert.equal('snake_case', extension.toSnakeCase('snakeCase'));
        assert.equal('snake_case', extension.toSnakeCase('SnakeCase'));
        assert.equal('snake', extension.toSnakeCase('Snake'));
        assert.equal('', extension.toSnakeCase(''));
    });

    test("Kebap Case", function () {
        assert.equal('snake-case', extension.toKebapCase('snake-case'));
        assert.equal('snake-case', extension.toKebapCase('snake_case'));
        assert.equal('snake-case', extension.toKebapCase('snakeCase'));
        assert.equal('snake-case', extension.toKebapCase('SnakeCase'));
        assert.equal('snake', extension.toKebapCase('Snake'));
        assert.equal('', extension.toKebapCase(''));
    });
});
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const { DefaultEditMenu, Provider, MenuItem } = require('../src');

const renderer = ReactTestRenderer.create(
    <Provider>
        <DefaultEditMenu>
            <MenuItem label="Check for updates..." />
        </DefaultEditMenu>
    </Provider>
);

console.log(renderer.toJSON());

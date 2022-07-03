'use strict';
const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');

const App = () => (
	<Gradient name="summer">
		<BigText text="spotify cli" align='center' font='chrome'/>
	</Gradient>
);

module.exports = App;
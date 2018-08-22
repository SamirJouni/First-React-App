import React, { Component } from 'react';
import 'tachyons';
import './Hello.css';


class Hello extends Component {

	render() {
		return (
			<div className="tc f1">
				<h1>Hello World!</h1>
				<p>This Is My First React Component!</p>
			</div>
		);
	}
}

export default Hello;
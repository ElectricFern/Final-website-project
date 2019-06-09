import React from 'react';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class TemplateListItem extends React.Component{


	localAddToCanvas = (e) => {
		e.preventDefault();
		this.props.addToCanvas(e.target, this.props.property_type, this.props.zIndex);
	}

	render(){

		return(

			<Col xs={5} sm={4} md={3}>
                <Button variant="link" className="thumbnail" onClick={this.localAddToCanvas}>
                	<img className="design-image" alt ="" src={this.props.url} />
                </Button>
            </Col>
		);
	}
}
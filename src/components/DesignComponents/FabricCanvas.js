import React from 'react';
import {fabric} from 'fabric';
import Button from 'react-bootstrap/Button';


class FabricCanvas extends React.Component{



	componentDidMount(){

	// 	var width = 400;
	// 	var height = 550;
	// 	var scaleFactor =1;

	// 	if(screen.width < 800) {
	// 		scaleFactor = 0.8;
	//    } else if (screen.width > 1200) {
	// 		scaleFactor = 1.2;
	//    } 
	 
	//    width = width * scaleFactor;
	//    height = height * scaleFactor; 

		// Make a New Canvas
		this.the_canvas = new fabric.StaticCanvas('main-canvas', {
			preserveObjectStacking: true,
			height:550,
			width:400,
		});
	}

	componentWillReceiveProps = (newProps) =>{

		// If Updated Item is not the same as the old one
		// 		=> Update the canvas with newer item
		if(newProps.activeProperty !== this.props.activeProperty){
			this.updateCanvasforImage(this.props.activeProperty,newProps.activeProperty);
		}
	}

	updateCanvasforImage = (prev,next) => {

		if(next){

			let to_remove;
			// Find the same kind of element
			this.the_canvas.forEachObject( (object) => {

				if(object.the_type === next.the_type){
					to_remove = object;
				}
			} );

			this.the_canvas.remove(to_remove);

			if(next.the_type === 'bg'){
				this.the_canvas.setBackgroundImage(next);
				this.the_canvas.renderAll();				
				return;
			}

			this.the_canvas.add(next);
			this.the_canvas.moveTo(next, next.zIndex);
		}
	}

	saveToCanvas = () => {

		let link = document.createElement("a");
		link.href = this.the_canvas.toDataURL({format: 'png'});
      	link.download = "design.png";
     	link.click();

	}
	
	render(){
		
		return (
			<div className= "main-canvas-container">
				
				<canvas className='main-canvas' id= 'main-canvas'>
				</canvas>

				<Button variant="dark" onClick = {this.saveToCanvas} size="medium" block>
                	Download Design
              	</Button>
			</div>
		);
	}
}

export default FabricCanvas;
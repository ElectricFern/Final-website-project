import React, { Component } from 'react';
import './GalleryGrid.scss';
import data from '../../data/data';
import Button from 'react-bootstrap/Button';
const datapoints = data.properties;

// Component for gallery image
class GalleryImage extends React.Component {
    render() {
      return(
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      )
    }
}
  
// Component for gallery modal
class GalleryModal extends Component {
    render() {
        if (this.props.isOpen === false) {
            return null;
      }
      
        return(
            <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
            <div className='modal-body'>
                <Button variant="dark" size='sm' className='modal-close' onClick={this.props.onClick}><span className='fa fa-times'></span></Button>
                
                <img className='modal-item' src={this.props.src} alt={this.props.alt}/>
            </div>
            </div>
        )
    }
}

class GalleryGrid extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          showModal: false,
          url: ''
        }
        
        this.openModal = this.openModal.bind(this);
        
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        return(
          <div refs='gallery-container' className='container-fluid gallery-container'>
            <div className='row'>
              {
                datapoints.map((datapoint) => {
                   return <div className='col-sm-6 col-md-3 col-xl-2' key={datapoint._id}>
                      <div className='gallery-card'>
                        <GalleryImage className='gallery-thumbnail' src={datapoint.picture} alt={datapoint.altText} />
                        
                        <span className='card-icon-open fa fa-expand' value={datapoint.picture} onClick={(e) => this.openModal(datapoint.picture, e)}></span>
                      </div>
                    </div>
                 })
               }
            </div>
            
            <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} /> 
          </div>
        )
    }
      
    // Function for opening modal dialog
    openModal(url, e) {
         e.preventDefault();
         this.setState({
           showModal: true,
           url: url
        })
    };
    
    // Function for closing modal dialog
    closeModal() {
        this.setState({
          showModal: false,
          url: ''
        })
    }
}

export default GalleryGrid
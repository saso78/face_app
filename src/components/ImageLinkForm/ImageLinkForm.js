import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange}) => {
return (
  <div >
    <p className='f3'>
      {'This magic brain will detect a face in your pictures'}
    </p>
    <div className='center'>
      <div className='pa4 br3 shadow-5 center form'>
    	<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
    	<button className='w-30 grow f4 link f3 ph3 pv2 dib white bg-light-purple'>Detect</button>
      </div>
    </div>
  </div>

		)
}



export default ImageLinkForm;
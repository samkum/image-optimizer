import React, { useState } from 'react'
import { blobToURL, fromBlob } from 'image-resize-compress';

const Listitems = ({ image, imageFile }) => {

  const [ downloadFile, setdownloadFile ] = useState("")

  const handleBlob = (blobFile) => {
    // quality value for webp and jpeg formats.
    const quality = 80;
    // output width. 0 will keep its original width and 'auto' will calculate its scale from height.
    const width = 0;
    // output height. 0 will keep its original height and 'auto' will calculate its scale from width.
    const height = 0;
    // file format: png, jpeg, bmp, gif, webp. If null, original format will be used.
    const format = 'webp';

    // note only the blobFile argument is required
    fromBlob(blobFile, quality, width, height, format).then((blob) => {
      // will output the converted blob file
      console.log(blob);
      // will generate a url to the converted file
      blobToURL(blob).then((url) => {
        setdownloadFile(url)
        console.log(url)
      });
    });
  };

  return (
    <div>
      <table className='w-100 m-3 table'>
        {
          image ?
            <>
              <tr>
                <td>No</td>
                <td>Name</td>
                <td>Image</td>
                <td>Convert</td>
                <td>Download</td>
              </tr>
              <tr>
                <td>1</td>
                <td> Wordpress </td>
                <td> <img className='listimg' src={image} alt="" /> </td>
                <td> <button className='btn btn-primary' onClick={() => handleBlob(imageFile)}>Convert</button> </td>
                <td> 
                  {console.log(downloadFile)}
                  {
                  downloadFile ? <a href={downloadFile} download className='btn btn-primary'>Download</a> : null
                }
                </td>
              </tr></> : null
        }
      </table>
    </div>
  )
}

export default Listitems
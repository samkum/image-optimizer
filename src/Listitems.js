import React from 'react'

const Listitems = ({image}) => {
  return (
    <div>
        <table className='w-100 m-3 table'>
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
                <td> <button className='btn btn-primary'>Convert</button> </td>
                <td> <button className='btn btn-primary'>Download</button> </td>
            </tr>
        </table>
    </div>
  )
}

export default Listitems
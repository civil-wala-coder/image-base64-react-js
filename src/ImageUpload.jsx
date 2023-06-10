import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [baseimage, setBaseimage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios.post('http://localhost:5000/upload', formData)
        .then((response) => {
          setBaseimage(response.data);
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
    console.log("baseimage --> ", baseimage);
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {baseimage && <img width='250px' src={`data:image/*;base64,${baseimage}`} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;



















//******************************************* 1st *********************************** */


// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [baseimage, setBaseimage] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('image', selectedFile);
// console.log("formData formData --> ", formData)
//       axios.post('http://localhost:5000/upload', formData)
//         .then((response) => {
//             setBaseimage(response.data);
//           console.log("baseimage baseimage ---> ", baseimage);
//           // Show success message or perform any other actions
//         })
//         .catch((error) => {
//           console.error('Error uploading image:', error);
//           // Show error message or perform any other actions
//         });
//     }
//   };

//   return (
//     <div>
//       <h2>Image Upload</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//       <img src = {baseimage} /> 
//     </div>
//   );
// };

// export default ImageUpload;

// import React, { useState } from 'react';
// import { jsPDF } from "jspdf";
// import GoogleDriveFileUpload from './GoogleDriveFileUpload';

// function FormDatas() {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const uploadPDF = async (e) => {
//         e.preventDefault();
//         const folderId = '1LuwKXFara7I_uXBWObtv-Hc4EOsw7u8i'; // Google Drive'da yüklemek istediğiniz klasörün ID'si
//         // const scriptUrl = "https://script.google.com/macros/s/AKfycbxMqW96yeY3R2bYyc6bYVu_siJ92rG-kxVZ3jcZoJxccODF6-NCWK7mYRJCIk5YLseSdA/exec"
//         const scriptUrl = "https://script.google.com/macros/s/AKfycbxMqW96yeY3R2bYyc6bYVu_siJ92rG-kxVZ3jcZoJxccODF6-NCWK7mYRJCIk5YLseSdA/exec"
//         // const base64Data = await convertToBase64(pdfData);
//         const base64Data = await convertToBase64(selectedFile)
//         const requestData = {
//             pdfData: base64Data,
//             folderId: folderId,
//         };

//         const data = {
//             email: "utku@test.com",
//             pdfData: base64Data,
//             folderId: folderId,
//             fileName: selectedFile.name
//         }
//         fetch(scriptUrl, {
//             redirect: "follow",
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': "application/json"
//                 // 'Content-Type': 'text/plain;charset=utf-8',
//             },
//             mode: 'no-cors',
//         }).then(response => {
//             console.log("success:", response);
//         }).catch(err => {
//             console.log("Error:" + err);
//         });

//         // const accessToken = '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';

//         // const response = await fetch(scriptUrl, {
//         //     method: 'POST',
//         //     body: JSON.stringify(requestData),
//         //     headers: {
//         //         'Authorization': `Bearer ${accessToken}`,
//         //         'Content-Type': 'application/json',
//         //     },
//         //     mode: 'no-cors', // CORS politikalarını atla
//         // })
//         // if (response.ok) {
//         //     const result = await response.json();
//         //     console.log('Yüklenen Dosyanın ID\'si:', result);
//         // } else {
//         //     console.error('Dosya yüklenirken hata oluştu.', response);
//         // }


//         //////////////////////////
//         // fetch(scriptUrl, {
//         //     method: 'POST',
//         //     body: JSON.stringify(requestData),
//         //     headers: {
//         //         'Authorization': `Bearer ${accessToken}`,
//         //         'Content-Type': 'application/json',
//         //     },
//         //     mode: 'cors', // CORS politikalarını atla
//         // })
//         //     .then(function(response) {
//         //       if (!response.ok) {
//         //         throw new Error('HTTP error, status = ' + response.status);
//         //       }
//         //       return response.text();
//         //     })
//         //     .then(function(data) {
//         //       console.log('Google Apps Script yanıtı:', data);
//         //     })
//         //     .catch(function(error) {
//         //       console.error('Hata:', error);
//         //     });
//     };


//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result.split(',')[1]);
//             reader.onerror = (error) => reject(error);
//         });
//     }

//     function convertToBase64(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => {
//                 // Extract the base64 data from the result
//                 const base64Data = reader.result.split(',')[1];
//                 resolve(base64Data);
//             };
//             reader.onerror = (error) => reject(error);
//         });
//     }

//         function convertToBase64Two(file) {
//             return new Promise(resolve => {
//                 let fileInfo;
//                 let baseURL = "";
//                 // Make new FileReader
//                 let reader = new FileReader();

//                 // Convert the file to base64 text
//                 reader.readAsDataURL(file);

//                 // on reader load somthing...
//                 reader.onload = () => {
//                   // Make a fileInfo Object
//                   console.log("Called", reader);
//                   baseURL = reader.result;
//                   console.log(baseURL);
//                   resolve(baseURL);
//                 };
//                 console.log(fileInfo);
//               });
//         }





//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         console.log("file: ", file);

//         if (file) {
//             setSelectedFile(file)
//             // uploadPDF(file)
//         } else {
//         }
//     };

//     return (
//         <form>
//             <h3>Fill the Form</h3>
//             <div className="mb-3">
//                 <label>Email (optional)</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                 />
//             </div>
//             <div className="mb-3">
//                 <label>File</label>
//                 <input
//                     type="file"
//                     accept=".pdf"
//                     onChange={handleFileUpload}
//                 />
//             </div>
//             {/* <GoogleDriveFileUpload /> */}
//             <div className="d-grid">
//                 <button type="submit" className="btn submit-button" onClick={(e) => uploadPDF(e)}>
//                     Submit
//                 </button>

//             </div>
//         </form>
//     );
// }

// export default FormDatas;


import React, { useState } from 'react';
import axios from 'axios';

function FormDatas() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [email, setEmail] = useState("")
    const [submitting, setSubmitting] = useState(false);

    const uploadPDF = async (e) => {
        e.preventDefault();
        setSubmitting(true)

        // const folderId = '1LuwKXFara7I_uXBWObtv-Hc4EOsw7u8i';
        const folderId = "1oR3Iksj5iyPTeubj6oAqUgY_-LhyokBi"
        // const scriptUrl = "https://script.google.com/macros/s/AKfycbxMqW96yeY3R2bYyc6bYVu_siJ92rG-kxVZ3jcZoJxccODF6-NCWK7mYRJCIk5YLseSdA/exec"
        // const base64Data = await convertToBase64(selectedFile);
        const scriptUrl = "https://script.google.com/macros/s/AKfycbxFFOGC5AJIMA4AKmhcONW7wtOqL7nl82JNcmQ-l6abyEfxtdq61XkSysWtcNGBcww/exec"

        // fetch("http://192.168.1.185:5001/check")
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
        const formData = new FormData();
        formData.append('file', selectedFile);
        const url = "https://sepia-disco-block.glitch.me/uploadFile"
        // const url = "http://192.168.1.185:5001/uploadFile"
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSubmitting(false)
            setSubmitStatus('success');
            console.log('Upload Success:', response.data);
            const requestData = {
                email: email,
                pdfUrl: response.data.fileUrl,
                folderId: folderId,
                fileName: selectedFile.name
            }

            fetch(scriptUrl, {
                redirect: "follow",
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': "application/json"
                    // 'Content-Type': 'text/plain;charset=utf-8',
                },
                mode: 'no-cors',
            })
            // .then(response => {
            //     // setSubmitStatus('success');
            //     // setSubmitting(false)
            // }).catch(err => {
            //     // setSubmitStatus('error');
            //     // setSubmitting(false)
            // });
        } catch (error) {
            // Hata durumunda hatayı yazdırın
            setSubmitting(false)
            setSubmitStatus('error');
            // console.error('Yükleme Hatası:', error);
        }

    };

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
        }
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <form>
            <h3>Fill the Form</h3>
            <div className="mb-3">
                <label>Email (optional)</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChangeEmail}
                />
            </div>
            <div className="mb-3">
                <label>File</label>
                <input
                    type="file"
                    // accept=""
                    onChange={handleFileUpload}
                />
            </div>
            <div className="d-grid">
                {/* <button type="submit" className="btn submit-button" onClick={(e) => uploadPDF(e)}>
                    Submit
                </button> */}
                <button type="submit" className="btn submit-button" onClick={(e) => uploadPDF(e)} disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"} {/* Duruma göre düğme metnini değiştirin */}
                </button>
                {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3" role="alert">
                        Form submitted successfully!
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Error submitting the form. Please try again.
                    </div>
                )}
            </div>
        </form>
    );
}

export default FormDatas;

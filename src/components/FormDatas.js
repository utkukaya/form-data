import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl, contentOfSubtitleSeoForFormData, descriptionOfPage, descriptionOfSeoForFormData, folderIdOfDrive, hrefSeoForFormData, imageSeoForFormData, mainTitleSeoForFormData, nameOfSeoForFormData, scriptUrlForAppsScript, subtitleSeoForFormData, titleOfPage, titleOfSeoForFormData, typeOfSeoForFormData, urlSeoForFormData } from '../helper/constants';
import SEO from '../helper/SEO';
import PaymentForm from './PaymentForm';
import BuyMeACoffeeButton from './BuyMeACoffeeButton';


function FormDatas() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [email, setEmail] = useState("")
    const [submitting, setSubmitting] = useState(false);

    const uploadPDF = async (e) => {
        e.preventDefault();
        setSubmitting(true)
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
            const response = await axios.post(apiUrl + "/uploadFile", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSubmitting(false)
            setSubmitStatus('success');
            const requestData = {
                email: email == "" ? "noname" : email,
                pdfUrl: response.data.fileUrl,
                folderId: folderIdOfDrive,
                fileName: selectedFile.name,
            }
            fetch(scriptUrlForAppsScript, {
                redirect: "follow",
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': "application/json"
                },
                mode: 'no-cors',
            })
        } catch (error) {
            setSubmitting(false)
            setSubmitStatus('error');
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
            <h1>{mainTitleSeoForFormData}</h1>
            <h2>{subtitleSeoForFormData}</h2>
            <p style={{textAlign: "center"}}>{contentOfSubtitleSeoForFormData}</p>
            <SEO
                title={titleOfSeoForFormData}
                description={descriptionOfSeoForFormData}
                name={nameOfSeoForFormData}
                type={typeOfSeoForFormData}
                href={hrefSeoForFormData}
                image={imageSeoForFormData}
                url={urlSeoForFormData}
            />
            {/* <h3>Fill the Form</h3> */}
            <div className="mb-3">
                <label>Email (optional)</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChangeEmail}
                />
            </div>
            <div className="form-group">
                <label>File</label>
                <input
                    type="file"
                    // accept=""
                    onChange={handleFileUpload}
                    className="form-control"
                />
            </div>
            <div className="d-grid">

                <button style={{ marginTop: 20 }} type="submit" className="btn submit-button" onClick={(e) => uploadPDF(e)} disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
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
            <BuyMeACoffeeButton />
        </form>
    );
}

export default FormDatas;

import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl, contentOfSubtitleSeoForFormData, descriptionOfPage, descriptionOfSeoForFormData, folderIdOfDrive, hrefSeoForFormData, imageSeoForFormData, mainTitleSeoForFormData, nameOfSeoForFormData, scriptUrlForAppsScript, subtitleSeoForFormData, titleOfPage, titleOfSeoForFormData, typeOfSeoForFormData, urlSeoForFormData } from '../helper/constants';
import SEO from '../helper/SEO';
import PaymentForm from './PaymentForm';
import BuyMeACoffeeButton from './BuyMeACoffeeButton';


function Payment() {

    return (
        <form>
            <BuyMeACoffeeButton />
        </form>
    );
}

export default Payment;

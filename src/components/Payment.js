import React from 'react';
import { isWebsiteVisible } from '../helper/constants';
import BuyMeACoffeeButton from './BuyMeACoffeeButton';


function Payment() {

    return isWebsiteVisible && (
        <form>
            <BuyMeACoffeeButton />
        </form>
    );
}

export default Payment;

import React from "react";
import { urlOfBuymeacoffe } from "../helper/constants";

function BuyMeACoffeeButton() {
    return (
        <div style={{textAlign: "center", marginTop: 15}}>
            <a href={urlOfBuymeacoffe}>
                <img
                    style={{ height: "50px" }}
                    alt="Buy Me a Coffee Widget"
                    src={require("./buy-meacoffee.png")}
                />
            </a>
        </div>
    );
}

export default BuyMeACoffeeButton;
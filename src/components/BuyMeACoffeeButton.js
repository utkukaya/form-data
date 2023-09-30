import React from "react";

function BuyMeACoffeeButton() {
    return (
        <div style={{textAlign: "center", marginTop: 15}}>
            <a href="https://www.buymeacoffee.com/utkukaya44s">
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
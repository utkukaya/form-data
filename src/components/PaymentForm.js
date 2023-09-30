import React, { useState } from 'react';

function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Burada PayU API'sini kullanarak ödeme işlemini başlatın
    // API çağrıları ve işlemleri burada gerçekleştirilir
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Miktar"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kart Numarası"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Son Kullanma Tarihi"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button onClick={handlePayment}>Ödeme Yap</button>
    </div>
  );
}

export default PaymentForm;

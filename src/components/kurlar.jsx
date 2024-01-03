// import React, { useState, useEffect } from 'react';

// const CurrencyRates = () => {
//   const [rates, setRates] = useState({});

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const response = await fetch('https://api.yapikredi.com.tr/api/investmentrates/v1/');
//         const data = await response.json();
//         setRates(data.rates);
//       } catch (error) {
//         console.error('Döviz kurları alınamadı: ', error);
//       }
//     };

//     fetchRates();
//     const interval = setInterval(fetchRates, 60000); // Her dakikada bir güncelle

//     return () => clearInterval(interval); // Komponent unmount edildiğinde interval temizlenir
//   }, []);

//   return (
//     <div className="currency-rates">
//       <h2>Anlık Döviz Kurları</h2>
//       <ul>
//         <li>USD to EUR: {rates.exchangeRateList}</li>
//         <li>USD to GBP: {rates.previousDaySellRate}</li>
//         {/* Diğer döviz kurları buraya eklenebilir */}
//       </ul>
//     </div>
//   );
// };

// export default CurrencyRates;
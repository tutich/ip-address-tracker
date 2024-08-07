// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const IpTracker = () => {
//   const [ipData, setIpData] = useState(null);
//   const [ip, setIp] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchIpData("8.8.8.8"); // Initial load with a default IP address
//   }, []);

//   const fetchIpData = async (ipAddress) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://geo.ipify.org/api/v2/country,city?apiKey=at_L5xWyhDA2wKSSaSdWv3Vpt3jUuMP4&ipAddress=${ipAddress}`
//       );
//       setIpData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   const handleInputChange = (e) => setIp(e.target.value);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (ip) {
//       fetchIpData(ip);
//     }
//   };

//   // Create a custom icon
//   const customIcon = new L.Icon({
//     iconUrl: "/images/icon-location.svg",
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
//     popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
//   });

//   return (
//     <section>
//       <div className="absolute w-full -z-10">
//         <img
//           src="/images/pattern-bg-desktop.png"
//           alt=""
//           className="w-full h-80"
//         />
//       </div>

//       <div className="max-w-xl mx-auto p-8">
//         <h1 className="font-bold text-2xl lg:text-3xl text-white pb-8 text-center">
//           IP Address Tracker
//         </h1>

//         <form onSubmit={handleFormSubmit} className="mb-4 flex">
//           <input
//             type="text"
//             name="ipaddress"
//             id="ipaddress"
//             placeholder="Search for any IP address or domain"
//             className="w-full py-2 px-4 rounded-l-lg"
//             value={ip}
//             onChange={handleInputChange}
//           />
//           <button type="submit" className="bg-black py-2 px-4 rounded-r-lg">
//             <img src="/images/icon-arrow.svg" alt="arrow" />
//           </button>
//         </form>
//         {loading && <p>Loading...</p>}
//       </div>
//       {ipData && (
//         <>
//         <article className="p-4 md:p-6 lg:p-8">
//             <div
//               className="bg-white rounded-xl p-2 md:p-6 lg:p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-2 md:gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-36 relative lg:-mb-32"
//               style={{
//                 zIndex: 10000,
//               }}
//             >
//               <article className="lg:border-r lg:border-slate-400 p-1 md:p-6">
//                 <h2 className="text-xs md:text-sm uppercase text-slate-600">IP Address</h2>
//                 <p className="font-bold text-slate-900 text-xl md:text-2xl">{ipData.ip}</p>
//               </article>

//               <article className="lg:border-r lg:border-slate-400 p-1 md:p-6">
//                 <h2 className="text-xs md:text-sm uppercase text-slate-600">Location</h2>
//                 <p className="font-bold text-slate-900 text-xl md:text-2xl">
//                   {ipData.location.city}, {ipData.location.region}
//                 </p>
//               </article>

//               <article className="lg:border-r lg:border-slate-400 p-1 md:p-6">
//                 <h2 className="text-xs md:text-sm uppercase text-slate-600">Timezone</h2>
//                 <p className="font-bold text-slate-900 text-xl md:text-2xl">
//                   UTC {ipData.location.timezone}
//                 </p>
//               </article>

//               <article className="p-1 md:p-6">
//                 <h2 className="text-xs md:text-sm uppercase text-slate-600">ISP</h2>
//                 <p className="font-bold text-slate-900 text-xl md:text-2xl">
//                   {ipData.isp}
//                 </p>
//               </article>
//             </div>
//           </article>

//           <MapContainer
//             center={[ipData.location.lat, ipData.location.lng]}
//             zoom={13}
//             scrollWheelZoom={true}
//             style={{ height: "60vh", width: "100%" }}
//           >
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker
//               position={[ipData.location.lat, ipData.location.lng]}
//               icon={customIcon}
//             >
//               <Popup>
//                 <div className="flex items-center">
//                   <img
//                     src="/images/icon-location.svg"
//                     alt="location"
//                     className="w-4 h-4 mr-2"
//                   />
//                   {ipData.location.city}, {ipData.location.region}
//                 </div>
//               </Popup>
//             </Marker>
//           </MapContainer>
//         </>
//       )}
//     </section>
//   );
// };

// export default IpTracker;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const IpTracker = () => {
  const [ipData, setIpData] = useState(null);
  const [ip, setIp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchIpData = async (ipAddress) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_L5xWyhDA2wKSSaSdWv3Vpt3jUuMP4&ipAddress=${ipAddress}`
      );

      setIpData(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIpData("8.8.8.8");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (ip) {
      fetchIpData(ip);
    }
  };

  const handleInputChange = (e) => {
    setIp(e.target.value);
  };

  const customIcon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <>
      <section>
        <div className="absolute w-full -z-20">
          <img
            src="/images/pattern-bg-desktop.png"
            alt="bg"
            className="w-full h-80"
          />
        </div>

        <div className="max-w-xl mx-auto p-8">
          <h1 className="text-2xl lg:text-3xl text-white text-center font-bold pb-8">
            IP Address Tracker
          </h1>

          <form action="" onSubmit={handleFormSubmit} className="flex mb-4">
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search any IP address or Domain"
              value={ip}
              onChange={handleInputChange}
              className="w-full rounded-l-lg py-2 px-4"
            />

            <button type="submit" className="rounded-r-lg px-4 py-2 bg-black">
              <img src="/images/icon-arrow.svg" alt="arrow" />
            </button>
          </form>
          {isLoading && <p>Loading...</p>}
        </div>

        {ipData && (
          <>
            <article className="p-4 md:p-6 lg:p-8">
              <div
                className="p-2 md:p-6 lg:p-8 bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 text-center lg:text-left mx-auto max-w-6xl -mb-36 lg:-mb-32 relative "
                style={{
                  zIndex: 10000,
                }}
              >
                <article className="lg:border-r lg:border-slate-400 p-1 md:p-4">
                  <h2 className="text-xs md:text-sm uppercase text-slate-600">
                    IP Address
                  </h2>

                  <p className="font-bold text-slate-900 text-xl md:text-2xl">
                    {ipData.ip}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-1 md:p-4">
                  <h2 className="text-xs md:text-sm uppercase text-slate-600">
                    Location
                  </h2>

                  <p className="font-bold text-slate-900 text-xl md:text-2xl">
                    {ipData.location.city}, {ipData.location.region}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-1 md:p-4">
                  <h2 className="text-xs md:text-sm uppercase text-slate-600">
                    Timezone
                  </h2>

                  <p className="font-bold text-slate-900 text-xl md:text-2xl">
                    UTC {ipData.location.timezone}
                  </p>
                </article>

                <article className="p-1 md:p-4">
                  <h2 className="text-xs md:text-sm uppercase text-slate-600">
                    ISP
                  </h2>

                  <p className="font-bold text-slate-900 text-xl md:text-2xl">
                    {ipData.isp}
                  </p>
                </article>
              </div>
            </article>

            <MapContainer
              center={[ipData.location.lat, ipData.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "60vh", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[ipData.location.lat, ipData.location.lng]}
                icon={customIcon}
              >
                <Popup>
                  <div className="flex items-center">
                    <img
                      src="/images/icon-location.svg"
                      alt="location"
                      className="w-4 h-4 mr-2"
                    />
                    {ipData.location.city}, {ipData.location.region}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </>
        )}
      </section>
    </>
  );
};

export default IpTracker;

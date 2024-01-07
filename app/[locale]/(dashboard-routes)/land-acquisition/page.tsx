"use client";
import { useStore } from "@/store";
import React from "react";

// store tabs against each role and use that to show number of tabs
const requests = {
  teller: {
    tabs: [{ label: "View Initiated Requests", requestFrom: "teller" }],
  },
  land: {
    tabs: [
      {
        label: "Requests From Mayor",
        requestFrom: "Mayor",
      },
      {
        label: "Requests From Technical Director",
        requestFrom: "Technical Director",
      },
    ],
  },
  mayor: {
    tabs: [
      {
        label: "Requests From Teller",
        requestFrom: "Teller",
      },
      {
        label: "Requests From Land Director",
        requestFrom: "Land Director",
      },
      {
        label: "Requests From Customer Care",
        requestFrom: "Customer Care",
      },
    ],
  },
  // cashier
  // ...
};

const LARPage = () => {
  const { propertyTypes, districts } = useStore();
  //   const districts = useStore(useShallow((state) => state.districts));
  console.log({ districts });
  return (
    <div>
      LAR Page
      {propertyTypes.map((pt) => (
        <div>{pt.name}</div>
      ))}
    </div>
  );
};

export default LARPage;

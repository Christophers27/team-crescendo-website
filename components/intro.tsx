import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-black text-white flex flex-row min-h-screen p-16 space-x-8 items-center">
      <div className="flex-col space-y-4">
        <h2 className="text-2xl font-bold text-white">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          facilisis, magna luctus tincidunt blandit, ligula magna pellentesque
          risus, vel ullamcorper massa leo eu neque. Duis ut pharetra leo. Proin
          in ante imperdiet, porttitor orci at, feugiat nibh. Aliquam eleifend
          vestibulum convallis. Integer pretium lobortis hendrerit. Suspendisse
          felis nisl, lacinia eu felis id, maximus euismod augue. Ut gravida
          auctor nisi, hendrerit varius sem pretium id. Fusce sodales lacus non
          egestas suscipit. Aliquam erat volutpat. Cras justo massa, commodo sed
          risus ut, tincidunt fermentum tortor. Maecenas quam eros, lobortis vel
          tempor ut, hendrerit eu justo. Nulla vel lacus gravida ex aliquet
          pellentesque. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Nulla interdum turpis at egestas
          consectetur. Maecenas vel sagittis magna.
        </p>
      </div>
      <div className="flex-initial">
        <img src="/introImage.JPG" alt="Image" className="object-contain" />
      </div>
    </section>
  );
}

import GalleriList from "../ui/galeri/GaleriList";
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata ={
    title: "Galeri",
    description: "Galeri Page dari Web jurusan To Smk N 1 Bangsri"
}
export default function Page(){
  return (
    <div>
      <GalleriList/>
    </div>
  )
}
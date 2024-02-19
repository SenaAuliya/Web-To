import Komptensi from "../ui/about/Kompetens";
import Kurikulum from "../ui/about/Kurikulum";
import StruktutGuru from "../ui/about/StrukturGuru";
import VisiMisi from "../ui/about/VisiMisi";
import { Metadata } from "next";
import React from 'react'


export const metadata: Metadata ={
    title: "Tentang",
    description: "Tentang Page dari Web jurusan To Smk N 1 Bangsri"
}

export default function Page(){
    return(
            <div>
            <VisiMisi/>
            <StruktutGuru/>
            <Komptensi/>
            <Kurikulum/>
        </div>
    )
}
import ContactForm from "../ui/kontak/ContactForm";
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata ={
    title: "Kontak",
    description: "Kontak Page dari Web jurusan To Smk N 1 Bangsri"
}
export default function KontakPage(){
    return (
            <div>
            <ContactForm/>
        </div>
    )
}
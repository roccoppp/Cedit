"use server"

import { redirect } from "next/navigation"
import { put } from '@vercel/blob';
import { prisma } from "@/lib/prisma"

async function uploadToVercelBlob(file: File): Promise<string> {
    if (!file) throw new Error('uploadToVercelBlob: no File provided');

    const pathname = `photos/${crypto.randomUUID()}-${file.name}`;

    const blob = await put(pathname, file, {
    access: 'public',        // world-readable
    // addRandomSuffix is true by default; we already added our own UUID
    });

    // Return the actual blob URL
    return blob.url;
}

export async function submitAdminForm(formData: FormData) {
    const description = formData.get("description") as string
    const title = formData.get("title") as string
    const imageFile = formData.get("image") as File | null
    let imageUrl = ''
    if (imageFile && typeof imageFile === 'object') {
        imageUrl = await uploadToVercelBlob(imageFile)
    }

    try{
        await prisma.activity.create({
            data: {
                title: `${title}`,
                description: `${description}`,
                image: `${imageUrl}`
            }
        })

        console.log("Admin form submission saved to database")

        // Redirect to success page
        
    }catch(error){
        redirect("/members")
    }
    redirect("/admin/success")

}


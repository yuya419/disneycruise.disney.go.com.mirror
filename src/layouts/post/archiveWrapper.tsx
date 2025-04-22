
// app/ArchiveWrapper.tsx
'use client'

import Archive from "@/layouts/post/archive";
import { Suspense } from 'react'

export default function ArchiveWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Archive
                type="feature"
                breadcrumb={[
                    { label: "特集記事", href: "/feature/" },
                ]}
                title="特集記事"
                en="Special Feature"
            />
        </Suspense>
    )
}
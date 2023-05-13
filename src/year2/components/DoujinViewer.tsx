import React from 'react'

export default function DoujinViewer({
}: {
    }): JSX.Element {
    return (
        <>
            <h1>
                Lazulight Manga Anthology
            </h1>
            <object
                data="/anniversary2/doujin/Lazulight Anthology Vol. 1.pdf"
                type="application/pdf"
                width="100%"
                height="500px">
                <p>Unable to display PDF file.
                    <a href="/anniversary2/doujin/Lazulight Anthology Vol. 1">Download
                    </a> instead.
                </p>
            </object>
        </>
    )
}
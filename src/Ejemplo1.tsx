import { useState, useRef } from "react"
import Card from "./Card"
import DOMPurify from 'dompurify'

export default function Ejemplo1() {
    const [htmlEditorText, setHtmlEditorText] = useState<string>('')
    const editorInput = useRef<HTMLTextAreaElement>(null)

    const sanitizedHtmlEditorText = DOMPurify.sanitize(htmlEditorText)

    return (
        <div className='flex justify-center items-center m-10'>
            <Card>
                <div className="px-6 py-4">
                    <h1 className='font-bold text-xl mb-2'>Editor HTML</h1>
                    <p className="text-gray-700 text-base">
                        Esto es una muestra de un ataque XSS
                    </p>
                </div>
                <div className="px-6 py-4">
                    <div className='flex flex-col'>
                        <textarea placeholder="Escriba..." className='border px-2' ref={editorInput} defaultValue={''} />
                        <button onClick={() => setHtmlEditorText(editorInput.current?.value || '')} className='border'>Ver</button>
                        {/* <img src="#" onmouseover="javascript:alert('XSS!')" /> */}
                        {htmlEditorText && <div dangerouslySetInnerHTML={{ __html: htmlEditorText }} />}

                        {/* Forma para evitarlo */}
                        {/* {htmlEditorText && <div dangerouslySetInnerHTML={{ __html:  sanitizedHtmlEditorText}} />} */}
                    </div>
                </div>
            </Card>
        </div>
    )
}
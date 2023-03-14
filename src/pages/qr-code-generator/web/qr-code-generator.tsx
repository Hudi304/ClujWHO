import QRCode from 'qrcode.react'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'

import ReactQRCode from 'react-qr-code'

import Slider from '@mui/material/Slider'

export function QrCodeGeneratorToolWeb(props: any) {
  const [value, setValue] = useState(30)
  const [foreGround, setForeGround] = useColor('hex', '#000000')
  const [backGround, setBackGround] = useColor('hex', '#FFFFFF')

  const [qrCodeValue, setQrCodeValue] = useState('')

  const svgRef = useRef<any>(null)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  function downloadBlob(blob: any, filename: any) {
    const objectUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = objectUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000)
  }

  const downloadQR = () => {
    const svg = svgRef.current?.innerHTML
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    downloadBlob(blob, `qr_code.svg`)
  }

  return (
    <div className="qr-code-page-backGround-web ">
      <div className="qr-code-page-grid">
        <div className="options-panel">
          <div className="title">QR CODE GENERATOR</div>
          <input
            className="input"
            type="text"
            value={qrCodeValue}
            onChange={e => {
              setQrCodeValue(e.target.value)
            }}
          />

          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <ColorPicker
            width={456}
            height={200}
            color={foreGround}
            onChange={setForeGround}
            hideHSV
            dark
          />
          <ColorPicker
            width={456}
            height={200}
            color={backGround}
            onChange={setBackGround}
            hideHSV
            dark
          />
          <button className="download-button" onClick={downloadQR}>
            Download
          </button>
        </div>

        <div className="qr-code-container " ref={svgRef}>
          <ReactQRCode
            id="123456"
            size={value * 10}
            fgColor={foreGround.hex}
            bgColor={backGround.hex}
            value={qrCodeValue}
            level="H"
          />
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  const handleLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`)
    onLogin()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative bg-gradient-to-b from-indigo-300 to-blue-200 rounded-3xl p-8 max-w-md w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-wider text-gray-800 mb-8">BEM VINDO!</h2>

          <p className="text-gray-700 font-medium mb-8">Entre com</p>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => handleLogin("Microsoft")}
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-5 h-5">
                <div className="bg-red-500"></div>
                <div className="bg-green-500"></div>
                <div className="bg-blue-500"></div>
                <div className="bg-yellow-500"></div>
              </div>
            </button>

            <button
              onClick={() => handleLogin("Gmail")}
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            <button
              onClick={() => handleLogin("Facebook")}
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"
                  fill="#1877F2"
                />
              </svg>
            </button>

            <button
              onClick={() => handleLogin("GitHub")}
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10C0 14.42 2.865 18.167 6.839 19.489C7.339 19.581 7.521 19.278 7.521 19.017C7.521 18.783 7.512 18.036 7.508 17.205C4.726 17.859 4.139 15.992 4.139 15.992C3.685 14.838 3.029 14.535 3.029 14.535C2.121 13.895 3.098 13.907 3.098 13.907C4.101 13.976 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.54 15.788C7.629 15.129 7.889 14.688 8.175 14.419C5.954 14.147 3.62 13.319 3.62 9.534C3.62 8.42 4.01 7.513 4.649 6.804C4.546 6.554 4.203 5.626 4.747 4.324C4.747 4.324 5.586 4.059 7.497 5.412C8.3 5.193 9.15 5.084 10 5.08C10.85 5.084 11.7 5.193 12.503 5.412C14.414 4.059 15.253 4.324 15.253 4.324C15.797 5.626 15.454 6.554 15.351 6.804C15.99 7.513 16.38 8.42 16.38 9.534C16.38 13.329 14.046 14.147 11.825 14.419C12.171 14.747 12.509 15.416 12.509 16.438C12.509 17.906 12.499 18.694 12.499 19.017C12.499 19.278 12.681 19.581 13.181 19.489C17.155 18.167 20.02 14.42 20.02 10C20.02 4.477 15.523 0 10 0Z"
                  fill="#333333"
                />
              </svg>
            </button>

            <button
              onClick={() => handleLogin("Reddit")}
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10Z"
                  fill="#FF4500"
                />
                <path
                  d="M16.67 10C16.67 9.19 16.02 8.54 15.21 8.54C14.8 8.54 14.43 8.71 14.17 8.97C13.11 8.21 11.73 7.73 10.2 7.68L10.97 4.55L13.26 5.08C13.27 5.72 13.8 6.25 14.45 6.25C15.1 6.25 15.64 5.71 15.64 5.06C15.64 4.41 15.1 3.87 14.45 3.87C14 3.87 13.61 4.13 13.41 4.5L10.86 3.92C10.75 3.9 10.64 3.96 10.6 4.06L9.7 7.68C8.12 7.71 6.7 8.19 5.62 8.97C5.36 8.71 4.98 8.54 4.58 8.54C3.77 8.54 3.12 9.19 3.12 10C3.12 10.6 3.51 11.11 4.05 11.28C4.03 11.44 4.02 11.61 4.02 11.78C4.02 14.05 6.71 15.89 10.02 15.89C13.33 15.89 16.02 14.05 16.02 11.78C16.02 11.61 16.01 11.44 15.99 11.28C16.52 11.11 16.91 10.6 16.91 10H16.67ZM7.16 11.42C7.16 10.77 7.69 10.25 8.34 10.25C8.99 10.25 9.52 10.77 9.52 11.42C9.52 12.07 8.99 12.6 8.34 12.6C7.69 12.59 7.16 12.07 7.16 11.42ZM12.03 14.13C11.46 14.7 10.56 14.99 9.51 14.99H9.5C8.45 14.99 7.54 14.7 6.97 14.13C6.86 14.02 6.86 13.84 6.97 13.73C7.08 13.62 7.26 13.62 7.37 13.73C7.82 14.18 8.55 14.4 9.5 14.4H9.51C10.45 14.4 11.18 14.18 11.64 13.73C11.75 13.62 11.93 13.62 12.04 13.73C12.15 13.84 12.15 14.02 12.04 14.13H12.03ZM11.65 12.6C11 12.6 10.47 12.07 10.47 11.42C10.47 10.77 11 10.25 11.65 10.25C12.3 10.25 12.83 10.77 12.83 11.42C12.83 12.07 12.3 12.6 11.65 12.6Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

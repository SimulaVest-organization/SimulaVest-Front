import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">BEM VINDO!</h1>
          <p className="text-gray-600">Se logue com uma das plataformas: </p>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                fill="#F8F8F8"
                stroke="#DADADA"
                strokeWidth="2"
              />
              <path
                d="M16.6667 12.8333H12.8333V16.6667H11.1667V12.8333H7.33333V11.1667H11.1667V7.33333H12.8333V11.1667H16.6667V12.8333Z"
                fill="#444444"
              />
            </svg>
            Microsoft
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                fill="#F8F8F8"
                stroke="#DADADA"
                strokeWidth="2"
              />
              <path d="M12 11L7 7.5V16.5L12 13V11Z" fill="#EA4335" />
              <path d="M12 11L17 7.5V16.5L12 13V11Z" fill="#FBBC05" />
              <path d="M12 13L7 16.5H17L12 13Z" fill="#34A853" />
              <path d="M12 11L7 7.5H17L12 11Z" fill="#4285F4" />
            </svg>
            Gmail
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34766 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                fill="white"
              />
            </svg>
            Facebook
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.783 9.512 20.036 9.508 19.205C6.726 19.859 6.139 17.992 6.139 17.992C5.685 16.838 5.029 16.535 5.029 16.535C4.121 15.895 5.098 15.907 5.098 15.907C6.101 15.976 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.54 17.788C9.629 17.129 9.889 16.688 10.175 16.419C7.954 16.147 5.62 15.319 5.62 11.534C5.62 10.42 6.01 9.513 6.649 8.804C6.546 8.554 6.203 7.626 6.747 6.324C6.747 6.324 7.586 6.059 9.497 7.412C10.3 7.193 11.15 7.084 12 7.08C12.85 7.084 13.7 7.193 14.503 7.412C16.414 6.059 17.253 6.324 17.253 6.324C17.797 7.626 17.454 8.554 17.351 8.804C17.99 9.513 18.38 10.42 18.38 11.534C18.38 15.329 16.046 16.147 13.825 16.419C14.171 16.747 14.509 17.416 14.509 18.438C14.509 19.906 14.499 20.694 14.499 21.017C14.499 21.278 14.681 21.581 15.181 21.489C19.155 20.166 22.02 16.418 22.02 12C22.02 6.477 17.523 2 12 2Z"
                fill="#333333"
              />
            </svg>
            Github
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                fill="#FF4500"
              />
              <path
                d="M12 8.25C10.0716 8.25 8.5 9.82157 8.5 11.75C8.5 13.6784 10.0716 15.25 12 15.25C13.9284 15.25 15.5 13.6784 15.5 11.75C15.5 9.82157 13.9284 8.25 12 8.25Z"
                fill="white"
              />
              <path
                d="M17.25 11.75C17.25 10.6454 16.3546 9.75 15.25 9.75C14.1454 9.75 13.25 10.6454 13.25 11.75C13.25 12.8546 14.1454 13.75 15.25 13.75C16.3546 13.75 17.25 12.8546 17.25 11.75Z"
                fill="white"
              />
              <path
                d="M8.75 11.75C8.75 10.6454 7.85457 9.75 6.75 9.75C5.64543 9.75 4.75 10.6454 4.75 11.75C4.75 12.8546 5.64543 13.75 6.75 13.75C7.85457 13.75 8.75 12.8546 8.75 11.75Z"
                fill="white"
              />
            </svg>
            Reddit
          </Button>
        </div>
      </div>
    </div>
  )
}

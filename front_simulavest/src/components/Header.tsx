"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import LoginModal from "./Login-modal"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    setIsLoggedIn(true)
    setIsLoginModalOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      router.push("/profile")
    }
  }

  return (
    <>
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Educational Platform Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span className="font-medium text-blue-600 hidden sm:inline">EduPrep</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              {!isLoggedIn ? (
                <button
                  onClick={openLoginModal}
                  className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-1.5 px-6 rounded-md transition-colors"
                >
                  Login
                </button>
              ) : (
                <div
                  className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer"
                  onClick={handleUserIconClick}
                >
                  <span className="font-medium">M</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onLogin={handleLogin} />
    </>
  )
}

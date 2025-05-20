"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"

export default function CreatePage() {
  // State to track if images have loaded successfully
  const [imagesLoaded, setImagesLoaded] = useState({
    brazil: true,
    usa: true,
    canada: true,
    europe: true,
  })

  // Handle image load errors
  const handleImageError = (country: keyof typeof imagesLoaded) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [country]: false,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Countries */}
          <div className="w-full md:w-1/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-100 cursor-pointer">
                <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                  {imagesLoaded.brazil ? (
                    <Image
                      src="/Brazil-flag.svg"
                      alt="Brasil"
                      width={32}
                      height={24}
                      className="rounded"
                      onError={() => handleImageError("brazil")}
                    />
                  ) : (
                    <div className="w-full h-full bg-green-600 flex items-center justify-center">
                      <span className="text-white text-xs">BR</span>
                    </div>
                  )}
                </div>
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                  {imagesLoaded.usa ? (
                    <Image
                      src="/USA-flag.svg"
                      alt="EUA"
                      width={32}
                      height={24}
                      className="rounded"
                      onError={() => handleImageError("usa")}
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-700 flex items-center justify-center">
                      <span className="text-white text-xs">US</span>
                    </div>
                  )}
                </div>
                <span>EUA</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                  {imagesLoaded.canada ? (
                    <Image
                      src="/Canada-flag.svg"
                      alt="Canadá"
                      width={32}
                      height={24}
                      className="rounded"
                      onError={() => handleImageError("canada")}
                    />
                  ) : (
                    <div className="w-full h-full bg-red-600 flex items-center justify-center">
                      <span className="text-white text-xs">CA</span>
                    </div>
                  )}
                </div>
                <span>Canadá</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                  {imagesLoaded.europe ? (
                    <Image
                      src="/Europe-flag.svg"
                      alt="Europa"
                      width={32}
                      height={24}
                      className="rounded"
                      onError={() => handleImageError("europe")}
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">EU</span>
                    </div>
                  )}
                </div>
                <span>Europa</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Gerador de Simulados</h1>
            </div>

            {/* Simulation Type Tabs */}
            <Tabs defaultValue="real" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="real">Simulado Real</TabsTrigger>
                <TabsTrigger value="estudo">Simulado Estudo</TabsTrigger>
              </TabsList>

              <TabsContent value="real" className="mt-6">
                <div className="space-y-6">
                  {/* University/Institution Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Universidade/Instituição</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma instituição" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="usp">USP</SelectItem>
                        <SelectItem value="unicamp">UNICAMP</SelectItem>
                        <SelectItem value="unesp">UNESP</SelectItem>
                        <SelectItem value="ufmg">UFMG</SelectItem>
                        <SelectItem value="ufrj">UFRJ</SelectItem>
                        <SelectItem value="unb">UnB</SelectItem>
                        <SelectItem value="enem">ENEM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Exam Year Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Ano da Prova</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors">
                    Iniciar Simulado Real
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="estudo" className="mt-6">
                <div className="space-y-6">
                  {/* Subject Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Matéria</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma matéria" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="matematica">Matemática</SelectItem>
                        <SelectItem value="fisica">Física</SelectItem>
                        <SelectItem value="quimica">Química</SelectItem>
                        <SelectItem value="biologia">Biologia</SelectItem>
                        <SelectItem value="historia">História</SelectItem>
                        <SelectItem value="geografia">Geografia</SelectItem>
                        <SelectItem value="filosofia">Filosofia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Difficulty Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Nível de Dificuldade</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o nível" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="facil">Fácil</SelectItem>
                        <SelectItem value="medio">Médio</SelectItem>
                        <SelectItem value="dificil">Difícil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of Questions */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Número de Questões</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a quantidade" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="10">10 questões</SelectItem>
                        <SelectItem value="20">20 questões</SelectItem>
                        <SelectItem value="30">30 questões</SelectItem>
                        <SelectItem value="40">40 questões</SelectItem>
                        <SelectItem value="50">50 questões</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors">
                    Iniciar Simulado Estudo
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

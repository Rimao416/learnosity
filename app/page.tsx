"use client";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";
import { FiPlay } from "react-icons/fi";
import { useState } from "react";
import IconButton from "@/components/iconButton";
export default function Home() {
  const navigation = [
    { name: "Cours", href: "#" },
    { name: "Solution", href: "#" },
    { name: "Prix", href: "#" },
    { name: "Connexion", href: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <section className="px-4 md:px-20 py-4 bg-white shadow-sm">
        <div className="flex flex-wrap justify-between items-center w-full md:w-auto">
          {/* Logo et barre de recherche */}
          <div className="flex items-center gap-8 flex-wrap">
            <h1 className="text-lg font-bold">
              <span>Learnosity</span>
            </h1>

            {/* Conteneur barre de recherche */}
            <div className="hidden md:flex gap-2 w-full md:w-auto flex-grow">
              <div className="relative bg-gray-100 rounded-full flex items-center w-full max-w-md">
                <div className="ml-1 bg-white p-2 rounded-full pointer-events-none">
                  <IoSearchOutline size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="border bg-transparent px-4 py-2 w-full outline-none text-sm rounded-r-full"
                  maxLength={20}
                  minLength={3}
                  required
                  autoComplete="off"
                />
              </div>
              <Icon Icon={CiMicrophoneOn} size={24} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 font-medium hover:text-gray-900"
                >
                  <a href={item.href} className="mx-4">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <IconButton Icon={IoIosMenu} label="Menu" onClick={() => setIsOpen(true)} />

            <Button label="Commencer" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between my-8 gap-6">
          <div className="md:basis-1/2 text-left">
            <p className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Développez</span> vos compétences
              et faites progresser{" "}
              <span className="text-primary">votre carrière</span>
            </p>
            <p className="text-gray-900 mt-8">
              La meilleure plateforme de cours en ligne pour créer, vendre et
              promouvoir vos cours en ligne. Commencez à monétiser vos
              compétences, vos expériences et votre public.
            </p>
            <div className="mt-8 flex flex-row items-center gap-4">
              <Button label="S'inscrire" />
              <div className="flex items-center justify-center gap-2">
                <Icon Icon={FiPlay} size={20} />
                <p className="text-sm font-medium text-gray-500">
                  Voir une démo
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/learnosity.png"
              alt="Learnosity"
              width={600}
              height={600}
              className="max-w-full"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-10 flex rounded-[30px] flex-col md:flex-row gap-4">
          <div className="basis-full md:basis-1/4 flex flex-col">
            <p className="text-xl font-bold">
              Empower Yourelf with knowledge. Anytime, Anywhere
            </p>
            <div className="w-fit">
              <Button label="Explore more About us" outline />
            </div>
          </div>
          <div className="bg-white flex flex-row justify-between items-center gap-4 p-10 basis-full md:basis-3/4 rounded-[30px]">
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-gray-500">Cours en ligne</p>
            </div>
            <div>
              <p className="text-3xl font-bold">80K+</p>
              <p className="text-gray-500">Etudiants actifs</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-500">Enseignants qualifiés</p>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
  <div className="fixed inset-0 z-10 animate-slide-in px-4 md:px-20 py-4 bg-white shadow-sm">
    {/* Header du menu */}
    <div className="flex justify-between items-center border-b border-gray-200 gap-8">
    <h1 className="text-lg font-bold">
              <span>Learnosity</span>
            </h1>
      <IconButton Icon={IoCloseOutline} label="Fermer" onClick={() => setIsOpen(false)} />
    </div>

    {/* Contenu du menu */}
    <div className="flex flex-col">
      <ul className="divide-y divide-gray-200">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-700 font-medium hover:text-gray-900 transition py-4"
          >
            <a href={item.href} className="block">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-6 border-t border-gray-200">
        <Button
          label="Commencer"
        />
      </div>
    </div>
  </div>
)}


    </div>
  );
}

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
import { useCoursesByCategory } from "@/features/courses/hooks/useCoursesByCategory";
import { useCategories } from "@/features/courses/hooks/useCategories";
import Course from "@/components/course";
interface CoursProps {
  title: string;
  description: string;
}
function CoursDescription({ title, description }: CoursProps) {
  return (
    <div>
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useCategories();
  const navigation = [
    { name: "Cours", href: "#" },
    { name: "Solution", href: "#" },
    { name: "Prix", href: "#" },
    { name: "Connexion", href: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: courses,
    isLoading: isLoadingCourses,
    error: errorCourses,
  } = useCoursesByCategory(
    selectedCategory || 0 // Par défaut, aucune catégorie sélectionnée
  );

  // Mettre à jour la catégorie sélectionnée par défaut lorsque les catégories sont disponibles
  if (!selectedCategory && categories?.length) {
    setSelectedCategory(categories[0].id);
  }

  // Affichage des erreurs ou du chargement
  if (isLoadingCategories) return <p>Chargement des catégories...</p>;
  if (errorCategories) return <p>Erreur lors du chargement des catégories.</p>;

  return (
    <div className="app">
      <section className="my-4 md:my-20 px-4 md:px-20 py-4 bg-white shadow-sm">
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

            <IconButton
              Icon={IoIosMenu}
              label="Menu"
              onClick={() => setIsOpen(true)}
            />

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
        <div className="bg-gray-100 p-6 md:p-10 flex rounded-[30px] flex-col md:flex-row gap-4">
          <div className="basis-full md:basis-1/4 flex flex-col">
            <p className="text-xl font-bold">
              Donnez-vous les moyens d&apos;acquérir des connaissances, à tout
              moment et en tout lieu
            </p>
            <div className="w-fit mt-2">
              <Button label="Voir plus" outline />
            </div>
          </div>
          <div className="bg-white flex flex-col md:flex-row justify-between m-0 items-left gap-4 p-6 md:p-10 basis-full md:basis-3/4 rounded-[30px] ">
            <CoursDescription title="200+" description="Cours en ligne" />
            <CoursDescription title="80K+" description="Etudiants actifs" />
            <CoursDescription title="50+" description="Enseignants qualifiés" />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-20 bg-dark text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Exploring online courses
        </h2>
        <div className="flex flex-row gap-2 justify-center flex-wrap">
          {categories?.map((category) => (
            <div
              key={category.id}
              className={
                selectedCategory === category.id
                  ? "bg-primary text-white px-4 py-2 rounded-full cursor-pointer"
                  : "p-2 border rounded-full shadow cursor-pointer hover:bg-primary hover:text-white transition duration-300 ease-in-out border-gray-100"
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              <p className="text-sm">{category.name}</p>
            </div>
          ))}
        </div>
        <div>
          {/* Liste des catégories */}

          {/* Affichage des cours */}
          {isLoadingCourses ? (
            <p>Chargement des cours...</p>
          ) : errorCourses ? (
            <p>Erreur lors du chargement des cours.</p>
          ) : (
            <div className="flex flex-row flex-wrap gap-4 my-10">
              {courses?.length ? (
                courses.map((course) => <Course key={course.id} {...course} />)
              ) : (
                <p>Aucun cours disponible pour cette catégorie.</p>
              )}
            </div>
          )}
        </div>
      </section>
      {isOpen && (
        <div className="fixed inset-0 z-10 animate-slide-in px-4 md:px-20 py-4 bg-white shadow-sm">
          {/* Header du menu */}
          <div className="flex justify-between items-center border-b border-gray-200 gap-8">
            <h1 className="text-lg font-bold">
              <span>Learnosity</span>
            </h1>
            <IconButton
              Icon={IoCloseOutline}
              label="Fermer"
              onClick={() => setIsOpen(false)}
            />
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
              <Button label="Commencer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

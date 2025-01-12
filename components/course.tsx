import { CoursProps } from "@/lib/interface";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Course({
  title,

  professor,
  cover,
}: CoursProps) {
  return (
    <div className="bg-gray-700/30 h-[380px] w-full md:w-[280px] relative rounded-[30px]">
      <div className="absolute top-0 left-0 w-full h-[50%]">
        <Image
          src={`http://localhost:3000/upload/${cover}`}
          alt=""
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          className="object-cover"
        />
      </div>
      <div className="absolute top-[50%] flex flex-col justify-between h-[50%] w-full px-4 py-4">
        <div className="flex justify-between text-sm text-gray-400 font-medium">
          <div className="flex gap-2">
            <FaStar size={16} color="white" />
            <p>4.6</p>
          </div>
          <span>42 000 Etudiants</span>
        </div>
        <p className="text-lg font-semibold">{title}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="relative h-10 w-10">
            <Image
              src={`http://localhost:3000/upload/${professor.profile}`}
              alt={professor.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <p className="text-sm text-gray-400">{professor.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Course;

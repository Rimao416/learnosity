import { CoursProps } from "@/lib/interface";
import Image from "next/image";
import React from "react";

function Course({ id, title, description,category,professor,cover }: CoursProps) {
  return <div className="bg-gray-700/30 h-[340px] w-[300px]">
    <Image src={`http://localhost:3000/upload/${cover}`} alt="" width={300} height={200} className="object-cover" />
    <div>

    </div>
    
  </div>;
}

export default Course;

"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/portfolio-data";

const PROFILE_SRC = "/profile.jpg";

export default function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden ring-2 ring-foreground/10 shadow-elevated-lg">
      {hasError ? (
        <div
          className="flex h-full w-full items-center justify-center bg-accent/15"
          aria-label={personalInfo.name}
        >
          <span className="font-heading text-5xl font-bold text-accent">
            {personalInfo.initials}
          </span>
        </div>
      ) : (
        <Image
          src={PROFILE_SRC}
          alt={personalInfo.name}
          fill
          sizes="(max-width: 640px) 224px, 256px"
          className="object-cover object-top"
          priority
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10 pointer-events-none" />
    </div>
  );
}

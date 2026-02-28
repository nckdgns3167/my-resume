import Image from "next/image";
import { profile } from "@/data/profile";
import { calculateCareerYears } from "@/lib/career-calculator";
import { CopyButton } from "@/components/ui/CopyButton";

export function Header() {
  const years = calculateCareerYears(profile.careerStartDate);

  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border sm:h-32 sm:w-32">
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-bold text-text sm:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-base text-text-secondary">
            {profile.title}{" "}
            <span className="text-accent-primary">({years}년차)</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
          <CopyButton text={profile.phoneRaw} label="전화번호">
            <span>{profile.phone}</span>
          </CopyButton>
          <CopyButton text={profile.email} label="이메일">
            <span>{profile.email}</span>
          </CopyButton>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

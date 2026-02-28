import Image from "next/image";
import { profile } from "@/data/profile";
import { calculateCareerYears } from "@/lib/career-calculator";
import { CopyButton } from "@/components/ui/CopyButton";

export function Header() {
  const years = calculateCareerYears(profile.careerPeriods);

  return (
    <header className="flex items-center gap-6 sm:gap-8">
      {/* 왼쪽: 이름, 직함, 연락처 */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div>
          <h1 className="font-serif text-2xl font-bold text-text sm:text-3xl">
            {profile.nameEn}
            <span className="ml-2 text-lg font-normal text-text-secondary">Resume</span>
          </h1>
          <p className="mt-1 text-base text-text-secondary">
            {profile.name} · {profile.title}{" "}
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

      {/* 오른쪽: 프로필 사진 */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border sm:h-32 sm:w-32">
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}

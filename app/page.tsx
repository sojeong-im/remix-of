import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 text-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <main className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tighter sm:text-7xl">
            REMIX OF CLEAN
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            당신의 창의력을 펼칠 준비가 되었습니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https:github.com/imsojeong"
            target="_blank"
            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            GitHub 주소 알려주기
          </Link>
          <div className="px-8 py-3 bg-white dark:bg-gray-900 border border-border font-bold rounded-full shadow-sm">
            배포 준비 완료 🚀
          </div>
        </div>

        <footer className="pt-12 text-sm text-muted-foreground">
          &copy; 2026 REMIX OF CLEAN. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

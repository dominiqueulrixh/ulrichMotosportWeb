import React from 'react';
import { Skeleton } from '../ui/skeleton';

export function LoadingSkeleton() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-white to-zinc-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-black" />
      <div className="absolute inset-0 opacity-60 blur-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.25),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(250,204,21,0.2),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.15),transparent_32%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(250,204,21,0.15),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-4 w-28 bg-yellow-200/80 dark:bg-yellow-500/20" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-5/6" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Skeleton className="h-12 w-40 rounded-xl" />
              <Skeleton className="h-12 w-36 rounded-xl" />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-3 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4">
                  <Skeleton className="h-10 w-10 rounded-xl" />
                  <Skeleton className="h-5 w-5/6" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Skeleton className="aspect-square max-w-sm lg:max-w-[26rem] mx-auto rounded-[2rem]" />
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6">
              <Skeleton className="aspect-square max-w-sm lg:max-w-[26rem] mx-auto rounded-[2rem] opacity-60" />
            </div>
            <div className="absolute -right-8 top-1/2 h-24 w-1 bg-yellow-300/80 dark:bg-yellow-500/60 rounded-full" />
            <div className="absolute -left-6 bottom-10 h-2 w-40 bg-yellow-200/80 dark:bg-yellow-500/30 rounded-full blur-sm" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="p-6 rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
              <Skeleton className="h-10 w-10 rounded-full mb-4" />
              <Skeleton className="h-5 w-2/3 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

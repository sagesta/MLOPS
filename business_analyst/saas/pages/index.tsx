"use client";

import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-12 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            MediNotes Pro
          </h1>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/product"
                  className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Go to App
                </Link>
                <UserButton showName />
              </div>
            </SignedIn>
          </div>
        </nav>

        <div className="py-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-6xl font-bold text-transparent">
            Transform Your
            <br />
            Consultation Notes
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            AI-powered assistant that generates professional summaries, action
            items, and patient communications from your consultation notes
          </p>

          <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-25 blur transition duration-300 group-hover:opacity-40" />
              <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-3xl">📋</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Professional Summaries
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate comprehensive medical record summaries from your
                  notes
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 opacity-25 blur transition duration-300 group-hover:opacity-40" />
              <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-3xl">✅</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Action Items
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clear next steps and follow-up actions for every consultation
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-300 group-hover:opacity-40" />
              <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-3xl">📧</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Patient Emails
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Draft clear, patient-friendly email communications
                  automatically
                </p>
              </div>
            </div>
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button
                type="button"
                className="transform rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
              >
                Start Free Trial
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/product">
              <button
                type="button"
                className="transform rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
              >
                Open Consultation Assistant
              </button>
            </Link>
          </SignedIn>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>HIPAA Compliant • Secure • Professional</p>
        </div>
      </div>
    </main>
  );
}

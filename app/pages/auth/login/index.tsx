"use client";

import { useState } from "react";

import { Link } from "react-router";
import { type Language, translations } from "~/@types/login/login";
import { Button } from "~/components/ui/button";
import { LanguageToggle } from "./components/language-toggle";
import { Input } from "~/components/ui/input";
import Padding from "~/components/ui/padding";

export default function LoginPage() {
  const [language, setLanguage] = useState<Language>("ko");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-md flex flex-col mx-auto pt-12">
        <Padding height={20} />
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="https://i.ibb.co/Wv8VGQK/Burberry-Logo.png"
            alt="ABLY"
            className="h-10 w-[120px]"
          />
        </div>

        {/* Login Form */}
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{t.emailLogin}</h1>
            <LanguageToggle
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>

          <div className="">
            <Input
              type="email"
              placeholder={t.emailPlaceholder}
              className="h-12"
            />
            <Input
              type="password"
              placeholder={t.passwordPlaceholder}
              className="h-12"
            />
          </div>

          <Button className="w-full h-12 text-base font-medium bg-gray-100 text-gray-400 hover:bg-gray-200">
            {t.loginButton}
          </Button>

          <div className="flex justify-center">
            <Link
              to="/find-password"
              className="text-sm text-gray-600 hover:underline"
            >
              {t.findPassword}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

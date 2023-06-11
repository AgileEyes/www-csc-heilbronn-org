"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import Separator from "../Separator";
import Button from "../Button";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  if (cookieConsent !== null) return null;

  return (
    <div className={styles.container}>
      <div className={styles.infoText}>
        <Link href="/datenschutz">
          <p>
            🍪 Wir benutzen <span className={styles.cookieText}>Cookies</span>{" "}
            auf unserer Website.
          </p>
        </Link>
      </div>

      <Separator type="horizontal" size="16px" />

      <div className={styles.buttons}>
        <Button onClick={() => setCookieConsent(false)} text="Ablehnen" />

        <Separator type="horizontal" size="8px" />

        <Button onClick={() => setCookieConsent(true)} text="Erlauben" />
      </div>
    </div>
  );
}

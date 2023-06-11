"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import Separator from "../Separator";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
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
        <button
          className={styles.declineButton}
          onClick={() => setCookieConsent(false)}
        >
          Ablehnen
        </button>

        <Separator type="horizontal" size="8px" />

        <button
          className={styles.allowButton}
          onClick={() => setCookieConsent(true)}
        >
          Erlauben
        </button>
      </div>
    </div>
  );
}

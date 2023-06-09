"use client";

/*
 *     FRAMEWORK
 */
import { useEffect, useState } from "react";
/*
 *     STYLES
 */
import classNames from "./AgeGuard.module.css";
/*
 *     UTILS - STORAGE
 */
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Image from "next/image";
import Button from "../Button";
import Separator from "../Separator";

const COOKIE_NAME = "age_guard";

export default function AgeGuard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage(COOKIE_NAME, null);

    setIsVisible(storedCookieConsent);
  }, []);

  useEffect(() => {
    setLocalStorage(COOKIE_NAME, isVisible);
  }, [isVisible]);

  if (isVisible === false) return null;

  return (
    <div className={classNames.container}>
      <div className={classNames.pageTitle}>
        TenTen Cannabis Social Club Heilbronn
      </div>

      <div className={classNames.imageWrapper}>
        <Image
          src="/images/logo/logo_v2_128.png"
          alt="CSC Heilbronn Logo"
          width={92}
          height={92}
        />
      </div>

      <div className={classNames.title}>Schon 18?</div>
      <p className={classNames.description}>
        Wir möchten gerne Jugendliche vor möglichen Gefahren des Verzehrs von
        Cannabis schützen, da besonders bei der geistigen Entwicklung
        potenzielle und dauerhafte Schäden auftreten könnten.
        <br />
        <br />
        Um dem vorzubeugen, ist der Zugriff auf diese Website für Menschen unter
        18 Jahren aktuell nicht gestattet.
      </p>

      <Separator type="vertical" size="16px" />

      <div className={classNames.buttons}>
        <Button onClick={() => setIsVisible(false)} text="Ich bin 18 oder älter" />

        <Separator type="horizontal" size="8px" />

        <Button
          onClick={() =>
            (window.location.href =
              "https://www.google.com/search?q=cannabis+jugendschutz&source=lnms&tbm=nws")
          }
          text="Seite verlassen"
        />
      </div>
    </div>
  );
}

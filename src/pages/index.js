import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <title>Portfolio</title>
      <body>
        <h1>
          About Me
        </h1>
        <p>
          Hello, my name is Jarad I am a computer science student with by associates in computer science, I am
          currently working towards my bachelors. I have been learning web development for the last couple years.
        </p>
      </body>
    </>
  );
}

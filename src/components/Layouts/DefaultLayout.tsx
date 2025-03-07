'use client'
import Header from "@/components/Header";
import styles from "@/styles/components/DefaultLayout.module.css"
export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (<>
        <div className={styles.defaultLayout}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    </>)
}
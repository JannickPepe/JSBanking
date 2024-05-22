

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {

    return (
        <main>
            <div className="">
                SIDEBAR
                {children}
            </div>
        </main>
    );

}
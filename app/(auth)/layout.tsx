

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {

    return (
        <main>
            <div className="">
                {children}
            </div>
        </main>
    );

}
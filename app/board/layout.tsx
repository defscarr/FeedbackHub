const metadata = {
    title: 'Board',
    descripton: 'One place for all'
};

export default function BoardLayout({children}:{children:React.ReactNode}){
    return (
        <main className="bg-zinc-100 h-screen w-screen">
            {children}
        </main>
    )
}
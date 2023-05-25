const metadata = {
    title: 'Board',
    descripton: 'One place for all'
};

export default function BoardLayout({children}:{children:React.ReactNode}){
    return (
        <main className="bg-zinc-100 px-40 pb-32 pt-24  h-screen w-screen overflow-hidden">
            {children}
        </main>
    )
}
export default function Template({children}: {children: React.ReactNode}) {

    return (
        <>
            <div className="danger">
                this is template 
                {children}
            </div>
        </>
    )
}
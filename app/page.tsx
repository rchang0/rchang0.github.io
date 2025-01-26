export default function Home() {
    return (
        <div className="p-8">
            <div className="text-center">
                <img 
                    src="/starrynight.jpeg" 
                    alt="Profile" 
                    width="50%"
                />
                <br/>
                <br/>
            </div>
            <div className="text-center text-3xl">becca chang</div>
            <div className="text-center text-base mt-1">rebchang[at]mit[dot]edu</div>
            <div className="text-center w-1/2 mx-auto mt-8">
                I&apos;m an undergrad at MIT studying Physics and Electrical Engineering (8 and 6-1), and minoring in Music (21M). I&apos;m currently doing quantum sensing research in Prof. Isaac Chuang&apos;s lab, and I&apos;m widely interested in quantum tech and stat mech. At MIT, I&apos;m most involved in Puzzle Club, Wind Ensemble, and iQuHACK.
            </div>
        </div>
    );
}

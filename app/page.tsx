import Image from "next/image";
import starrynight from "./starrynight.jpg";

export default function Home() {
    return (
        <div className="max-w-screen-sm px-8 mx-auto flex flex-col items-center">
            <Image src={starrynight} alt="Profile" className="my-8 w-1/2 h-auto" />
            <h1 className="text-3xl text-center">becca chang</h1>
            <p className="text-base my-2 text-center">rebchang[at]mit[dot]edu</p>
            <p className="text-center my-4">
                I&apos;m a dual status undergrad and MEng at MIT studying Physics and Electrical Engineering (8 and 6-1), and minoring in
                Music (21M). I&apos;m currently doing my thesis research co-advised by Jordan Cotler and Anand Natarajan, and in the past I&apos;ve worked at Los Alamos National Lab and in Isaac Chuang&apos;s lab.
                I&apos;m widely interested in quantum info theory, particularly quantum algorithms and quantum learning, and stat mech. At MIT, I&apos;m most involved in Puzzle Club,
                Wind Ensemble, and iQuHACK.
            </p>
        </div>
    );
}

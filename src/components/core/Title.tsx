export default function Title({ children }: { children: React.ReactNode; }) {
    return (
        <h1 className="font-extrabold text-transparent leading-tight text-6xl md:text-8xl md:leading-normal bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            {children}
        </h1>
    );
}
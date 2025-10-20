import Hero from "./sections/Hero.jsx";

const App = () => {
    return (
        <>
            <div
                style={{
                    backgroundColor: 'rgb(51, 119, 255, .5)',
                    color: '#000',
                    padding: '10px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                }}
            >
                ⚠️ I'm currently developing the site. Expect updates to be complete by 10/31/2025!
            </div>

            <Hero />
        </>
    );
};

export default App;

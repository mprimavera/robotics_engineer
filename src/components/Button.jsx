/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */
const Button = ({ text, className, id, href }) => {
    return (
        <a
            href={href}
            onClick={(e) => {
                // Only run the scroll logic if 'id' is provided
                if (id) {
                    e.preventDefault(); // Prevent default jump

                    const target = document.getElementById("counter");
                    if (target) {
                        const offset = window.innerHeight * 0.15;
                        const top =
                            target.getBoundingClientRect().top + window.pageYOffset - offset;

                        window.scrollTo({ top, behavior: "smooth" });
                    }
                }
                // If 'id' is not passed, let it behave like a normal link (e.g. YouTube)
            }}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className={`${className ?? ""} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;

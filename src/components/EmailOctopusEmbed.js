import React, { useEffect, useRef } from "react";

export default function EmailOctopusEmbed({ src, formId, className }) {
    const hostRef = useRef(null);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;
        host.innerHTML = "";

        // Load EO script
        const s = document.createElement("script");
        s.async = true;
        s.src = src;
        if (formId) s.dataset.form = formId;
        host.appendChild(s);

        // Inject CSS once the form loads
        const obs = new MutationObserver(() => {
            const form = host.querySelector("form.emailoctopus-form");
            if (!form || host.querySelector('style[data-eo-layout]')) return;

            const style = document.createElement("style");
            style.setAttribute("data-eo-layout", "");
            style.textContent = `
                /* Reset widths and margins */
                .eo-scope .eo-form-container,
                .eo-scope .emailoctopus-form-wrapper,
                .eo-scope .main-form,
                .eo-scope form.emailoctopus-form,
                .eo-scope .emailoctopus-form-row {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    box-sizing: border-box !important;
                }

                /* Grid layout for form fields */
                .eo-scope [eo-form-fields-container] {
                    display: grid !important;
                    gap: 0.9rem !important;
                    grid-template-columns: 1fr !important;
                }

                /* Submit button styling */
                .eo-scope button[type="submit"],
                .eo-scope input[type="submit"] {
                    width: 100% !important;
                    grid-column: 1 / -1 !important;
                    justify-self: stretch !important;
                    margin-top: 1rem !important;
                }

                /* Two-column layout on medium screens and up */
                @media (min-width: 768px) {
                    .eo-scope [eo-form-fields-container] {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .eo-scope [eo-form-fields-container] > .emailoctopus-form-row:nth-child(1) {
                        grid-column: 1 / -1 !important; /* Email */
                    }
                    .eo-scope [eo-form-fields-container] > .emailoctopus-form-row:nth-child(2) {
                        grid-column: 1 / 2 !important; /* First name */
                    }
                    .eo-scope [eo-form-fields-container] > .emailoctopus-form-row:nth-child(3) {
                        grid-column: 2 / 3 !important; /* Last name */
                    }
                    .eo-scope [eo-form-fields-container] > .emailoctopus-form-row:nth-child(4) {
                        grid-column: 1 / 2 !important; /* Affiliation */
                    }
                    .eo-scope [eo-form-fields-container] > .emailoctopus-form-row:nth-child(5) {
                        grid-column: 2 / 3 !important; /* Faculty */
                    }
                }
            `;
            host.appendChild(style);
            obs.disconnect();
        });

        obs.observe(host, { childList: true, subtree: true });
        return () => obs.disconnect();
    }, [src, formId]);

    return React.createElement("div", {
        ref: hostRef,
        className: `eo-scope w-full ${className || ""}`,
    });
}

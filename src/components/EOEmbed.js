import React, { useEffect, useRef } from "react";

export default function EmailOctopusEmbed({ src, formId, className }) {
    const hostRef = useRef(null);

    useEffect(() => {
        if (!hostRef.current) return;
        hostRef.current.innerHTML = "";

        const s = document.createElement("script");
        s.async = true;
        s.src = src;
        if (formId) s.dataset.form = formId;

        hostRef.current.appendChild(s);
        return () => { if (hostRef.current) hostRef.current.innerHTML = ""; };
    }, [src, formId]);

    return React.createElement("div", { ref: hostRef, className });
}

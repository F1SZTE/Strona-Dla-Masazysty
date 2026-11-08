(() => {
    const header = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    if (header && menuButton) {
        const setMenuOpen = (isOpen) => {
            header.classList.toggle("is-menu-open", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
        };

        menuButton.addEventListener("click", () => {
            setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
        });

        header.querySelectorAll(".nav-panel a").forEach((link) => {
            link.addEventListener("click", () => setMenuOpen(false));
        });

        document.addEventListener("click", (event) => {
            if (!header.contains(event.target)) setMenuOpen(false);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        });

        window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
            if (event.matches) setMenuOpen(false);
        });
    }

    const dialog = document.getElementById("service-info-dialog");
    if (!dialog) return;

    const title = document.getElementById("service-dialog-title");
    const description = document.getElementById("service-dialog-description");
    const closeButton = dialog.querySelector(".service-dialog-close");

    document.querySelectorAll(".service-info-trigger").forEach((button) => {
        button.addEventListener("click", () => {
            title.textContent = button.dataset.serviceTitle || "Informacje o zabiegu";
            description.replaceChildren();

            const template = document.getElementById(button.dataset.serviceContent || "");
            if (template instanceof HTMLTemplateElement) {
                description.append(template.content.cloneNode(true));
            } else {
                const fallback = document.createElement("p");
                fallback.textContent = button.dataset.serviceDescription || "";
                description.append(fallback);
            }

            dialog.showModal();
        });
    });

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
})();
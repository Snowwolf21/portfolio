export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  try {
    const storageKey = "color-scheme";
    const stored = localStorage.getItem(storageKey);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const isDark = stored === "dark" || !stored && mediaQuery.matches;

    document.documentElement.classList.toggle("dark", isDark);

    const meta = document.querySelector('meta[name="color-scheme"]');

    if (meta) {
      meta.setAttribute("content", isDark ? "dark" : "light");
    }

    // If the user hasn't chosen a theme,
    // automatically follow OS changes.
    if (!stored) {
      mediaQuery.addEventListener("change", (event) => {
        document.documentElement.classList.toggle(
          "dark",
          event.matches
        );

        if (meta) {
          meta.setAttribute(
            "content",
            event.matches ? "dark" : "light"
          );
        }
      });
    }
  } catch {}
})();
        `,
      }}
    />
  );
}
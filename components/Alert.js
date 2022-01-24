export default function Alert({ preview }) {
  return (
    <div
      className={
        "border-b" + preview
          ? "bg-accent-7 border-accent-7 text-white"
          : "bg-accent-1 border-accent-2"
      }
    >
      <div>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              You are in preview mode. This page is a draft.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Exit preview mode
              </a>
            </>
          ) : (
            <>
              The source code for this demo site is{" "}
              <a
                href={`https://github.com/gabalafou/nextjs-multilanguage-website`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </div>
    </div>
  );
}

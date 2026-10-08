import React from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-bg border-t border-border">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="tabular text-xs text-muted">
          © {year} Gayathri Gunda
        </p>
      </div>
    </footer>
  );
}

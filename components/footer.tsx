export function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl px-6 pb-12 md:px-12 lg:px-24">
      <div className="border-t border-border pt-8">
        <p className="text-center text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary">Jeevitha S</span>
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

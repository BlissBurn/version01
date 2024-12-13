export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BlissBurn</h3>
            <p className="text-muted-foreground">Baking Happiness Daily</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p className="text-muted-foreground">123 Baker Street<br />New York, NY 10001</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-muted-foreground">Mon-Sat: 7am - 8pm<br />Sun: 8am - 6pm</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Tel: (555) 123-4567<br />Email: hello@blissburn.com</p>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          © {new Date().getFullYear()} BlissBurn Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
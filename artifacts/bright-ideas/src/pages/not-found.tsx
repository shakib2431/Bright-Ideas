import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full bg-background min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-9xl font-display font-bold text-primary mb-6">404</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 text-lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

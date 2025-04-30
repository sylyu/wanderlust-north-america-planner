
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-wanderlust-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Group Adventure?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Start coordinating travel plans for friends and family from different cities today.
        </p>
        
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
          />
          <Button variant="default" size="lg" className="bg-white text-wanderlust-blue hover:bg-blue-50">
            Get Started
          </Button>
        </div>
        
        <p className="text-xs mt-4 text-blue-100">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;

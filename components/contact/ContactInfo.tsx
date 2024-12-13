import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p className="text-muted-foreground">
            123 Baker Street,<br />
            Kurunegala
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground">(+94) 123-456-7890</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-muted-foreground">test@blissburn.com</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Hours</h3>
          <p className="text-muted-foreground">
            Monday - Saturday: 7am - 8pm<br />
            Sunday: 8am - 6pm
          </p>
        </div>
      </div>
    </div>
  );
}
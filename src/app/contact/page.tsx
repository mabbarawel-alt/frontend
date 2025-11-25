import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui Card components are available
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
      <Card className="max-w-2xl w-full"> {/* Increased width to better fit the text */}
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-500">Contact Me</CardTitle>
          <CardDescription>Get in touch with me</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-700 leading-relaxed"> {/* Fixed invalid color to text-gray-700 for readability */}
            <strong>Institutional Email Address:</strong>  mabbarawel@gbox.ncf.edu.ph  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">Send Message</Button>
              </a><br/>
            <strong>Personal Email Address:</strong> markanthonybarawel01@gmail.com <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">Send Message</Button>
              </a><br/>
            <strong>Contact Number:</strong> 09925494393 <br />
            <strong>Facebook Account:</strong> Barawel Mark Anthony <a href="https://www.facebook.com/markanthony.barawel.30" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">Visit</Button>
              </a><br />
            <strong>Facebook Page:</strong> M44rk <a href="https://www.facebook.com/m4rk.brwl" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">Visit</Button>
              </a><br />
            <strong>Instagram:</strong> m4rk.brwl <br />
            
          </p>
          
        </CardContent>
      </Card>
    </div>
  );
}

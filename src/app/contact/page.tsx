"use client";

import type React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]"
      );
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:h-6.25 lg:pb-15">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 ">
              {[
                {
                  title: "Email",
                  details: "info@aviators",
                  subtext: "We'll respond within 24 hours",
                },
                {
                  title: "Phone",
                  details: "+92-333-9****99",
                  subtext: "Mon-Fri, 9 AM - 6 PM PKT",
                },
                {
                  title: "Office",
                  details: "Aviators Plaza, I.I. Chundrigar Road",
                  subtext: "Karachi, Pakistan",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="text-center border-2 border-primary"
                >
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-2xl">→</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                    <p className="font-semibold text-foreground mb-1">
                      {contact.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contact.subtext}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto border-2 border-primary">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-amber-500 bg-primary text-white rounded-2xl mt-1 "
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-amber-500 bg-primary text-white rounded-2xl mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-amber-500 bg-primary text-white rounded-2xl mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-amber-500 bg-primary text-white rounded-none mt-1"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_IMG = "/images/me-3D.png";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: z.string().trim().email("Please enter a valid email address"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  useGSAP(
    () => {
      const title = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      title
        .fromTo(
          ".contact-heading",
          {
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".contact-subtitle",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.45"
        );

      const content = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      content
        .fromTo(
          ".contact-avatar-card",
          {
            opacity: 0,
            x: -80,
            y: 30,
            scale: 0.92,
            rotation: -3,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power4.out",
          }
        )
        .fromTo(
          ".contact-avatar-image",
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          ".contact-profile-content",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          ".contact-social-link",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )
        .fromTo(
          ".contact-form",
          {
            opacity: 0,
            x: 80,
            y: 30,
            scale: 0.94,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .fromTo(
          ".contact-field",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.55"
        )
        .fromTo(
          ".contact-submit",
          {
            opacity: 0,
            y: 15,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.4)",
          },
          "-=0.25"
        );

      gsap.to(".contact-avatar-image", {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSent(true);
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="bg-[#caf0f8] font-sans px-4 py-20 md:px-8 min-h-screen overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="contact-title mb-14 text-center">
          <h2 className="contact-heading mb-3 text-4xl font-black text-[#0077b6] md:text-5xl flex items-center justify-center gap-3 tracking-tight">
            Contact <span className="text-[#03045e]">Me</span>
          </h2>

          <p className="contact-subtitle max-w-2xl mx-auto text-[#03045e]/80 text-base md:text-lg font-medium leading-relaxed">
            Let's talk about how I can bring value to your team from day one
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Avatar Card */}
          <div className="contact-avatar-card flex w-full flex-col items-center lg:w-5/12">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#0077b6]/20 shadow-xl group">
              <img
                src={AVATAR_IMG}
                alt="Lana Shotashvili - Frontend Developer"
                className="contact-avatar-image w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/90 via-[#03045e]/20 to-transparent" />

              <div className="contact-profile-content absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold tracking-tight">
                  Lana Shotashvili
                </h3>

                <p className="text-sm text-[#ade8f4] mt-1 font-semibold">
                  React | Next.js | Javascript | TypeScript
                </p>
              </div>
            </div>

            {/* Direct Links */}
            <div className="mt-5 flex gap-3 w-full max-w-md">
              <a
                href="https://github.com/Lanssii"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link flex-1 py-3 text-center rounded-xl bg-white border border-[#0077b6]/20 text-[#03045e] font-bold text-sm hover:bg-[#03045e] hover:text-[#caf0f8] transition-all shadow-sm"
              >
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/lana-shotashvili-834aa9384/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-link flex-1 py-3 text-center rounded-xl bg-white border border-[#0077b6]/20 text-[#03045e] font-bold text-sm hover:bg-[#03045e] hover:text-white transition-all shadow-sm"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="contact-form w-full bg-white p-7 md:p-9 rounded-2xl border border-[#0077b6]/20 shadow-xl lg:w-7/12">
            <h3 className="text-2xl font-bold text-[#03045e] mb-6 text-center">
              Get in Touch
            </h3>

            {isSent ? (
              <div className="p-8 bg-[#caf0f8]/40 border border-[#0077b6]/30 rounded-xl text-center">
                <h4 className="text-xl font-bold text-[#03045e]">
                  Message Received!
                </h4>

                <p className="text-[#0077b6] text-sm mt-2 font-medium">
                  Thanks for reaching out. I'll check your note and get back to
                  you shortly.
                </p>

                <button
                  onClick={() => setIsSent(false)}
                  className="mt-5 px-5 py-2.5 bg-[#03045e] text-[#caf0f8] rounded-lg font-bold text-xs hover:bg-[#0077b6] transition-all cursor-pointer shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div className="contact-field">
                  <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your name or company"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-400" : "border-[#0077b6]/20"
                    } bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm`}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="contact-field">
                  <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-400" : "border-[#0077b6]/20"
                    } bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="contact-field">
                  <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell me about your team, job position, or project..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-400" : "border-[#0077b6]/20"
                    } bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm resize-none`}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit w-full py-3.5 bg-[#03045e] text-[#caf0f8] font-bold rounded-xl shadow-md shadow-[#03045e]/10 hover:bg-[#0077b6] hover:text-white transition-all cursor-pointer disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import { motion } from "framer-motion";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import {
  Star,
  GraduationCap,
  Stethoscope,
  ArrowLeft,
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Award,
  Clock,
  Globe,
  Shield,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import content from "@/src/locales/en/doctors/drPreethaNair.json";

// Helper to check if professional background has verified content
const hasVerifiedBackground = () => {
  const bg = content.professionalBackground;
  return (
    bg.certifications.length > 0 ||
    bg.conferencesAttended.length > 0 ||
    bg.mediaFeatures.length > 0 ||
    bg.languagesSpoken.length > 0 ||
    bg.awards.length > 0 ||
    bg.medicalMemberships.length > 0 ||
    bg.beforeAfterPhilosophy
  );
};

export default function DrPreethaNairPage() {
  return (
    <>
      <div className="w-full bg-light overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-4 py-16 md:py-24 bg-cream">
          <div className="container mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-taupe mb-6"
            >
              <Link href="/" className="hover:text-wine transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doctors" className="hover:text-wine transition-colors">Our Doctors</Link>
              <span>/</span>
              <span className="text-wine">{content.doctor.name}</span>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Doctor Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl shrink-0"
              >
                <Image
                  src={content.doctor.photoLandscape}
                  alt={`${content.doctor.name} - Aesthetic & Weight Loss Doctor at Nexus Clinic Kuala Lumpur`}
                  fill
                  className="hidden md:block object-cover object-top"
                  priority
                />
                <Image
                  src={content.doctor.photo}
                  alt={`${content.doctor.name} - Aesthetic & Weight Loss Doctor at Nexus Clinic Kuala Lumpur`}
                  fill
                  className="block md:hidden object-cover object-top"
                  priority
                />
              </motion.div>

              {/* Hero Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-1 text-center md:text-left"
              >
                <motion.p variants={fadeInUp} className="text-wine uppercase tracking-[0.25em] text-xs font-semibold mb-3">
                  Nexus Clinic Malaysia
                </motion.p>
                
                {/* H1 - Exact as required */}
                <motion.h1 
                  variants={fadeInUp}
                  className="font-georgia text-brown text-3xl md:text-5xl leading-tight mb-4"
                >
                  {content.meta.h1}
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-taupe text-lg mb-4">
                  {content.doctor.title}
                </motion.p>
                
                {/* Rating */}
                <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <div className="flex items-center gap-0.5">
                    {[...Array(content.doctor.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-wine text-wine" />
                    ))}
                  </div>
                  <span className="text-taupe text-sm">5.0 · Exceptional Care</span>
                </motion.div>
                
                {/* Specialisation */}
                <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <Stethoscope className="w-4 h-4 text-wine shrink-0" />
                  <span className="text-rose text-sm font-medium">
                    {content.doctor.specialisation}
                  </span>
                </motion.div>
                
                {/* CTA after intro */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-cream bg-wine hover:bg-brown transition-colors px-6 py-3 rounded-full"
                  >
                    Book Consultation with Dr. Preetha
                  </Link>
                  <Whatsapp 
                    message="Hi, I'd like to book a consultation with Dr. Preetha Nair at Nexus Clinic KL. Please let me know available slots."
                    variant="dark"
                  />
                </motion.div>
                
                {/* Short Introduction */}
                <motion.p variants={fadeInUp} className="text-taupe text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                  {content.doctor.introduction}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-6xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Qualifications with Degree */}
              <motion.div variants={fadeInLeft} className="bg-cream rounded-2xl p-8 border border-taupe/10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-wine" />
                  <h2 className="font-georgia text-brown text-2xl">Qualifications</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-brown">Degree:</span>
                    <span className="text-taupe text-sm ml-2">
                      {content.credentials.degreeFull}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-brown">License No:</span>
                    <span className="text-taupe text-sm ml-2">
                      {content.credentials.licenseNumber}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-brown">Experience:</span>
                    <span className="text-taupe text-sm ml-2">
                      {content.credentials.yearsOfExperience}+ years
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {content.credentials.qualifications.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-taupe text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2 shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-cream rounded-2xl p-8 border border-taupe/10">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-6 h-6 text-wine" />
                  <h2 className="font-georgia text-brown text-2xl">Areas of Expertise</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.areasOfExpertise.map((area) => (
                    <Link
                      key={area.name}
                      href={area.link}
                      className="text-center text-wine text-sm hover:text-brown hover:font-bold transition-colors bg-white/60  px-3 py-1.5 rounded-full border border-wine/20"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Weight Loss Expertise */}
        <section className="py-16 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="bg-light rounded-2xl p-8 border border-taupe/10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-wine" />
                <h2 className="font-georgia text-brown text-2xl">Weight Loss Expertise</h2>
              </div>
              <p className="text-taupe text-base leading-relaxed">
                {content.weightLossExpertise}
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-16 px-4 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="bg-cream rounded-2xl p-8 border border-taupe/10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-wine" />
                <h2 className="font-georgia text-brown text-2xl">
                  Treatments Performed by Dr. Preetha Nair
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {content.treatments.map((treatment) => (
                  <Link
                    key={treatment.name}
                    href={treatment.href}
                    className="text-center text-wine text-sm hover:text-brown hover:font-bold transition-colors bg-white/60  px-3 py-1.5 rounded-full border border-wine/20"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
              {/* HIFU Note - only show if URL not supplied */}
              {/* <p className="text-taupe text-xs mt-4 italic">
                * HIFU treatment link will be added when the service page is active
              </p> */}
            </motion.div>
          </motion.div>
        </section>

        {/* Professional Background - Only shows verified content */}
        {(content.professionalBackground.yearsOfExperience > 0 || hasVerifiedBackground()) && (
          <section className="py-16 px-4 bg-cream">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="container mx-auto max-w-5xl"
            >
              <motion.div variants={fadeInUp} className="bg-light rounded-2xl p-8 border border-taupe/10">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-wine" />
                  <h2 className="font-georgia text-brown text-2xl">Professional Background</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.professionalBackground.yearsOfExperience > 0 && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-brown">Years of Experience:</span>
                        <span className="text-taupe text-sm ml-2">{content.professionalBackground.yearsOfExperience}+ years</span>
                      </div>
                    </div>
                  )}
                  {content.professionalBackground.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <div className="text-taupe text-sm">{cert}</div>
                    </div>
                  ))}
                  {content.professionalBackground.languagesSpoken.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-brown">Languages:</span>
                        <span className="text-taupe text-sm ml-2">{content.professionalBackground.languagesSpoken.join(", ")}</span>
                      </div>
                    </div>
                  )}
                  {content.professionalBackground.awards.map((award, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <div className="text-taupe text-sm">{award}</div>
                    </div>
                  ))}
                  {content.professionalBackground.medicalMemberships.map((membership, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <div className="text-taupe text-sm">{membership}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>
        )}

        {/* Professional Philosophy & Patient Approach */}
        <section className="py-16 px-4 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-6xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} className="bg-cream rounded-2xl p-8 border border-taupe/10">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-wine" />
                  <h2 className="font-georgia text-brown text-2xl">Professional Philosophy</h2>
                </div>
                <p className="text-taupe text-base leading-relaxed">
                  {content.professionalPhilosophy}
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-cream rounded-2xl p-8 border border-taupe/10">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-wine" />
                  <h2 className="font-georgia text-brown text-2xl">Patient Approach</h2>
                </div>
                <p className="text-taupe text-base leading-relaxed">
                  {content.patientApproach}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <FAQWithSchema data={content.faq} />

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-wine">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-5xl text-light">
                Ready to Start Your Aesthetic Journey?
              </h2>
              <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
                Book your consultation with Dr. Preetha Nair today and take the first step toward 
                achieving your aesthetic and wellness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/consultation"
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Consultation with Dr. Preetha
                </Link>
                <Whatsapp 
                  message="Hi, I'd like to book a consultation with Dr. Preetha Nair at Nexus Clinic KL. Please let me know available slots."
                  variant="light"
                />
              </div>
              <p className="text-cream/80 font-inter text-sm">
                Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Back to doctors */}
        <div className="py-12 px-4 text-center bg-light">
          <Link
            href="/doctors/"
            className="inline-flex items-center gap-2 text-wine font-semibold text-sm hover:text-brown transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Meet the Full Team
          </Link>
        </div>
      </div>
    </>
  );
}
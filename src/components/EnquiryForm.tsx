import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { crmService } from '../services/crm';
import { Button } from './Button';

interface EnquiryFormProps {
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com.au).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid Australian phone number.';
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = "Please specify your child's age or expected birth date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await crmService.createLead({
        parentName: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        childAge: formData.childAge,
        message: formData.message,
        source: 'Website Contact Enquiry',
      });

      if (response.success) {
        setIsSubmitted(true);
      } else {
        setServerError(response.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setServerError('An unexpected network error occurred. Please call our campus directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 bg-[#E7ECE6] border border-[#4E5E46]/20 rounded-xs text-center space-y-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.15 }}
              className="w-14 h-14 bg-[#4E5E46] text-white rounded-full flex items-center justify-center mx-auto shadow-xs"
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#222521] font-normal">
              Enquiry Received
            </h3>
            <p className="text-sm text-[#444C40] leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-[#222521]">{formData.parentName}</span>. 
              Our Admissions Director Sarah Mitchell will review your enquiry and contact you within 24 hours with enrolment details.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childAge: '',
                    message: '',
                  });
                }}
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="enquiry-form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#FAF8F5] border border-[#2C3827]/10 p-6 sm:p-8 rounded-xs space-y-5 shadow-2xs"
          >
            <div>
              <h3 className="font-serif text-2xl text-[#222521] font-normal">
                Send an Enrolment Enquiry
              </h3>
              <p className="text-xs text-[#687163] mt-1">
                Our team provides warm, transparent guidance regarding waitlists, fee schedules, and the Child Care Subsidy.
              </p>
            </div>

            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{serverError}</span>
              </motion.div>
            )}

            {/* Parent Name */}
            <div className="space-y-1">
              <label
                htmlFor="parentName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
              >
                Parent / Guardian Full Name <span className="text-[#C87A5B]">*</span>
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Jessica Sinclair"
                className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                  errors.parentName ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
              />
              <AnimatePresence>
                {errors.parentName && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.parentName}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                >
                  Email Address <span className="text-[#C87A5B]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jessica@example.com.au"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    errors.email ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                  } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-600 mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                >
                  Phone Number <span className="text-[#C87A5B]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0412 345 678"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                  } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-600 mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Child's Age */}
            <div className="space-y-1">
              <label
                htmlFor="childAge"
                className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
              >
                Child's Current Age / Due Date <span className="text-[#C87A5B]">*</span>
              </label>
              <select
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                  errors.childAge ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
              >
                <option value="">Select age group...</option>
                <option value="Expecting / Newborn (due 2026)">Expecting / Newborn (due 2026)</option>
                <option value="Nursery (6 weeks – 12 months)">Nursery (6 weeks – 12 months)</option>
                <option value="Pre-Toddler (12 – 18 months)">Pre-Toddler (12 – 18 months)</option>
                <option value="Toddler (18 months – 3 years)">Toddler (18 months – 3 years)</option>
                <option value="Preschool / Kindy (3 – 5 years)">Preschool / Kindy (3 – 5 years)</option>
              </select>
              <AnimatePresence>
                {errors.childAge && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.childAge}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
              >
                Questions or Preferred Days of Care
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g. Interested in 3 days (Tue/Wed/Thu) starting from February. Do you currently have availability in the Toddler room?"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3827]/20 rounded-xs focus:border-[#4E5E46] focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200 resize-y"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full"
              icon={<Send className="w-4 h-4" />}
            >
              Send Enquiry
            </Button>

            <p className="text-[11px] text-[#687163] text-center">
              Your family’s privacy is protected. We will never share your personal information.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle2, AlertCircle, Users, Sparkles } from 'lucide-react';
import { crmService } from '../services/crm';
import { Button } from './Button';

interface TourFormProps {
  initialProgram?: string;
  className?: string;
}

export const TourForm: React.FC<TourFormProps> = ({ initialProgram = '', className = '' }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: initialProgram ? (initialProgram === 'nursery' ? 'Nursery (6 wks – 18 mos)' : initialProgram === 'toddlers' ? 'Toddler (18 mos – 3 yrs)' : 'Preschool (3 – 5 yrs)') : '',
    preferredDate: '',
    preferredTime: '09:30 AM',
    numberOfChildren: 1,
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Compute minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid Australian contact number.';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Please enter your child's first name.";
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = "Please select your child's age group.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred weekday date.';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const day = selectedDate.getUTCDay();
      if (day === 0 || day === 6) {
        newErrors.preferredDate = 'Tours are conducted on weekdays (Monday – Friday).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      const response = await crmService.createTourRequest({
        parentName: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        childName: formData.childName,
        childAge: formData.childAge,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        numberOfChildren: Number(formData.numberOfChildren),
        additionalNotes: formData.additionalNotes,
      });

      if (response.success) {
        setIsSuccess(true);
      } else {
        setServerError(response.error || 'Unable to schedule tour. Please try again.');
      }
    } catch (err) {
      setServerError('An unexpected error occurred. Please contact the centre directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="tour-success"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 bg-[#E7ECE6] border border-[#4E5E46]/20 rounded-xs text-center space-y-6 shadow-2xs"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.15 }}
              className="w-16 h-16 bg-[#4E5E46] text-[#FAF8F5] rounded-full flex items-center justify-center mx-auto shadow-xs"
            >
              <CheckCircle2 className="w-9 h-9" />
            </motion.div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#4E5E46] font-semibold">
                Tour Request Confirmed
              </span>
              <h3 className="font-serif text-3xl text-[#222521] font-normal">
                Thank you, {formData.parentName}
              </h3>
              <p className="text-base text-[#444C40] leading-relaxed max-w-lg mx-auto">
                We've received your tour request for <span className="font-semibold text-[#222521]">{formData.childName}</span> on{' '}
                <span className="font-semibold text-[#222521]">{formData.preferredDate}</span> at{' '}
                <span className="font-semibold text-[#222521]">{formData.preferredTime}</span>.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-xs border border-[#2C3827]/10 text-left max-w-md mx-auto space-y-2 text-xs text-[#555C51]">
              <div className="font-semibold text-[#222521] text-sm mb-2">Next Steps:</div>
              <p>1. Our Admissions Lead will call or email you to confirm the appointment.</p>
              <p>2. You will receive a Tour Guide PDF with campus parking and sign-in instructions.</p>
              <p>3. Feel free to bring {formData.childName} along so they can experience our sensory garden!</p>
            </div>

            <div className="pt-2 flex justify-center gap-4">
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    childAge: '',
                    preferredDate: '',
                    preferredTime: '09:30 AM',
                    numberOfChildren: 1,
                    additionalNotes: '',
                  });
                }}
              >
                Book Another Tour
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="tour-form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#FAF8F5] border border-[#2C3827]/10 p-6 sm:p-10 rounded-xs space-y-6 shadow-2xs"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#222521] font-normal">
                Book a Campus Discovery Tour
              </h3>
              <p className="text-sm text-[#555C51] mt-1.5 leading-relaxed">
                Experience our light-filled studios and sensory gardens in action. Tours are kept small and intimate so our leadership team can personally answer your questions.
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

            {/* Parent Information */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold">
                Parent / Guardian Details
              </h4>

              <div className="space-y-1">
                <label
                  htmlFor="tour-parentName"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                >
                  Full Name <span className="text-[#C87A5B]">*</span>
                </label>
                <input
                  type="text"
                  id="tour-parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Eleanor Vance"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="tour-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Email Address <span className="text-[#C87A5B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="tour-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eleanor@domain.com.au"
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
                    htmlFor="tour-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Contact Number <span className="text-[#C87A5B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="tour-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0400 123 456"
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
            </div>

            {/* Child Information */}
            <div className="space-y-4 pt-4 border-t border-[#2C3827]/10">
              <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold">
                Child Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="tour-childName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Child's First Name <span className="text-[#C87A5B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="tour-childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="e.g. Leo"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.childName ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                    } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
                  />
                  <AnimatePresence>
                    {errors.childName && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-red-600 mt-1"
                      >
                        {errors.childName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="tour-childAge"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Child's Age Group <span className="text-[#C87A5B]">*</span>
                  </label>
                  <select
                    id="tour-childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.childAge ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                    } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
                  >
                    <option value="">Select age group...</option>
                    <option value="Nursery (6 wks – 18 mos)">Nursery (6 weeks – 18 months)</option>
                    <option value="Toddler (18 mos – 3 yrs)">Toddler (18 months – 3 years)</option>
                    <option value="Preschool (3 – 5 yrs)">Preschool / Kindy (3 – 5 years)</option>
                    <option value="Expecting Baby / 2026 Enrolment">Expecting Baby / 2026 Enrolment</option>
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
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="tour-numChildren"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                >
                  Number of Children Attending Tour
                </label>
                <select
                  id="tour-numChildren"
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  className="w-full sm:w-48 px-3.5 py-2.5 text-sm bg-white border border-[#2C3827]/20 rounded-xs focus:border-[#4E5E46] focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200"
                >
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3+ Children</option>
                </select>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="space-y-4 pt-4 border-t border-[#2C3827]/10">
              <h4 className="text-xs uppercase tracking-widest text-[#8A9D84] font-semibold">
                Preferred Tour Session
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="tour-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Date (Weekdays) <span className="text-[#C87A5B]">*</span>
                  </label>
                  <input
                    type="date"
                    id="tour-date"
                    name="preferredDate"
                    min={minDateString}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.preferredDate ? 'border-red-400 focus:ring-red-300' : 'border-[#2C3827]/20 focus:border-[#4E5E46]'
                    } rounded-xs focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200`}
                  />
                  <AnimatePresence>
                    {errors.preferredDate && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-red-600 mt-1"
                      >
                        {errors.preferredDate}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="tour-time"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                  >
                    Tour Time Slot <span className="text-[#C87A5B]">*</span>
                  </label>
                  <select
                    id="tour-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3827]/20 rounded-xs focus:border-[#4E5E46] focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200"
                  >
                    <option value="09:30 AM">09:30 AM (Morning Discovery Tour)</option>
                    <option value="10:30 AM">10:30 AM (Mid-Morning Play &amp; Garden Tour)</option>
                    <option value="02:30 PM">02:30 PM (Afternoon Rest &amp; Atelier Tour)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="tour-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#444C40]"
                >
                  Additional Notes or Special Inquiries (Optional)
                </label>
                <textarea
                  id="tour-notes"
                  name="additionalNotes"
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="e.g. Any dietary questions, start date requirements, or specific rooms you wish to focus on..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3827]/20 rounded-xs focus:border-[#4E5E46] focus:outline-none focus:ring-2 focus:ring-[#4E5E46]/20 transition-all duration-200 resize-y"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full"
            >
              Request a Tour
            </Button>

            <p className="text-[11px] text-[#687163] text-center">
              Tours run for approximately 35 minutes and conclude with a Q&amp;A over tea and chef-prepared refreshments.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

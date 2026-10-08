/**
 * Email Automation Architecture
 * 
 * Flow in Production:
 * New Enquiry / Tour Request
 *   → CRM Lead created
 *   → Dispatched to transactional email service (SendGrid, Postmark, AWS SES, or GoHighLevel workflow)
 *   → Sends personalized branded confirmation to Parent
 *   → Sends immediate notification with lead context to Centre Enrolments Director
 *   → Schedules automated follow-up sequence (Day 2 reminder, Day 5 handbook share)
 * 
 * Prototype Implementation:
 * Clean, mock-safe async dispatch that stores outgoing transactional logs in session/console
 * without leaking sensitive credentials to the client.
 */

export interface EnquiryConfirmationPayload {
  parentName: string;
  email: string;
  inquiryId: string;
}

export interface TourConfirmationPayload {
  parentName: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  childName: string;
  tourId: string;
}

export const emailAutomation = {
  /**
   * Dispatch parent confirmation for a general enquiry
   */
  async sendEnquiryConfirmation(payload: EnquiryConfirmationPayload): Promise<boolean> {
    // In production: await fetch('/api/email/enquiry-confirmation', { ... })
    // Logs simulated delivery
    if (process.env.NODE_ENV !== 'test') {
      console.info(
        `[Email Automation] Queued Enquiry Confirmation to ${payload.email} for ${payload.parentName} (ID: ${payload.inquiryId})`
      );
    }
    return true;
  },

  /**
   * Dispatch parent tour appointment confirmation
   */
  async sendTourConfirmation(payload: TourConfirmationPayload): Promise<boolean> {
    if (process.env.NODE_ENV !== 'test') {
      console.info(
        `[Email Automation] Queued Tour Confirmation to ${payload.email} for ${payload.childName}'s visit on ${payload.preferredDate} at ${payload.preferredTime}`
      );
    }
    return true;
  },

  /**
   * Notify internal admissions team in Sydney
   */
  async sendInternalAdmissionsAlert(type: 'enquiry' | 'tour', summary: string): Promise<boolean> {
    if (process.env.NODE_ENV !== 'test') {
      console.info(`[Email Automation] Alerted admissions@willowandsage.com.au: New ${type} — ${summary}`);
    }
    return true;
  },
};

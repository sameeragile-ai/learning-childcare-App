import { Lead, TourRequest, CRMResponse } from '../types/crm';
import { emailAutomation } from './emailAutomation';

/**
 * CRM Service Layer
 * 
 * Production Readiness:
 * In production, this module will dispatch requests to an external CRM REST API or
 * webhook receiver (e.g., GoHighLevel, HubSpot, Salesforce, or an internal Express/Nest proxy).
 * 
 * Current Prototype Implementation:
 * Utilizes resilient localStorage state persistence with simulated network latency (400ms)
 * to provide authentic form lifecycle states, loading indicators, and error resilience.
 */

const STORAGE_LEADS_KEY = 'willow_sage_crm_leads';
const STORAGE_TOURS_KEY = 'willow_sage_crm_tours';

function getStoredLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_LEADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Failed to parse leads from storage', err);
    return [];
  }
}

function saveStoredLeads(leads: Lead[]): void {
  try {
    localStorage.setItem(STORAGE_LEADS_KEY, JSON.stringify(leads));
  } catch (err) {
    console.warn('Failed to save leads to storage', err);
  }
}

function getStoredTours(): TourRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_TOURS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Failed to parse tours from storage', err);
    return [];
  }
}

function saveStoredTours(tours: TourRequest[]): void {
  try {
    localStorage.setItem(STORAGE_TOURS_KEY, JSON.stringify(tours));
  } catch (err) {
    console.warn('Failed to save tours to storage', err);
  }
}

export const crmService = {
  /**
   * Create a new parent enquiry lead
   */
  async createLead(payload: {
    parentName: string;
    email: string;
    phone: string;
    childAge?: string;
    message?: string;
    source?: string;
  }): Promise<CRMResponse<Lead>> {
    await new Promise((resolve) => setTimeout(resolve, 550));

    // Basic server-side style boundary validation
    if (!payload.parentName?.trim() || !payload.email?.trim() || !payload.phone?.trim()) {
      return {
        success: false,
        error: 'Please provide full contact details.',
      };
    }

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      parentName: payload.parentName.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim(),
      childAge: payload.childAge?.trim() || undefined,
      message: payload.message?.trim() || undefined,
      source: payload.source || 'Website Contact Form',
      status: 'new',
      createdAt: new Date().toISOString(),
      notes: [`Inquiry received online from ${payload.parentName}`],
    };

    const existing = getStoredLeads();
    existing.unshift(newLead);
    saveStoredLeads(existing);

    // Trigger automated email follow-up sequence
    await emailAutomation.sendEnquiryConfirmation({
      parentName: newLead.parentName,
      email: newLead.email,
      inquiryId: newLead.id,
    });

    return {
      success: true,
      data: newLead,
    };
  },

  /**
   * Create a dedicated Centre Tour booking request
   */
  async createTourRequest(payload: {
    parentName: string;
    email: string;
    phone: string;
    childName: string;
    childAge: string;
    preferredDate: string;
    preferredTime: string;
    numberOfChildren: number;
    additionalNotes?: string;
  }): Promise<CRMResponse<TourRequest>> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!payload.parentName?.trim() || !payload.email?.trim() || !payload.preferredDate) {
      return {
        success: false,
        error: 'Required tour booking fields are missing.',
      };
    }

    // Step 1: Create or find linked CRM lead
    const leadResponse = await this.createLead({
      parentName: payload.parentName,
      email: payload.email,
      phone: payload.phone,
      childAge: payload.childAge,
      message: `Requested tour for ${payload.preferredDate} at ${payload.preferredTime}. Child: ${payload.childName} (${payload.childAge}).`,
      source: 'Tour Booking Page',
    });

    const leadId = leadResponse.data?.id;

    // Step 2: Create tour request record
    const newTour: TourRequest = {
      id: `tour_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      parentName: payload.parentName.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim(),
      childName: payload.childName.trim(),
      childAge: payload.childAge.trim(),
      preferredDate: payload.preferredDate,
      preferredTime: payload.preferredTime,
      numberOfChildren: payload.numberOfChildren || 1,
      additionalNotes: payload.additionalNotes?.trim() || undefined,
      status: 'pending',
      createdAt: new Date().toISOString(),
      crmLeadId: leadId,
    };

    const existingTours = getStoredTours();
    existingTours.unshift(newTour);
    saveStoredTours(existingTours);

    // Step 3: Trigger automated booking confirmation
    await emailAutomation.sendTourConfirmation({
      parentName: newTour.parentName,
      email: newTour.email,
      preferredDate: newTour.preferredDate,
      preferredTime: newTour.preferredTime,
      childName: newTour.childName,
      tourId: newTour.id,
    });

    return {
      success: true,
      data: newTour,
    };
  },

  /**
   * Update lead status in CRM lifecycle
   */
  async updateLeadStatus(
    leadId: string,
    status: Lead['status']
  ): Promise<CRMResponse<Lead>> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const leads = getStoredLeads();
    const index = leads.findIndex((l) => l.id === leadId);

    if (index === -1) {
      return { success: false, error: 'Lead not found in database.' };
    }

    leads[index].status = status;
    leads[index].notes.push(`Status updated to ${status} on ${new Date().toLocaleDateString('en-AU')}`);
    saveStoredLeads(leads);

    return { success: true, data: leads[index] };
  },

  /**
   * Append an internal educator/enrolment note to a lead
   */
  async addNote(leadId: string, noteText: string): Promise<CRMResponse<Lead>> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const leads = getStoredLeads();
    const index = leads.findIndex((l) => l.id === leadId);

    if (index === -1) {
      return { success: false, error: 'Lead not found.' };
    }

    leads[index].notes.push(noteText);
    saveStoredLeads(leads);

    return { success: true, data: leads[index] };
  },

  /**
   * Fetch all stored leads (for admin preview / debugging)
   */
  async getLeads(): Promise<Lead[]> {
    return getStoredLeads();
  },

  /**
   * Fetch all stored tour bookings
   */
  async getTours(): Promise<TourRequest[]> {
    return getStoredTours();
  },
};

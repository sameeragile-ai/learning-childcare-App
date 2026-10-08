export interface Lead {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childAge?: string;
  message?: string;
  source: string;
  status: 'new' | 'contacted' | 'tour_scheduled' | 'waitlisted' | 'enrolled';
  createdAt: string;
  notes: string[];
}

export interface TourRequest {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  preferredDate: string;
  preferredTime: string;
  numberOfChildren: number;
  additionalNotes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  crmLeadId?: string;
}

export interface CRMResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

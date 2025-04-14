
export interface FormSubmission {
  id: string;
  formType: 'abetuta' | 'qreta' | 'abalatMzgeba' | 'report';
  status?: 'pending' | 'accepted' | 'rejected';
  submittedAt: Date;
  data: Record<string, any>;
}

export interface AbetutaFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  region: string;
  description: string;
  attachments?: File[];
}

export interface QretaFormData {
  fullName: string;
  phone: string;
  email: string;
  topic: string;
  location: string;
  date: string;
  details: string;
  witnesses: string;
}

export interface AbalatMzgebaFormData {
  fullName: string;
  phone: string;
  email: string;
  birthDate: string;
  gender: string;
  education: string;
  occupation: string;
  experience: string;
  motivation: string;
  references: string;
}

export interface ReportFormData {
  fullName: string;
  phone: string;
  email: string;
  incidentDate: string;
  incidentLocation: string;
  incidentType: string;
  incidentDetails: string;
  witnessInfo: string;
}

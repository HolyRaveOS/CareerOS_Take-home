import { Company } from './Company';
import { Contact } from './Contact';
import { Job } from './Job';

export interface Quest {
  id: string;
  user_id: string;
  type: string;
  status: string;
  experience_points: number;
  due_date: string;
  company: Company;
  contact: Contact;
  job: Job;
  created_at: string;
}

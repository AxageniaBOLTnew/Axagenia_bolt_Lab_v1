export type DiagnosticRequest = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
  consent: boolean;
};

export type DiagnosticResponse = {
  success: boolean;
  error?: string;
};

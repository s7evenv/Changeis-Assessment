export interface ImageData {
    title: string;
    description: string;
    url: string;
  }
  
  export interface ApiResponse {
    status: string;
    code: number;
    locale: string;
    total: number;
    data: ImageData[];
  }
  
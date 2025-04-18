export interface OpenAIEvent {
    type: string;
    session?: {
      instructions?: string;
    };
    item?: {
      type: string;
      role: string;
      content: Array<{ type: string; text: string }>;
    };
  }
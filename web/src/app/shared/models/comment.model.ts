export interface Comment {
  // Comment References
  commentId: string;

  // Comment State Tracking
  createdDate: Date;
  createdBy: string;
  edited?: boolean;
  lastModifiedDate?: Date;
  lastModifiedBy?: string;
  isArchived: boolean;

  // Comment Properties
  description?: string;
}

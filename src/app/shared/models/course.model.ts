export interface Course {
    // Course References
    title?: string;
    headline?: string;
    description?: string;

    // Course State Tracking
    status?: string;
    createdDate?: string;
    createdBy?: string;
    edited?: boolean;
    lastModifiedDate?: string;
    lastModifiedBy?: string;
    isArchived?: boolean;

    // Course Properties

}

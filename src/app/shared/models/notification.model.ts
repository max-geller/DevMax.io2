export interface Notification {
    // Notification References
    notiticationId: string;
    userId: string;

    // Notification State Tracking
    createdDate?: Date;
    moduleSource: string;
    isActive: boolean;
    isRead: boolean;

    // Notification Properties
    title: string;
    description: string;

    // Notification Management

}

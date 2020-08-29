export interface Role {
    id?: string;
    globalAdmin?: boolean;
    tenantAdmin?: boolean;
    tenantUser?: boolean;
    client?: boolean;
    description?: string;
}

export interface User {
    // Basics
    id?: string;
    uid?: string;
    roles?: string;

    email?: '',
    role?: '',
    tenant?: '',
    teams?: '',
    company?: '',
    defaultTheme?: '',
    sendWelcomeEmail?: '',
    verifyAccount?: '',
    homepage?: '',
    tutorial?: '',

    // References
    tenantId?: string;
    subscriptionId?: string;
    companyId?: string;

    // State Tracking
    lastLogin?: Date;
    connectionStatus?: string;
    showTutorial?: boolean;
    emailVerified?: boolean;
    isActive?: boolean;
    userSince?: Date;

    // User Properties
    initials?: string;
    title?: string;
    department?: string;
    organziation?: string;
    workEmail?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    workPhone?: string;
    mobilePhone?: string;

    // Account Management
    emailSignature?: any;
    theme?: any;
    calendarView?: string;
    smsTextNotifications?: boolean;
    emailNotifications?: boolean;
    favProjects?: Array<string>;
    photoUrl?: string;
}

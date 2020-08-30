export interface Course {
    // Course References
    id?: string;
    objectives?: string;
    reviews?: string;
    tags?: string;
    sections?: string;

    // Course Properties
    description?: string;
    breadcrumb?: string;
    headline?: string;
    title?: string;
    instructor?: string;
    category?: string;
    inclusions: string;
    students?: number;
    avgRating?: number;
    ratings?: string;

    // Course State Tracking
    status?: string;
    createdDate?: string;
    createdBy?: string;
    lastModifiedDate?: string;
    lastModifiedBy?: string;

    // Course Details
    languages?: string;
    closedCaptions?: string;
    hrs?: string;

    // Sales
    sellPrice?: string;
    discount?: string;
    bestSeller?: boolean;
    similarItems?: string;

    // Preview Media
    thumbURL?: string;
    previewVideos?: string;


}

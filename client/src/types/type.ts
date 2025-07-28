
export type Section = {
    type?: string;
}

export type HeaderValue = {
    title: string;
    description: string;
}

export type InstructorValue = {
    description: string;
    image: string;
    name: string;
};

export type FeaturesValue = {
    icon: string;
    id: string;
    title: string;
    subtitle: string;
};

export type PointersValue = {
    id: string;
    text: string;
};

export type DetailsValue = {
    id: string;
    title: string;
    description: string;
};


export type ExclusiveFeatureSValue = {
    id: string;
    title: string;
    file_type: string;
    file_url: string;
    checklist: []
};


export type CheckListValue= {
    id: string;
    color: string;
    icon: string;
    text: string;
};

export type MediaValue= {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
};


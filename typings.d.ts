interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: stirng;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
    name: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    name: string;
    title: string;
}

export interface Project extends SanityBody {
    _type: "projcet";
    title: string;
    imgae: Image;
    linkToBuild: string;
    summary: string;
    technology: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    schoolTitle: string;
    schoolImage: Image;
    school: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentHere: boolean;
    points: string[];
}
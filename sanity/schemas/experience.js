export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "schoolTitle",
            title: "SchoolTitle",
            type: "string",
        },
        {
            name: "schoolImage",
            title: "SchoolImage",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "school",
            title: "School",
            type: "text",
        },
        {
            name: "dateStarted",
            title: "DateStarted",
            type: "date",
        },
        {
            name: "dateEnded",
            title: "DateEnded",
            type: "date",
        },
        {
            name: "isCurrentHere",
            title: "IsCurrentHere",
            type: "boolean",
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },
    ]
}
const appData = {
    sideData: {
        top: [
            { id: "res", label: "RE", tooltip: "Resources", active: true, isText: true },
            { id: "set", icon: "fa-solid fa-gear", tooltip: "Settings", active: false },
            { id: "up", icon: "fa-solid fa-cloud-arrow-up", tooltip: "Upload", active: false }
        ],
        bottom: [
            { id: "pub", icon: "fa-solid fa-bullhorn", tooltip: "Publish" },
            { id: "faq", icon: "fa-regular fa-circle-question", tooltip: "FAQS" }
        ]
    },
    navData: {
        language: "ES",
        icons: [
            { name: "fa-regular fa-bell", notification: true },
            { name: "fa-regular fa-circle-question", notification: false }
        ],
        userInitials: "TG",
        notifNumber: 10,
    },

    folders: [
        {
            id: "01", name: "Private", icon: "fa-solid fa-lock", isOpen: true,
            subfolders: [
                { id: "sub-env", name: "Environment", count: 2, active: false },
                { id: "sub-rrhh", name: "RRHH", count: 3, active: false }
            ]
        },
        {
            id: "02", name: "Human resources", icon: "fa-solid fa-user", isOpen: false,
            subfolders: [
                { id: "sub-sygris", name: "RRHH Sygris", count: 1, active: false },
                { id: "sub-pascual", name: "RRHH Pascual", count: 4, active: false },
                { id: "sub-nestle", name: "RRHH Nestlé", count: 4, active: false }
            ]
        },
        {
            id: "shared", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "03", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "04", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "05", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "shared", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "06", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "07", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "shared", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "08", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "09", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "10", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
        {
            id: "11", name: "Shared", icon: "fa-solid fa-user-group", isOpen: false,
            subfolders: [
                { id: "sub-mad", name: "RRHH Madrid", count: 4, active: false },
                { id: "sub-bar", name: "RRHH Barcelona", count: 4, active: false }
            ]
        },
    ],
    dashboards: [
        { title: "Carbon Footprint", author: "Susana Sánchez", date: "10/10/25", isLocked: true, isPinned: true, isFavorite: true },
        { title: "EcoImpact Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: true, isFavorite: true },
        { title: "Sustainability Insights", author: "Susana Sánchez", date: "10/10/25", isLocked: true, isFavorite: true },
        { title: "Green Performance Monitor", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Carbon Footprint Dashboard", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Energy Efficiency Overview", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Operations Monitor", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Resource Management Dashboard", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Environmental Impact Dashboard", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Waste Reduction Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Sustainable Growth Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false },
        { title: "Eco Efficiency Tracker", author: "Susana Sánchez", date: "10/10/25", isLocked: false }
    ]
};
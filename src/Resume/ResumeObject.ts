export interface IExperiences {
    companyName: string,
    location: string,
    position: string,
    startTime: string,
    endTime: string,
    experiences : string[]
}

export const Experiences : IExperiences[] = [
    {
        companyName: "KINGLAND SYSTEMS",
        location: "Ames IA",
        position: "Advance Software Engineering Intern",
        startTime: "",
        endTime: "",
        experiences: [
            "Worked on creating ETL pipeline from existing database to new Lakehouse in Hudi",
            "Created reusable functions in an AWS Glue Job to transform and upsert the data frames onto Hudi using PySpark and AWS libraries and connectors",
            "Created wheels to package the reusable code to decrease verbosity of jobs. Eventually designed a layered and testable architecture to allow for collaboration"

        ]
    },
    {
        companyName: "IOWA STATE UNIVERSITY",
        location: "Ames IA",
        position: "TA for Software Development Practices",
        startTime: "",
        endTime: "",
        experiences: [
            "Created resources for students on youtube and github to help them understand the Spring Boot+Android Studio stack",
            "Incorporated SOLID and DRY principles for a new architecture design in mock projects to help them better work with a larger code base"
        ]
    },
    {
        companyName: "BUILDERTREND",
        location: "Omaha NE",
        position: "Development Intern",
        startTime: "",
        endTime: "",
        experiences: [
            "Worked on three projects (photo library, performance header, integrating docusign)",
            "Worked as the team lead for two of the projects (performance header and docusign)",
            "Used C# (ASP.NET and Entity Framework) for the backend, and React TS for the front"

        ]
    }
]
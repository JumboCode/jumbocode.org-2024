import json

input_file = "projectCardsRaw.json"
output_file = "projectCards.json"
input_file_2 = "projectsRaw.json"
output_file_2 = "projects.json"
default_year = "2024-2025"

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)
    
with open(input_file_2, "r", encoding="utf-8") as f:
    data_2 = json.load(f)

# If the top-level keys appear to be project slugs instead of a year, wrap them.
# We check by verifying if every value is a dict with keys "name" and "description"
if all(isinstance(value, dict) and "name" in value and "description" in value for value in data.values()):
    data = {default_year: data}

transformed_data = {}

for year, projects in data.items():
    transformed_data[year] = {}
    for key, project in projects.items():
        if isinstance(project, dict):
            display_name = project.get("name", "")
            description = project.get("description", "")
        else:
            print(f"Warning: Expected a dict for project '{key}', got {type(project)}. Using its string value as the name.")
            display_name = project
            description = ""
        transformed_data[year][key] = {
            "name": display_name,
            "img": {
                "src": f"/projects/{year}/{key}/{key}.png",
                "alt": f"{display_name} Logo"
            },
            "description": description,
            "href": f"/projects/{key}"
        }

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(transformed_data, f, indent=2)

print("Transformation complete. New JSON saved to:", output_file)


# ----------------------------
# New loop for converting to the new style format
new_format_data = {}

tech_stack_map = {
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "nextjs": "Next.js",
    "react": "React",
    "nodejs": "Node.js",
    "prisma": "Prisma",
    "python": "Python",
    "clerk": "Clerk",
    "neon": "Neon",
    "tailwind": "Tailwind CSS",
    "vite": "Vite",
    "postgresql": "PostgreSQL",
    "nodemailer": "Nodemailer",
    "nextauth": "NextAuth",
    "drizzle": "Drizzle",
    "mongodb": "MongoDB",
    "bun": "Bun"
}

def tech_stack_obj(item):
    return {
        "name": tech_stack_map.get(item, "[Unknown]"),
        "logo": {
            "src": "/projects/tech-stacks/" + item + ".png",
            "alt": item.capitalize() + " Logo"
        }
    }

current_year = "2024-2025"

for year, projects in data_2.items():
    for key, project in projects.items():
        if isinstance(project, dict):
            name = project.get("name", "")
            summary = project.get("summary", "")
            project_goal = project.get("project-goal", "")
            leadership = project.get("leadership", "")
            developers = project.get("developers", "")
            tech_stack = map(
                lambda x: tech_stack_obj(x),
                project.get("tech-stack", [])
            )
            tech_stack = list(tech_stack)
            # final-screens is expected to be a list;
            # if not provided or empty, the list will remain empty.
            final_screens = project.get("final-screens", [])
        else:
            name = str(project)
            summary = ""
            project_goal = ""
            leadership = ""
            developers = ""
            tech_stack = []
            final_screens = []
            
        new_format_data[key] = {
            "hero": {
                "projectName": name,
                "schoolYear": year if year != current_year else f"Current Project ({year})",
                
                "image": {
                    "src": f"/projects/{year}/{key}/hero.png",
                    "alt": f"{name} Project Page Image"
                } if year != current_year else None,
                
            },
            "overview": {
                "logo": {
                    "src": f"/projects/{year}/{key}/logo.png",
                    "alt": f"{name} Logo"
                },
                "summary": summary,
                "projectGoal": project_goal,
                "teamMembers": {
                    "leadership": leadership,
                    "developers": developers
                },
                "teamPicture": {
                    "src": f"/projects/{year}/{key}/team-photo.png",
                    "alt": f"{name} Team Photo"
                }
            },
            "techStack": tech_stack,
            "finalScreens": [
                {
                    "src": f"/projects/{year}/{key}/{screen}",
                    "alt": "[TBD]"
                } for screen in final_screens if screen
            ]
        }

with open(output_file_2, "w", encoding="utf-8") as f:
    json.dump(new_format_data, f, indent=2)

print("New format transformation complete. New JSON saved to:", output_file_2)